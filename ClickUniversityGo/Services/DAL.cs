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
        public IEnumerable<University> GetUniversityByMaxSAT(int score)
        {
            string queryString = "SELECT * FROM Universities WHERE (SATReadWrite + SATMath) <= @score";
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
        public IEnumerable<University> GetUniversityByMaxCostOffCampusInState(int cost)
        {
            string queryString = "SELECT * FROM Universities WHERE CostOffCampusInState <= @cost";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { cost = cost });

            conn.Close();

            return Universities;
        }
        public IEnumerable<University> GetUniversityByMaxCostOnCampusOutOfState(int cost)
        {
            string queryString = "SELECT * FROM Universities WHERE CostOnCampusOutOfState <= @cost";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { cost = cost });

            conn.Close();

            return Universities;
        }
        public IEnumerable<University> GetUniversityByMaxCostOffCampusOutOfState(int cost)
        {
            string queryString = "SELECT * FROM Universities WHERE CostOffCampusOutOfState <= @cost";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { cost = cost });

            conn.Close();

            return Universities;
        }
        public IEnumerable<University> GetUniversityByState(string state)
        {
            string queryString = "SELECT * FROM Universities WHERE State = @state";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { state = state });

            conn.Close();

            return Universities;
        }

        public IEnumerable<University> GetUniversityByMaxPopulation(int pop)
        {
            string queryString = "SELECT * FROM Universities WHERE UndergradEnrollment = @pop";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { pop = pop });

            conn.Close();

            return Universities;
        }
        public IEnumerable<University> GetUniversityByPercentAdmitted(int percent)
        {
            string queryString = "SELECT * FROM Universities WHERE PercentAdmitted = @percent";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { percent = percent });

            conn.Close();

            return Universities;
        }
        public IEnumerable<University> GetUniversityByNumBachelor(int num)
        {
            string queryString = "SELECT * FROM Universities WHERE NumBachelor = @num";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

            conn.Close();

            return Universities;
        }
        public IEnumerable<University> GetUniversityByNumAssociate(int num)
        {
            string queryString = "SELECT * FROM Universities WHERE NumAssociate = @num";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

            conn.Close();

            return Universities;
        }
        public IEnumerable<University> GetUniversityByGraduationRate(int num)
        {
            string queryString = "SELECT * FROM Universities WHERE GraduationRate = @num";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

            conn.Close();

            return Universities;
        }
        public IEnumerable<University> GetUniversityByProgramEducation(int num)
        {
            string queryString = "SELECT * FROM Universities WHERE ProgramEducation = @num";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

            conn.Close();

            return Universities;
        }
        public IEnumerable<University> GetUniversityByProgramBusiness(int num)
        {
            string queryString = "SELECT * FROM Universities WHERE ProgramBusiness = @num";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

            conn.Close();

            return Universities;
        }
        public IEnumerable<University> GetUniversityByProgramEngineering(int num)
        {
            string queryString = "SELECT * FROM Universities WHERE ProgramEngineering = @num";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

            conn.Close();

            return Universities;
        }
        public IEnumerable<University> GetUniversityByProgramScience(int num)
        {
            string queryString = "SELECT * FROM Universities WHERE ProgramScience = @num";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

            conn.Close();

            return Universities;
        }
        public IEnumerable<University> GetUniversityByProgramMath(int num)
        {
            string queryString = "SELECT * FROM Universities WHERE ProgramMath = @num";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

            conn.Close();

            return Universities;
        }
        public IEnumerable<University> GetUniversityByProgramPhysicalScience(int num)
        {
            string queryString = "SELECT * FROM Universities WHERE ProgramPhysicalScience = @num";
            IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

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

        public int AddToFavorites(Favorite f)
        {
            string executeQuery = "INSERT INTO Favorites (UserID, UniversityID) VALUES (@userID, @universityID)";

            int result = conn.Execute(executeQuery, new { userID = f.UserID, universityID = f.UniversityID });
            conn.Close();
            return result;
        }

        public int RemoveFromFavorites(int id)
        {
            string delete = "DELETE FROM Favorites WHERE ID = @id";
            int result = conn.Execute(delete, new { id = id });
            conn.Close();
            return result;
        }

        public IEnumerable<JoinedItem> GetAllFavorites(int id)
        {
            string command = "SELECT f.ID, f.UserID, u.UniversityName FROM ";
            command += "Favorites f INNER JOIN Universities u ON f.ID = u.ID WHERE f.UserID=@id";

            IEnumerable<JoinedItem> result = conn.Query<JoinedItem>(command,
                new { id = id });

            conn.Close();

            return result;
        }

        // ************************ Q and A ********************
        public IEnumerable<Question> GetAllQuestions()
        {
            string queryString = "SELECT * FROM Questions";
            IEnumerable<Question> Questions = conn.Query<Question>(queryString);
            conn.Close();
            return Questions;
        }

        public Question GetQuestionById(int id)
        {
            string queryString = "SELECT * FROM Questions WHERE ID = @id";

            Question result = conn.QueryFirst<Question>(queryString, new { id = id });
            conn.Close();
            return result;
        }

        public IEnumerable<Answer> GetAnswersByQuestionId(int id)
        {
            string queryString = "SELECT * FROM Answer WHERE QuestionId = @id";
            IEnumerable<Answer> Answers = conn.Query<Answer>(queryString, new { id = id });
            conn.Close();
            return Answers;
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
