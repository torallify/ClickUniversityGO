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
    public class FavoriteController : ControllerBase
    {
        IConfiguration ConfigRoot;
        private DAL dal;

        public FavoriteController(IConfiguration config)
        {
            ConfigRoot = config;
            dal = new DAL(ConfigRoot.GetConnectionString("DefaultConnection"));
        }

        //GET: api/Favorite
        [HttpGet("{id}")]
        public IEnumerable<Favorite> GetAllFavoritesByUserID(int id)
        {
            return dal.GetAllFavoritesByUserID(id);
        }

        // POST: api/Favorite
        [HttpPost]
        public int AddToFavorites(Favorite favorites)
        {
            int result = dal.AddToFavorites(favorites);
            return result;
        }

        [HttpDelete("{id}")]
        public object RemoveFromFavorites(int id)
        {
            return dal.RemoveFromFavorites(id);
        }

        //// GET: api/Favorite/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/Favorite
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT: api/Favorite/5
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
