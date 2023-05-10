using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
  public  interface ICovidDetailsDAL
    {
        public int GetCountVaccine();
        public int[] GetCountAtMonth();
        public List<CovidDetail> GetAllCovidDetails();
        public bool AddCovidDetail(CovidDetail CD);
        public List<CovidDetail> GetCovidDetailsByWorker(string WorkerId);
    }
}
