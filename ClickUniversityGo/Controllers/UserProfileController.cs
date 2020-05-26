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
    public class UserProfileController : ControllerBase
    {
        IConfiguration ConfigRoot;
        private DAL dal;

        public UserProfileController(IConfiguration config)
        {
            ConfigRoot = config;
            dal = new DAL(ConfigRoot.GetConnectionString("DefaultConnection"));
        }

        // GET: api/UserProfile
        [HttpGet("{id}")]
        public UserProfile GetUserById(int id)
        {
            return dal.GetUserById(id);
        }

        //// GET: api/UserProfile/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/UserProfile
        [HttpPost]
        public int AddUserProfile(UserProfile newUserProfile)
        {
            int result = dal.AddUserProfile(newUserProfile);
            return result;
        }

        //// PUT: api/UserProfile/5
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
