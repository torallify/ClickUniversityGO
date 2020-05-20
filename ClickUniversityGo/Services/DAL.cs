using ClickUniversityGo.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClickUniversityGo.Services
{
    public class DAL
    {
        SqlConnection conn;

        public DAL(string connectionString)
        {
            conn = new SqlConnection(connectionString);
        }

        // ************************ Universities ********************
        public IEnumerable<University> GetAllUniversities()
        {
            string queryString = "SELECT * FROM Universities";
            IEnumerable<University> Universities = conn.Query<University>(queryString);

            return Universities;
        }


        // ************************ Favorites ********************
        public IEnumerable<Favorite> GetAllFavorites()
        {
            string queryString = "SELECT * FROM Favorites";
            IEnumerable<Favorite> Favorites = conn.Query<Favorite>(queryString);

            return Favorites;
        }

        // ************************ Q and A ********************
        public IEnumerable<Question> GetAllQuestions()
        {
            string queryString = "SELECT * FROM Questions";
            IEnumerable<Question> Questions = conn.Query<Question>(queryString);

            return Questions;
        }

        // ************************ User Profiles ********************\
        public IEnumerable<UserProfile> GetAllUsers()
        {
            string queryString = "SELECT * FROM UserProfiles";
            IEnumerable<UserProfile> UserProfiles = conn.Query<UserProfile>(queryString);

            return UserProfiles;
        }

    }
}
