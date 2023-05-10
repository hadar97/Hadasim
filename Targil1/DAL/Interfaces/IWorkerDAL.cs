using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
  public  interface IWorkerDAL
    {
        public List<Worker> GetAllWorkers();
        public Worker GetWorker(string WorkerId);
        public bool AddWorker(Worker Worker);
    }
}
