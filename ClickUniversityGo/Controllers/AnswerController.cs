using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ClickUniversityGo.Models;
using ClickUniversityGo.Services;
using Microsoft.Extensions.Configuration;

namespace ClickUniversityGo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        IConfiguration ConfigRoot;
        private DAL dal;

        public AnswerController(IConfiguration config)
        {
            ConfigRoot = config;
            dal = new DAL(ConfigRoot.GetConnectionString("DefaultConnection"));
        }
        // GET: api/Answer
        //[HttpGet]
        //public IEnumerable<Answer> GetAllAnswers()
        //{
        //    return dal.GetAllAnswers();
        //}

        //// GET: api/Answer/5
        [HttpGet("{id}")]
        public IEnumerable<Answer> GetAnswersByQuestionId(int id)
        {
            return dal.GetAnswersByQuestionId(id);
        }

        // POST: api/Answer
        [HttpPost]
        public int AddNewAnswer(Answer a)
        {
            int result = dal.CreateAnswer(a);
            return result;
        }

        
        [HttpPut]
        public Object UpdateAnswer(Answer a)
        {
            int result = dal.UpdateAnswer(a);
            return new
            {
                result = result,
                success = result == 1 ? true : false
            };
        }

        //// PUT: api/Answer/5
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
