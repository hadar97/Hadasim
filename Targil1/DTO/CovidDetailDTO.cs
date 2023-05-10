using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class CovidDetailDTO
    {
        public int IdCovidDetails { get; set; }
        public DateTime? DateOfSingleVaccine { get; set; }
        public string ProducerOfVaccine { get; set; }
        public DateTime? DateOfPositiveStart { get; set; }
        public DateTime? DateOfRecovery { get; set; }
        public string WorkerId { get; set; }
        public string ImgPath { get; set; }
    }
}
