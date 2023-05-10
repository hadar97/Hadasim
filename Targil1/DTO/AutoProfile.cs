using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class AutoProfile: AutoMapper.Profile
    {
        public AutoProfile()
        {
            CreateMap<Worker, WorkerDTO>();
            CreateMap<WorkerDTO, Worker>();
            CreateMap<CovidDetail, CovidDetailDTO>();
            CreateMap<CovidDetailDTO, CovidDetail>();
        }
      
    }
}
