using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Bilizzi.Product
{
    /// <summary>
    /// Interaction logic for Product.xaml
    /// </summary>
    public partial class Product : UserControl
    {
        public Product()
        {
            InitializeComponent();
            LoadProducts();
        }

        private void LoadProducts()
        {
            try
            {
                DatabaseHelper dbHelper = new DatabaseHelper();
                string query = "SELECT * FROM Products"; // Replace "Products" with your table name
                DataTable products = dbHelper.ExecuteQuery(query);

                // Bind the DataTable to the DataGrid
                ProductTable.ItemsSource = products.DefaultView;     
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error loading products: " + ex.Message);
            }
        }

        private void HomeButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the Home page
            Bilizzi.Home.Home homePage = new Bilizzi.Home.Home();
            Window.GetWindow(this).Content = homePage;
        }

        private void ProductButton_Click(object sender, RoutedEventArgs e)
        {
            // Refresh the Product page (or navigate to another page if needed)
            Bilizzi.Product.Product productPage = new Bilizzi.Product.Product();
            Window.GetWindow(this).Content = productPage;
        }

        private void SignUpButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the SignUp page
            Bilizzi.SignUp.SignUp signUpPage = new Bilizzi.SignUp.SignUp();
            Window.GetWindow(this).Content = signUpPage;
        }

        private void LogInButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the Login page
            Bilizzi.Login.Login loginPage = new Bilizzi.Login.Login();
            Window.GetWindow(this).Content = loginPage;
        }

        // Event handler for the "Update" button in the DataGrid
        private void UpdateButton_Click(object sender, RoutedEventArgs e)
        {
            // Get the selected product from the DataGrid
            var selectedItem = ProductTable.SelectedItem as DataRowView;
            if (selectedItem != null)
            {
                string productId = selectedItem["ID"].ToString(); // Replace "ID" with your primary key column name
                string productName = selectedItem["Name"].ToString();
                string productPrice = selectedItem["Price"].ToString();
                string productQuantity = selectedItem["Quantity"].ToString();

                // Open a dialog or window to update the product
                MessageBox.Show($"Update product with ID: {productId}\nName: {productName}\nPrice: {productPrice}\nQuantity: {productQuantity}");
                // Implement logic to update the product in the database
            }
            else
            {
                MessageBox.Show("Please select a product to update.");
            }
        }

        // Event handler for the "Delete" button in the DataGrid
        private void DeleteButton_Click(object sender, RoutedEventArgs e)
        {
            // Get the selected product from the DataGrid
            var selectedItem = ProductTable.SelectedItem as DataRowView;
            if (selectedItem != null)
            {
                string productId = selectedItem["ID"].ToString();// Replace "ID" with your primary key column name

                // Confirm deletion
                MessageBoxResult result = MessageBox.Show("Are you sure you want to delete this product?", "Confirm Delete", MessageBoxButton.YesNo);
                if (result == MessageBoxResult.Yes)
                {
                    try
                    {
                        DatabaseHelper dbHelper = new DatabaseHelper();
                        string query = $"DELETE FROM Products WHERE ID = {productId}"; // Replace "Products" and "ID" with your table and primary key column names
                        int rowsAffected = dbHelper.ExecuteNonQuery(query);

                        if (rowsAffected > 0)
                        {
                            MessageBox.Show("Product deleted successfully.");
                            LoadProducts(); // Refresh the product list
                        }
                        else
                        {
                            MessageBox.Show("Failed to delete product.");
                        }
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show("Error deleting product: " + ex.Message);
                    }
                }
            }
            else
            {
                MessageBox.Show("Please select a product to delete.");
            }
        }

        private void AddItems_Click(object sender, RoutedEventArgs e)
        {
            AddProduct addProductWindow = new AddProduct();
            if (addProductWindow.ShowDialog() == true)
            {
                LoadProducts(); // Refresh product list after adding
            }
        }

    }
}
