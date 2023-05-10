using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class WorkerDTO
    {
        public string IdWorker { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string HomeNumber { get; set; }
        public DateTime? BirthDate { get; set; }
        public string Tellephon { get; set; }
        public string Cellphone { get; set; }
        public string ImgPath { get; set; }


    }
}
