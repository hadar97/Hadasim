using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using BLL.Interfaces;
using DAL.Interfaces;
using DAL.models;

namespace BLL
{
  public  class WorkersBLL:IWorkerBLL
    {
        IMapper imapper;
        IWorkerDAL iworker;
        public WorkersBLL(IWorkerDAL w)
        {
           
            var config = new MapperConfiguration(cgf =>
            {
                cgf.AddProfile<AutoProfile>();
            });
            imapper = config.CreateMapper();
            iworker = w;
        }


        public List<WorkerDTO> GetAllWorkers()
        {
           
            List<Worker> ListOfWorkersFromServer = iworker.GetAllWorkers();
            List<WorkerDTO> WorkersDTOList = new List<WorkerDTO>();

            foreach (Worker item in ListOfWorkersFromServer)
            {
                WorkerDTO w = imapper.Map<Worker, WorkerDTO>(item);
                WorkersDTOList.Add(w);

            }
            return WorkersDTOList;
        }

        public WorkerDTO GetWorker(string WorkerId)
        {
          Worker w=  iworker.GetWorker(WorkerId);
            WorkerDTO WDTO= imapper.Map<Worker, WorkerDTO>(w);
            return WDTO;
        }

        public bool AddWorker(WorkerDTO Worker)
        {

            Worker w = imapper.Map<WorkerDTO,Worker> (Worker);
            bool res=    iworker.AddWorker(w);
            return res;
        }

    }
}
