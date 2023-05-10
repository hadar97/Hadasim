using AutoMapper;
using BLL.Interfaces;
using DAL.Interfaces;
using DAL.models;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
  public  class CovidDetailsBLL:ICovidDetailsBLL
    {

        IMapper imapper;
        ICovidDetailsDAL icoviddetails;
        public CovidDetailsBLL(ICovidDetailsDAL cd)
        {

            var config = new MapperConfiguration(cgf =>
            {
                cgf.AddProfile<AutoProfile>();
            });
            imapper = config.CreateMapper();
            icoviddetails = cd;
        }
        public int[] GetCountAtMonth()
        {
       return     icoviddetails.GetCountAtMonth();
        }
        public List<CovidDetailDTO> GetAllCovidDetails()
        {

            List<CovidDetail> ListOfCovidDetailFromServer = icoviddetails.GetAllCovidDetails();
            List<CovidDetailDTO> CovidDetailDTOList = new List<CovidDetailDTO>();

            foreach (CovidDetail item in ListOfCovidDetailFromServer)
            {
                CovidDetailDTO cdto = imapper.Map<CovidDetail, CovidDetailDTO>(item);
                CovidDetailDTOList.Add(cdto);

            }
            return CovidDetailDTOList;
        }


        public int GetCountVaccine()
        {
            return icoviddetails.GetCountVaccine();
        }

        public List<CovidDetailDTO> GetCovidDetailByWorker (string WorkerId)
        {
            List<CovidDetail> ListOfCovidDetailFromServer = icoviddetails.GetCovidDetailsByWorker(WorkerId);
            List<CovidDetailDTO> CovidDetailDTOList = new List<CovidDetailDTO>();

            foreach (CovidDetail item in ListOfCovidDetailFromServer)
            {
                CovidDetailDTO cdto = imapper.Map<CovidDetail, CovidDetailDTO>(item);
                CovidDetailDTOList.Add(cdto);

            }
            return CovidDetailDTOList;
         
        }

        public bool AddCovidDetails(CovidDetailDTO dTO)
        {

            CovidDetail c = imapper.Map<CovidDetailDTO, CovidDetail>(dTO);
            bool res = icoviddetails.AddCovidDetail(c);
            return res;
        }



    }
}
