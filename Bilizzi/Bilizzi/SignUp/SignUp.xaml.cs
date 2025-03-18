using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Text.RegularExpressions;

namespace Bilizzi.SignUp
{
    /// <summary>
    /// Interaction logic for SignUp.xaml
    /// </summary>
    public partial class SignUp : UserControl
    {
        public SignUp()
        {
            InitializeComponent();
        }

        private void SignUpButton_Click(object sender, RoutedEventArgs e)
        {
            // Get user input from the UI fields
            string username = UsernameTextBox.Text;
            string email = EmailTextBox.Text;
            string password = PasswordBox.Password;
            string confirmPassword = ConfirmPasswordBox.Password;

            // Basic input validation
            if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(password) || string.IsNullOrWhiteSpace(confirmPassword))
            {
                MessageBox.Show("Please fill in all fields.");
                return;
            }

            // Email validation using a simple regex
            if (!IsValidEmail(email))
            {
                MessageBox.Show("Please enter a valid email address.");
                return;
            }

            // Check if passwords match
            if (password != confirmPassword)
            {
                MessageBox.Show("Passwords do not match.");
                return;
            }

            DatabaseHelper dbHelper = new DatabaseHelper();
            string query = $"INSERT INTO Users (Username, Email, Password) VALUES ('{username}', '{email}', '{password}')";
            int rowsAffected = dbHelper.ExecuteNonQuery(query);

            if (rowsAffected > 0)
            {
                MessageBox.Show("Sign up successful!");
                Bilizzi.FirstPage.FirstPage firstPage = new Bilizzi.FirstPage.FirstPage();
                Window.GetWindow(this).Content = firstPage;
            }
            else
            {
                MessageBox.Show("Sign up failed. Please try again.");
            }
        }

        private void LogInButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the Login page
            Bilizzi.Login.Login loginPage = new Bilizzi.Login.Login();
            Window.GetWindow(this).Content = loginPage; // Replace the current content with the Login page
        }

        // Helper method to validate email format
        private bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }

    }
}
