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

            conn.Close();

            return Universities;
        }

        public University GetUniversityByID(int id)
        {
            string queryString = "SELECT * FROM Universities WHERE ID = @id";

            University result = conn.QueryFirst<University>(queryString, new { id = id });
            conn.Close();
            return result;
        }

        public IEnumerable<University> GetUniversityByMaxACT(int score)
        {
            string queryString = "SELECT * FROM Universities WHERE ActComposite <= @score";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { score = score });

            conn.Close();

            return Universities;
        }

        public IEnumerable<University> GetUniversityByMaxCostOnCampusInState(int cost)
        {
            string queryString = "SELECT * FROM Universities WHERE CostOnCampusInState <= @cost";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { cost = cost });

            conn.Close();

            return Universities;
        }

        public IEnumerable<University> GetUniversityByMaxPopulation(int pop)
        {
            string queryString = "SELECT * FROM Universities WHERE ((NumBachelor/(GraduationRate/100)) * 4) <= @pop";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { pop = pop });

            conn.Close();

            return Universities;
        }
        // ************************ Favorites ********************
        public IEnumerable<Favorite> GetAllFavoritesByUserID(int id)
        {
            string queryString = "SELECT * FROM Favorites WHERE UserID = @id";
            IEnumerable<Favorite> Favorites = conn.Query<Favorite>(queryString, new { id = id });
            conn.Close();
            return Favorites;
        }

        // ************************ Q and A ********************
        public IEnumerable<Question> GetAllQuestions()
        {
            string queryString = "SELECT * FROM Questions";
            IEnumerable<Question> Questions = conn.Query<Question>(queryString);
            conn.Close();
            return Questions;
        }

        // ************************ User Profiles ********************\
        public IEnumerable<UserProfile> GetAllUsers()
        {
            string queryString = "SELECT * FROM UserProfiles";
            IEnumerable<UserProfile> UserProfiles = conn.Query<UserProfile>(queryString);
            conn.Close();
            return UserProfiles;
        }

    }
}
