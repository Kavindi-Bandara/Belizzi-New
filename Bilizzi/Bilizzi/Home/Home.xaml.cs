using System;
using System.Collections.Generic;
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

namespace Bilizzi.Home
{
    /// <summary>
    /// Interaction logic for Home.xaml
    /// </summary>
    public partial class Home : UserControl
    {
        public Home()
        {
            InitializeComponent();
        }

        private void HomeButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the Home page (refresh the current page)
            Bilizzi.Home.Home homePage = new Bilizzi.Home.Home();
            Window.GetWindow(this).Content = homePage; // Replace the current content with the Home page
        }

        private void ProductButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the Product page
            Bilizzi.Product.Product productPage = new Bilizzi.Product.Product();
            Window.GetWindow(this).Content = productPage; // Replace the current content with the Product page
        }

        private void SignUpButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the SignUp page
            Bilizzi.SignUp.SignUp signUpPage = new Bilizzi.SignUp.SignUp();
            Window.GetWindow(this).Content = signUpPage; // Replace the current content with the SignUp page
        }

        private void LogInButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the Login page
            Bilizzi.Login.Login loginPage = new Bilizzi.Login.Login();
            Window.GetWindow(this).Content = loginPage; // Replace the current content with the Login page
        }
    }
}
