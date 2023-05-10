using DAL.Interfaces;
using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class WorkersDAL:IWorkerDAL
    {

        Mycontext Context = new Mycontext();
      
        public List<Worker> GetAllWorkers()
        {
            List<Worker> listW = new List<Worker>();
            listW = Context.Workers.ToList();
            return listW;
        }

        public Worker GetWorker(string WorkerId)
        {
            Worker worker = new Worker();
            worker = Context.Workers.Where(x=>x.IdWorker.Equals(WorkerId)).FirstOrDefault();
            return worker;
        }
        public bool AddWorker(Worker Worker)
        {
            Worker worker=null; 
            worker=Context.Workers.Where(x => x.IdWorker.Equals(Worker.IdWorker)).FirstOrDefault();
            if (worker==null)
            {   
            Context.Workers.Add(Worker);
            Context.SaveChanges();
                return true;
            }
            return false;
        }

    }
}
