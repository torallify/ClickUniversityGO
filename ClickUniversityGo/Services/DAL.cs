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
        //This allows connection to SQL
        SqlConnection conn;

        public DAL(string connectionString)
        {
            conn = new SqlConnection(connectionString);
        }

        // ************************ Universities ********************
        // ************************ Universities ********************
        //public IEnumerable<University> GetAllUniversities()
        //{
        //    string queryString = "SELECT * FROM Universities";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString);

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetAllUniversities()
        {
            string queryString = "EXEC GetAllUniversities";
            IEnumerable<University> Universities = conn.Query<University>(queryString);
            conn.Close();
            return Universities;
        }

        //public University GetUniversityByID(int id)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE ID = @id";
        //    University universitiesByID = conn.QueryFirst<University>(queryString, new { id = id });
        //    conn.Close();
        //    return universitiesByID;
        //}

        public University GetUniversityByID(int id)
        {
            string queryString = "EXEC GetUniversityByID @id";
            University result = conn.QueryFirst<University>(queryString, new { id = id });
            conn.Close();
            return result;
        }

        //public IEnumerable<University> GetUniversityByMaxACT(int score)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE ActComposite <= @score";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { score = score });
        //    conn.Close();
        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByMaxACT(int score)
        {
            string queryString = "EXEC GetUniversityByMaxACT @score";
            IEnumerable<University> UniversitiesByMaxACT = conn.Query<University>(queryString, new { score = score });
            conn.Close();
            return UniversitiesByMaxACT;
        }

        //public IEnumerable<University> GetUniversityByMaxSAT(int score)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE (SATReadWrite + SATMath) <= @score";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { score = score });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByMaxSAT(int score)
        {
            string queryString = "EXEC GetUniversityByMaxSAT @SATComposite";
            IEnumerable<University> UniversitiesByMaxSAT = conn.Query<University>(queryString, new { SATComposite = score });

            conn.Close();

            return UniversitiesByMaxSAT;
        }

        //public IEnumerable<University> GetUniversityByMaxCostOnCampusInState(int cost)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE CostOnCampusInState <= @cost";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { cost = cost });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByMaxCostOnCampusInState(int cost)
        {
            string queryString = "EXEC GetUniversityByMaxCostOnCampusInState @CostOnCampusInState";
            IEnumerable<University> UniversityByMaxCostOnCampusInState = conn.Query<University>(queryString, new { CostOnCampusInState = cost });

            conn.Close();

            return UniversityByMaxCostOnCampusInState;
        }

        //public IEnumerable<University> GetUniversityByMaxCostOffCampusInState(int cost)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE CostOffCampusInState <= @cost";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { cost = cost });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByMaxCostOffCampusInState(int cost)
        {
            string queryString = "EXEC GetUniversityByMaxCostOffCampusInState @CostOffCampusInState";
            IEnumerable<University> UniversityByMaxCostOffCampusInState = conn.Query<University>(queryString, new { CostOffCampusInState = cost });

            conn.Close();

            return UniversityByMaxCostOffCampusInState;
        }

        //public IEnumerable<University> GetUniversityByMaxCostOnCampusOutOfState(int cost)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE CostOnCampusOutOfState <= @cost";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { cost = cost });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByMaxCostOnCampusOutOfState(int cost)
        {
            string queryString = "EXEC GetUniversityByMaxCostOnCampusOutOfState @CostOnCampusOutOfState";
            IEnumerable<University> UniversityByMaxCostOnCampusOutOfState = conn.Query<University>(queryString, new { CostOnCampusOutOfState = cost });

            conn.Close();

            return UniversityByMaxCostOnCampusOutOfState;
        }

        //public IEnumerable<University> GetUniversityByMaxCostOffCampusOutOfState(int cost)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE CostOffCampusOutOfState <= @cost";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { cost = cost });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByMaxCostOffCampusOutOfState(int cost)
        {
            string queryString = "EXEC GetUniversityByMaxCostOffCampusOutOfState @CostOffCampusOutOfState";
            IEnumerable<University> UniversityByMaxCostOffCampusOutOfState = conn.Query<University>(queryString, new { CostOffCampusOutOfState = cost });

            conn.Close();

            return UniversityByMaxCostOffCampusOutOfState;
        }

        //public IEnumerable<University> GetUniversityByState(string state)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE State = @state";
        //    //state = $"'{state}'";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { state = state });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByState(string state)
        {
            string queryString = "EXEC GetUniversitiesByState @State";
            IEnumerable<University> UniversityByState = conn.Query<University>(queryString, new { State = state });

            conn.Close();

            return UniversityByState;
        }

        //public IEnumerable<University> GetUniversityByMaxPopulation(int pop)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE UndergradEnrollment = @pop";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { pop = pop });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByMaxPopulation(int pop)
        {
            string queryString = "EXEC GetUniversityByMaxPopulation @UndergradEnrollment";
            IEnumerable<University> UniversityByMaxPopulation = conn.Query<University>(queryString, new { UndergradEnrollment = pop });

            conn.Close();

            return UniversityByMaxPopulation;
        }

        //public IEnumerable<University> GetUniversityByPercentAdmitted(int percent)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE PercentAdmitted = @percent";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { percent = percent });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByPercentAdmitted(int percent)
        {
            string queryString = "EXEC GetUniversityByPercentAdmitted @PercentAdmitted";
            IEnumerable<University> UniversityByPercentAdmitted = conn.Query<University>(queryString, new { PercentAdmitted = percent });

            conn.Close();

            return UniversityByPercentAdmitted;
        }

        //public IEnumerable<University> GetUniversityByNumBachelor(int num)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE NumBachelor = @num";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByNumBachelor(int num)
        {
            string queryString = "EXEC GetUniversityByNumBachelor @NumBachelor";
            IEnumerable<University> UniversityByNumBachelor = conn.Query<University>(queryString, new { NumBachelor = num });

            conn.Close();

            return UniversityByNumBachelor;
        }

        //public IEnumerable<University> GetUniversityByNumAssociate(int num)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE NumAssociate = @num";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByNumAssociate(int num)
        {
            string queryString = "EXEC GetUniversityByNumAssociate @NumAssociate";
            IEnumerable<University> UniversityByNumAssociate = conn.Query<University>(queryString, new { NumAssociate = num });

            conn.Close();

            return UniversityByNumAssociate;
        }

        //public IEnumerable<University> GetUniversityByGraduationRate(int num)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE GraduationRate = @num";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByGraduationRate(int num)
        {
            string queryString = "EXEC  GraduationRate @GraduationRate";
            IEnumerable<University> UniversityByGraduationRate = conn.Query<University>(queryString, new { GraduationRate = num });

            conn.Close();

            return UniversityByGraduationRate;
        }

        //public IEnumerable<University> GetUniversityByProgramEducation(int num)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE ProgramEducation = @num";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByProgramEducation(int num)
        {
            string queryString = "EXEC GetUniversityByProgramEducation @ProgramEducation";
            IEnumerable<University> UniversityByProgramEducation = conn.Query<University>(queryString, new { ProgramEducation = num });

            conn.Close();

            return UniversityByProgramEducation;
        }

        //public IEnumerable<University> GetUniversityByProgramBusiness(int num)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE ProgramBusiness = @num";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByProgramBusiness(int num)
        {
            string queryString = "EXEC GetUniversityByProgramBusiness @ProgramBusiness";
            IEnumerable<University> UniversityByProgramBusiness = conn.Query<University>(queryString, new { ProgramBusiness = num });

            conn.Close();

            return UniversityByProgramBusiness;
        }

        //public IEnumerable<University> GetUniversityByProgramEngineering(int num)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE ProgramEngineering = @num";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByProgramEngineering(int num)
        {
            string queryString = "EXEC GetUniversityByProgramEngineering @ProgramEngineering";
            IEnumerable<University> ProgramEngineering = conn.Query<University>(queryString, new { ProgramEngineering = num });

            conn.Close();

            return ProgramEngineering;
        }

        //public IEnumerable<University> GetUniversityByProgramScience(int num)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE ProgramScience = @num";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByProgramScience(int num)
        {
            string queryString = "EXEC GetUniversityByProgramScience @ProgramScience";
            IEnumerable<University> UniversityByProgramScience = conn.Query<University>(queryString, new { ProgramScience = num });

            conn.Close();

            return UniversityByProgramScience;
        }

        //public IEnumerable<University> GetUniversityByProgramMath(int num)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE ProgramMath = @num";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByProgramMath(int num)
        {
            string queryString = "EXEC GetUniversityByProgramMath @ProgramMath";
            IEnumerable<University> UniversityByProgramMath = conn.Query<University>(queryString, new { ProgramMath = num });

            conn.Close();

            return UniversityByProgramMath;
        }

        //public IEnumerable<University> GetUniversityByProgramPhysicalScience(int num)
        //{
        //    string queryString = "SELECT * FROM Universities WHERE ProgramPhysicalScience = @num";
        //    IEnumerable<University> Universities = conn.Query<University>(queryString, new { num = num });

        //    conn.Close();

        //    return Universities;
        //}

        public IEnumerable<University> GetUniversityByProgramPhysicalScience(int num)
        {
            string queryString = "EXEC GetUniversityByProgramPhysicalScience @ProgramPhysicalScience";
            IEnumerable<University> UniversityByProgramPhysicalScience = conn.Query<University>(queryString, new { ProgramPhysicalScience = num });

            conn.Close();

            return UniversityByProgramPhysicalScience;
        }



        // ************************ Favorites ********************



        public IEnumerable<JoinedItem> GetAllFavorites(string email)
        {
            string queryString = "EXEC GetAllFavorites @Email";
            IEnumerable<JoinedItem> AllFavorites = conn.Query<JoinedItem>(queryString, new { Email = email });
            conn.Close();
            return AllFavorites;
        }

        //public int AddToFavorites(Favorite f)
        //{
        //    string executeQuery = "INSERT INTO Favorites (UserID, UniversityID) VALUES (@userID, @universityID)";

        //    int result = conn.Execute(executeQuery, new { userID = f.UserID, universityID = f.UniversityID });
        //    conn.Close();
        //    return result;
        //}

        public int AddToFavorites(Favorite f)
        {
            string executeQuery = "INSERT INTO Favorites (Email, UniversityID) VALUES (@email, @universityID)";

            int result = conn.Execute(executeQuery, new { Email = f.Email, UniversityID = f.UniversityID });
            conn.Close();
            return result;
        }

        //public int RemoveFromFavorites(int id)
        //{
        //    string delete = "DELETE FROM Favorites WHERE ID = @id";
        //    int result = conn.Execute(delete, new { id = id });
        //    conn.Close();
        //    return result;
        //}

        public int RemoveFromFavorites(int id)
        {
            string delete = "EXEC RemoveFromFavorites @id";
            int result = conn.Execute(delete, new { id = id });
            conn.Close();
            return result;
        }

        //public IEnumerable<JoinedItem> GetAllFavorites(int id)
        //{
        //    string command = "SELECT f.ID, f.UserID, u.UniversityName FROM ";
        //    command += "Favorites f INNER JOIN Universities u ON f.ID = u.ID WHERE f.UserID=@id";

        //    IEnumerable<JoinedItem> result = conn.Query<JoinedItem>(command,
        //        new { id = id });

        //    conn.Close();

        //    return result;
        //}

        public IEnumerable<JoinedItem> GetAllFavorites(int id)
        {
            string command = "EXEC GetAllFavorites @id";

            IEnumerable<JoinedItem> result = conn.Query<JoinedItem>(command,
                new { id = id });

            conn.Close();

            return result;
        }

        // ************************ Q and A ********************

        public int PostQuestion(Question q)
        {
            q.Posted = DateTime.Now;
            q.Status = 1;
            string addString = "Insert Into Questions (Email, Title, Detail, Posted, Category, Tags, Status) ";
            addString += "Values (@Email, @Title, @Detail, @Posted, @Category, @Tags, @Status)";
            return conn.Execute(addString, q);
        }

        public int CreateAnswer(Answer ans)
        {
            ans.Posted = DateTime.Now;
            ans.Upvotes = 0;
            string addQuery = "Insert Into Answers (Email, Detail, QuestionId, Posted, Upvotes) ";
            addQuery += "Values (@Email, @Detail, @QuestionId, @Posted, @Upvotes)";
            return conn.Execute(addQuery, ans);
        }

        //public IEnumerable<Question> GetAllQuestions()
        //{
        //    string queryString = "SELECT * FROM Questions";
        //    IEnumerable<Question> Questions = conn.Query<Question>(queryString);
        //    conn.Close();
        //    return Questions;
        //}
        public IEnumerable<Question> GetAllQuestions()
        {
            string queryString = "EXEC GetAllQuestions";
            IEnumerable<Question> AllQuestions = conn.Query<Question>(queryString);
            conn.Close();
            return AllQuestions;
        }
        public IEnumerable<Answer> GetAllAnswers()
        {
            string queryString = "SELECT * FROM Answers";
            IEnumerable<Answer> Answers = conn.Query<Answer>(queryString);
            conn.Close();
            return Answers;
        }

        //public Question GetQuestionById(int id)
        //{
        //    string queryString = "SELECT * FROM Questions WHERE ID = @id";

        //    Question result = conn.QueryFirst<Question>(queryString, new { id = id });
        //    conn.Close();
        //    return result;
        //}

        public Question GetQuestionByID(int id)
        {
            string queryString = "EXEC GetQuestionByID @id";

            Question QuestionByID = conn.QueryFirst<Question>(queryString, new { id = id });
            conn.Close();
            return QuestionByID;
        }

        //public IEnumerable<Question> GetQuestionsByUserName(string userName)
        //{
        //    string queryString = "SELECT * FROM Questions WHERE UserName = @userName";
        //    IEnumerable<Question> Questions = conn.Query<Question>(queryString);
        //    conn.Close();
        //    return Questions;
        //}

        public IEnumerable<Question> GetQuestionsByUserName(string userName)
        {
            string queryString = "EXEC GetQuestionsByUserName @UserName";
            IEnumerable<Question> QuestionsByUserName = conn.Query<Question>(queryString, new { UserName = userName });
            conn.Close();
            return QuestionsByUserName;
        }

        //public IEnumerable<Question> GetQuestionsByPostedASC(DateTime date)
        //{
        //    string queryString = "SELECT * FROM Questions WHERE Posted = @date Order By Posted ASC";
        //    IEnumerable<Question> Questions = conn.Query<Question>(queryString);
        //    conn.Close();
        //    return Questions;
        //}

        public IEnumerable<Question> GetQuestionsByPostedASC(DateTime date)
        {
            string queryString = "EXEC GetQuestionsByPostedASC @Date";
            IEnumerable<Question> QuestionsByPostedASC = conn.Query<Question>(queryString, new { Date = date });
            conn.Close();
            return QuestionsByPostedASC;
        }

        //public IEnumerable<Question> GetQuestionsByPostedDESC(DateTime date)
        //{
        //    string queryString = "SELECT * FROM Questions WHERE Posted = @date Order By Posted DESC";
        //    IEnumerable<Question> Questions = conn.Query<Question>(queryString);
        //    conn.Close();
        //    return Questions;
        //}

        public IEnumerable<Question> GetQuestionsByPostedDESC(DateTime date)
        {
            string queryString = "EXEC GetQuestionsByPostedDESC @Date";
            IEnumerable<Question> Questions = conn.Query<Question>(queryString, new { Date = date });
            conn.Close();
            return Questions;
        }

        //public IEnumerable<Question> GetQuestionsByCategory(string category)
        //{
        //    string queryString = "SELECT * FROM Questions WHERE Category = @category";
        //    IEnumerable<Question> Questions = conn.Query<Question>(queryString);
        //    conn.Close();
        //    return Questions;
        //}

        public IEnumerable<Question> GetQuestionsByCategory(string category)
        {
            string queryString = "EXEC GetQuestionsByCategory @Category";
            IEnumerable<Question> QuestionsByCategory = conn.Query<Question>(queryString, new { Category = category });
            conn.Close();
            return QuestionsByCategory;
        }

        //public IEnumerable<Answer> GetAnswersByQuestionId(int id)
        //{
        //    string queryString = "SELECT * FROM Answer WHERE QuestionId = @id";
        //    IEnumerable<Answer> Answers = conn.Query<Answer>(queryString, new { id = id });
        //    conn.Close();
        //    return Answers;
        //}

        public IEnumerable<Answer> GetAnswersByQuestionId(int id)
        {
            string queryString = "EXEC GetAnswersByQuestionId @QuestionId";
            IEnumerable<Answer> AnswersByQuestionId = conn.Query<Answer>(queryString, new { QuestionId = id });
            conn.Close();
            return AnswersByQuestionId;
        }


        // ************************ User Profiles ********************\
        //public int AddUserProfile(UserProfile newUserProfile)
        //{
        //    string command = "INSERT INTO UserProfiles (Email, HomeState, ACTScore, SATScore, DesiredState) ";
        //    command += "VALUES (@Email, @HomeState, @ACTScore, @SATScore, @DesiredState) ";

        //    conn.Close();

        //    return conn.Execute(command, newUserProfile);
        //}

        public int AddUserProfile(UserProfile newUserProfile)
        {
            string command = "EXEC AddUserProfile @Email, @HomeState, @ACTScore, @SATScore, @DesiredState";

            conn.Close();

            return conn.Execute(command, newUserProfile);
        }

        //public IEnumerable<UserProfile> GetAllUsers()
        //{
        //    string queryString = "SELECT * FROM UserProfiles";
        //    IEnumerable<UserProfile> UserProfiles = conn.Query<UserProfile>(queryString);
        //    conn.Close();
        //    return UserProfiles;
        //}

        //public IEnumerable<UserProfile> GetAllUsers()
        //{
        //    string queryString = "EXEC GetAllUsers";
        //    IEnumerable<UserProfile> AllUsers = conn.Query<UserProfile>(queryString);
        //    conn.Close();
        //    return AllUsers;
        //}

        //public UserProfile GetUserById(string id)
        //{
        //    string queryString = "SELECT * FROM UserProfiles WHERE UserID = @id";
        //    UserProfile User = conn.QueryFirst<UserProfile>(queryString);
        //    conn.Close();
        //    return User;
        //}

        public IEnumerable<UserProfile> GetUserByEmail(string email)
        {
            string queryString = "EXEC GetUserByEmail @Email";
            IEnumerable<UserProfile> result = conn.Query<UserProfile>(queryString, new { Email = email });
            conn.Close();
            return result;
        }
    }
}
