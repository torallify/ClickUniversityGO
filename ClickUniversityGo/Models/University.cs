using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClickUniversityGo.Models
{
    public class University
    {
        public int ID { get; set; }
        public string UniversityName { get; set; }
        public string Website { get; set; }
        public string State { get; set; }
        public int CostOnCampusInState { get; set; }
        public int CostOnCampusOutOfState { get; set; }
        public int CostOffCampusInState { get; set; }
        public int CostOffCampusOutOfState { get; set; }
        public byte PercentAdmitted { get; set; }
        public int UndergradEnrollment { get; set; }
        public int NumBachelor { get; set; }
        public int NumAssociate { get; set; }
        public byte GraduationRate { get; set; }
        public int ACTComposite { get; set; }
        public int SATReadWrite { get; set; }
        public int SATMath { get; set; }
        public int ProgramEducation { get; set; }
        public int ProgramEngineering { get; set; }
        public int ProgramScience { get; set; }
        public int ProgramMath { get; set; }
        public int ProgramPhysicalScience { get; set; }
        public int ProgramBusiness { get; set; }

    }
}
