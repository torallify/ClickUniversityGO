using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClickUniversityGo.Models
{
    public class Question
    {
		public int Id { get; set; }
		public string Email { get; set; }
		public string Title { get; set; }
		public string Detail { get; set; }
		public DateTime Posted { get; set; }
		public string Category { get; set; }
		public string Tags { get; set; }
		public int Status { get; set; }
	}
}
