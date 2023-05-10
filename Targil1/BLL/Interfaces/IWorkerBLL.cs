using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
      public interface IWorkerBLL
    {
        public List<WorkerDTO> GetAllWorkers();
        public WorkerDTO GetWorker(string WorkerId);
        public bool AddWorker(WorkerDTO Worker);
    }
}
