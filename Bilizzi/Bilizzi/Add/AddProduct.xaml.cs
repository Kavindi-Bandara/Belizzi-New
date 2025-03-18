using System;
using System.Data;
using System.Windows;
using System.Windows.Controls;

namespace Bilizzi.Product
{
    public partial class AddProduct : Window
    {
        public AddProduct()
        {
            InitializeComponent();
        }

        private void AddButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                int id = int.Parse(txtID.Text);
                string name = txtName.Text;
                decimal price = decimal.Parse(txtPrice.Text);
                int quantity = int.Parse(txtQuantity.Text);

                DatabaseHelper dbHelper = new DatabaseHelper();
                string query = $"INSERT INTO Products (ID, Name, Price, Quantity) VALUES ({id}, '{name}', {price}, {quantity})";
                int rowsAffected = dbHelper.ExecuteNonQuery(query);

                if (rowsAffected > 0)
                {
                    MessageBox.Show("Product added successfully!");
                    this.DialogResult = true; // Close the form with success
                }
                else
                {
                    MessageBox.Show("Failed to add product.");
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error: " + ex.Message);
            }
        }
    }
}
