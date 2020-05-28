using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClickUniversityGo.Models
{
    public class Favorite
    {
        public int ID { get; set; }
        public string Email { get; set; }
        public int UniversityID { get; set; }
    }
}
