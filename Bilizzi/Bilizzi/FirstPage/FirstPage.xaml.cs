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

namespace Bilizzi.FirstPage
{
    /// <summary>
    /// Interaction logic for FirstPage.xaml
    /// </summary>
    public partial class FirstPage : UserControl
    {
        public FirstPage()
        {
            InitializeComponent();
        }

        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the Login page
            Bilizzi.Login.Login loginPage = new Bilizzi.Login.Login();
            Window.GetWindow(this).Content = loginPage; // Replace the current content with the Login page
        }

        // Event handler for the "Sign Up" button
        private void SignUpButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the SignUp page
            Bilizzi.SignUp.SignUp signUpPage = new Bilizzi.SignUp.SignUp();
            Window.GetWindow(this).Content = signUpPage; // Replace the current content with the SignUp page
        }

    }
}
