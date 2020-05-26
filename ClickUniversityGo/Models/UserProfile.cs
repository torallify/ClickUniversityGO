using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClickUniversityGo.Models
{
    public class UserProfile
    {
		public int ID { get; set; }
		//public string UserID { get; set; }
		public string UserName { get; set; }
		public string Email { get; set; }
		public string HomeState { get; set; }
		public int ACTScore { get; set; }
		public int SATScore { get; set; }
		public string DesiredState { get; set; }
	}
}
