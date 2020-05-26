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
    public class UniversityController : ControllerBase
    {

        IConfiguration ConfigRoot;
        private DAL dal;

        public UniversityController(IConfiguration config)
        {
            ConfigRoot = config;
            dal = new DAL(ConfigRoot.GetConnectionString("DefaultConnection"));
        }

        // GET: api/University
        [HttpGet]
        public IEnumerable<University> Get()
        {
            return dal.GetAllUniversities();
        }

        // GET: api/University/5
        [HttpGet("{id}")]
        public University Get(int id)
        {
            return dal.GetUniversityByID(id);
        }
        [HttpGet("state/{state}")]
        public IEnumerable<University> GetByState(string state)
        {
            return dal.GetUniversityByState(state);
        }
        [HttpGet("act/{id}")]
        public IEnumerable<University> GetACT(int id)
        {
            return dal.GetUniversityByMaxACT(id);
        }
        [HttpGet("sat/{id}")]
        public IEnumerable<University> getSAT(int id)
        {
            return dal.GetUniversityByMaxSAT(id);
        }
        [HttpGet("on-campus-in-state/{id}")]
        public IEnumerable<University> GetCostOnCampusInState(int id)
        {
            return dal.GetUniversityByMaxCostOnCampusInState(id);
        }
        [HttpGet("on-campus-out-of-state/{id}")]
        public IEnumerable<University> GetCostOnCampusOutOfState(int id)
        {
            return dal.GetUniversityByMaxCostOnCampusOutOfState(id);
        }
        [HttpGet("off-campus-in-state/{id}")]
        public IEnumerable<University> GetCostOffCampusInState(int id)
        {
            return dal.GetUniversityByMaxCostOffCampusInState(id);
        }
        [HttpGet("off-campus-out-of-state/{id}")]
        public IEnumerable<University> GetCostOffCampusOutOfState(int id)
        {
            return dal.GetUniversityByMaxCostOffCampusOutOfState(id);
        }

        [HttpGet("max-population/{id}")]
        public IEnumerable<University> GetMaxPopulation(int id)
        {
            return dal.GetUniversityByMaxPopulation(id);
        }
        [HttpGet("max-population/{id}")]
        public IEnumerable<University> GetPercentAdmitted(int id)
        {
            return dal.GetUniversityByMaxPopulation(id);
        }
        //// POST: api/University
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT: api/University/5
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
