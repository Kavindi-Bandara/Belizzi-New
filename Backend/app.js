const express = require('express');
const db = require('./db'); // Ensure this points to your MySQL connection file
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Save uploaded files to 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Add unique timestamp to file name
    }
});
const upload = multer({ storage: storage });

app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Middleware to verify the JWT token for authentication
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) return res.status(403).json({ message: 'Token required' });

    jwt.verify(token, 'your-secret-key', (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid or expired token' });
        req.user = user;
        next();
    });
};

// Signup endpoint
app.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ message: 'Error checking user existence' });

        if (results.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        db.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', 
            [username, hashedPassword, email], (err, result) => {
            if (err) return res.status(500).json({ message: 'Error creating user' });

            res.status(201).json({ message: 'User registered successfully' });
        });
    });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err || results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);

        if (!match) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id }, 'your-secret-key', {
            expiresIn: '20m', // Token will expire in 20 min
        });

        res.json({
            token,
            username: user.username,
            message: 'User logged in successfully',
        });
    });
});

// Fetch all clothes with optional search
app.get('/clothes', (req, res) => {
    const { search } = req.query;
    let query = 'SELECT * FROM clothes';
    let params = [];

    if (search) {
        query += ' WHERE name LIKE ?';
        params.push(`%${search}%`);
    }

    db.query(query, params, (err, results) => {
        if (err) return res.status(500).json({ message: 'Error fetching clothes' });
        res.json(results);
    });
});

// // Add to cart
// app.post('/cart', verifyToken, (req, res) => {
//     const { item_id, quantity } = req.body;
//     const user_id = req.user.id;

//     db.query('INSERT INTO cart (user_id, item_id, quantity) VALUES (?, ?, ?)', 
//         [user_id, item_id, quantity], (err) => {
//             if (err) return res.status(500).json({ message: 'Error adding to cart' });
//             res.json({ message: 'Item added to cart successfully' });
//     });
// });

// // Fetch user's cart
// app.get('/cart', verifyToken, (req, res) => {
//     const user_id = req.user.id;

//     db.query('SELECT cart.id, clothes.name, clothes.price, cart.quantity FROM cart JOIN clothes ON cart.item_id = clothes.id WHERE cart.user_id = ?', 
//         [user_id], (err, results) => {
//             if (err) return res.status(500).json({ message: 'Error fetching cart' });
//             res.json(results);
//     });
// });

// // Remove item from cart
// app.delete('/cart/:id', verifyToken, (req, res) => {
//     const { id } = req.params;
//     const user_id = req.user.id;

//     db.query('DELETE FROM cart WHERE id = ? AND user_id = ?', [id, user_id], (err) => {
//         if (err) return res.status(500).json({ message: 'Error removing item from cart' });
//         res.json({ message: 'Item removed from cart successfully' });
//     });
// });

// // Admin routes
// app.post('/admin/clothes', verifyToken, upload.single('image'), (req, res) => {
//     const { name, category, price, description } = req.body;
//     const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

//     db.query('INSERT INTO clothes (name, category, price, description, image_url) VALUES (?, ?, ?, ?, ?)', 
//         [name, category, price, description, imageUrl], (err) => {
//             if (err) return res.status(500).json({ message: 'Error adding clothing item' });
//             res.json({ message: 'Clothing item added successfully' });
//     });
// });

// app.put('/admin/clothes/:id', verifyToken, (req, res) => {
//     const { id } = req.params;
//     const { name, category, price, description, image_url } = req.body;

//     db.query('UPDATE clothes SET name = ?, category = ?, price = ?, description = ?, image_url = ? WHERE id = ?', 
//         [name, category, price, description, image_url, id], (err) => {
//             if (err) return res.status(500).json({ message: 'Error updating clothes' });
//             res.json({ message: 'Clothing item updated successfully' });
//     });
// });

// app.delete('/admin/clothes/:id', verifyToken, (req, res) => {
//     const { id } = req.params;
//     db.query('DELETE FROM clothes WHERE id = ?', [id], (err) => {
//         if (err) return res.status(500).json({ message: 'Error deleting clothes' });
//         res.json({ message: 'Clothing item deleted successfully' });
//     });
// });

// // Add to cart endpoint
// app.post('/cart', verifyToken, (req, res) => {
//     const { item_id, quantity } = req.body;
//     const user_id = req.user.id; // Get the user ID from the JWT token

//     // Validate input
//     if (!item_id || !quantity) {
//         return res.status(400).json({ message: 'Item ID and quantity are required' });
//     }

//     // Check if the item exists in the clothes table
//     db.query('SELECT * FROM clothes WHERE id = ?', [item_id], (err, results) => {
//         if (err) return res.status(500).json({ message: 'Error checking item existence' });
//         if (results.length === 0) return res.status(404).json({ message: 'Item not found' });

//         // Insert the item into the cart table
//         db.query('INSERT INTO cart (user_id, item_id, quantity) VALUES (?, ?, ?)', 
//             [user_id, item_id, quantity], (err) => {      
//                 if (err) return res.status(500).json({ message: 'Error adding to cart' });
//                 res.json({ message: 'Item added to cart successfully' });
//         });
//     });
// });

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});







