using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClickUniversityGo.Models;
using ClickUniversityGo.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace ClickUniversityGo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QandAController : ControllerBase
    {
        IConfiguration ConfigRoot;
        private DAL dal;

        public QandAController(IConfiguration config)
        {
            ConfigRoot = config;
            dal = new DAL(ConfigRoot.GetConnectionString("DefaultConnection"));
        }

        // GET: api/QandA
        [HttpGet]
        public IEnumerable<Question> GetAllQuestions()
        {
            return dal.GetAllQuestions();
        }

        // GET: api/QandA/5
        [HttpGet("{id}")]
        public Question GetQuestionByID(int id)
        {
            return dal.GetQuestionByID(id);
        }

        // GET: api/QandA/UserName
        [HttpGet("{UserName}")]
        public IEnumerable<Question> GetQuestionsByUserName(string userName)
        {
            return dal.GetQuestionsByUserName(userName);
        }

        [HttpGet("{Category}")]
        public IEnumerable<Question> GetQuestionsByCategory(string category)
        {
            return dal.GetQuestionsByCategory(category);
        }


        // POST: api/QandA
        [HttpPost]
        public int AddNewQuestion(Question q)
        {
            int result = dal.PostQuestion(q);
            return result;
        }

        //// PUT: api/QandA/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
