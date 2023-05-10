using DAL.Interfaces;
using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
   public class CovidDetailsDAL:ICovidDetailsDAL
    {
        Mycontext Context = new Mycontext();
        public List<CovidDetail> GetAllCovidDetails()
        {
            List<CovidDetail> listCD = new List<CovidDetail>();
            listCD = Context.CovidDetails.ToList();
            return listCD;
        }


        public int[] GetCountAtMonth()
        { DateTime d = new DateTime();

            List<CovidDetail> listCD = new List<CovidDetail>();
            listCD = GetAllCovidDetails();
            int[] arr = new int[31];
            for (int i = 0; i < listCD.Count; i++)
            {
                if ((listCD[i].DateOfPositiveStart?.Month) == DateTime.Now.Month&& (listCD[i].DateOfPositiveStart?.Year) == DateTime.Now.Year)
                {
                    arr[Convert.ToInt32(listCD[i].DateOfPositiveStart?.Day)]++;
                }
            }
            return arr;
        }

        public int GetCountVaccine()
        {
            int c = 0;
            CovidDetail w = null;
            List<Worker> l = Context.Workers.Where(x => x.IdWorker != null).ToList();
            for (int i = 0; i < l.Count; i++)
            {
                w=Context.CovidDetails.Where(x => x.WorkerId == l[i].IdWorker&&x.DateOfSingleVaccine!=null).FirstOrDefault();
                if (w != null)
                    c++;
            }
            int All = Context.Workers.Count();
            c = Math.Abs(All - c);
            return c;
        }

        public List<CovidDetail> GetCovidDetailsByWorker(string WorkerId)
        {
          List<CovidDetail> CDlist = new List<CovidDetail>();
            CDlist = Context.CovidDetails.Where(x => x.WorkerId.Equals(WorkerId)).ToList();
            return CDlist;
        }
        public bool AddCovidDetail(CovidDetail CD)
        {CovidDetail c = Context.CovidDetails.Where(x => x.WorkerId.Equals(CD.WorkerId) && x.DateOfPositiveStart != null).FirstOrDefault();
            int countp= Context.CovidDetails.Count(x => x.WorkerId.Equals(CD.WorkerId) && x.DateOfPositiveStart != null);
            int countForRecovery = Context.CovidDetails.Count(x => (x.DateOfRecovery.Equals(CD.DateOfRecovery)&&CD.DateOfRecovery!=null) && x.WorkerId.Equals(CD.WorkerId));
            int count= Context.CovidDetails.Count(x => x.WorkerId.Equals(CD.WorkerId) && x.DateOfSingleVaccine != null);
            if (CD.DateOfRecovery != null)
            {
                if (countForRecovery <= 1 && count <= 4 && countp == 1&&c.DateOfPositiveStart<CD.DateOfRecovery)
                {
                    Context.CovidDetails.Add(CD);
                    Context.SaveChanges();
                    return true;
                }
            }

            else
            {
                if (countForRecovery <= 1 && count <= 4)
                {
                    Context.CovidDetails.Add(CD);
                    Context.SaveChanges();
                    return true;
                }
            }
            return false;
        }

    

}
}
