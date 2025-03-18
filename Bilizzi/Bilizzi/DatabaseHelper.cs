using MySql.Data.MySqlClient;
using System;
using System.Data;

namespace Bilizzi
{
    public class DatabaseHelper
    {
        private MySqlConnection connection;
        private string server;
        private string database;
        private string uid;
        private string password;

        public DatabaseHelper()
        {
            Initialize();
        }

        private void Initialize()
        {
            server = "localhost";
            database = "dekstop";
            uid = "root";
            password = "";
            string connectionString = $"SERVER={server};DATABASE={database};UID={uid};PASSWORD={password};";

            connection = new MySqlConnection(connectionString);
        }

        public bool OpenConnection()
        {
            try
            {
                connection.Open();
                return true;
            }
            catch (MySqlException ex)
            {
                Console.WriteLine($"Database connection error: {ex.Message}");
                return false;
            }
        }

        public bool CloseConnection()
        {
            try
            {
                connection.Close();
                return true;
            }
            catch (MySqlException ex)
            {
                Console.WriteLine($"Error closing connection: {ex.Message}");
                return false;
            }
        }

        public DataTable ExecuteQuery(string query)
        {
            DataTable dataTable = new DataTable();

            if (this.OpenConnection())
            {
                try
                {
                    using (MySqlCommand cmd = new MySqlCommand(query, connection))
                    using (MySqlDataAdapter adapter = new MySqlDataAdapter(cmd))
                    {
                        adapter.Fill(dataTable);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Query execution error: {ex.Message}");
                }
                finally
                {
                    this.CloseConnection();
                }
            }

            return dataTable;
        }

        /// <summary>
        /// Executes INSERT, UPDATE, DELETE commands with parameters to prevent SQL injection.
        /// </summary>
        public int ExecuteNonQuery(string query, params MySqlParameter[] parameters)
        {
            int rowsAffected = 0;

            if (this.OpenConnection())
            {
                try
                {
                    using (MySqlCommand cmd = new MySqlCommand(query, connection))
                    {
                        if (parameters != null)
                        {
                            cmd.Parameters.AddRange(parameters);
                        }
                        rowsAffected = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"SQL execution error: {ex.Message}");
                }
                finally
                {
                    this.CloseConnection();
                }
            }

            return rowsAffected;
        }
    }
}
