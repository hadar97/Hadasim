using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.models
{
    public partial class Worker
    {
        public Worker()
        {
            CovidDetails = new HashSet<CovidDetail>();
        }

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

        public virtual ICollection<CovidDetail> CovidDetails { get; set; }
    }
}
