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

namespace Bilizzi.Login
{
    /// <summary>
    /// Interaction logic for Login.xaml
    /// </summary>
    public partial class Login : UserControl
    {
        public Login()
        {
            InitializeComponent();
        }

        private void TextBox_TextChanged_1(object sender, TextChangedEventArgs e)
        {
            // Add logic for handling text changes (if needed)
        }

        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            string username = UsernameTextBox.Text;           
            string password = PasswordBox.Password;

            DatabaseHelper dbHelper = new DatabaseHelper();
            string query = $"SELECT * FROM Users WHERE Username='{username}' AND Password='{password}'";
            DataTable result = dbHelper.ExecuteQuery(query);

            if (result.Rows.Count > 0)
            {
                // Navigate to the Home page after successful login
                Bilizzi.Home.Home homePage = new Bilizzi.Home.Home();
                Window.GetWindow(this).Content = homePage;
            }
            else
            {
                MessageBox.Show("Invalid username or password. Please try again.");
            }
        }

        private void SignUpButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the SignUp page
            Bilizzi.SignUp.SignUp signUpPage = new Bilizzi.SignUp.SignUp();
            Window.GetWindow(this).Content = signUpPage;
        }

    }
}
