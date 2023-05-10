using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
  public  interface ICovidDetailsBLL
    {
        public int GetCountVaccine();
        public int[] GetCountAtMonth();
        public bool AddCovidDetails(CovidDetailDTO dTO);
        public List<CovidDetailDTO> GetCovidDetailByWorker(string WorkerId);
        public List<CovidDetailDTO> GetAllCovidDetails();
    }
}
