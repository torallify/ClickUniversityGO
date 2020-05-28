using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClickUniversityGo.Models
{
    public class Answer
    {
		public int Id { get; set; }
		public string Email { get; set; }
		public string Detail { get; set; }
		public int QuestionId { get; set; }
		public DateTime Posted { get; set; }
		public int Upvotes { get; set; }
	}
}
