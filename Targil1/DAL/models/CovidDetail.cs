using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.models
{
    public partial class CovidDetail
    {
        public int IdCovidDetails { get; set; }
        public DateTime? DateOfSingleVaccine { get; set; }
        public string ProducerOfVaccine { get; set; }
        public DateTime? DateOfPositiveStart { get; set; }
        public DateTime? DateOfRecovery { get; set; }
        public string WorkerId { get; set; }

        public virtual Worker Worker { get; set; }
    }
}
