using BLL.Interfaces;
using DAL.Interfaces;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CovidDetailsController : ControllerBase
    {
        ICovidDetailsBLL detailsBLL;
        public CovidDetailsController(ICovidDetailsBLL bLL)
        {
            detailsBLL = bLL;
        }


        [HttpGet("GetAllCovidDetails")]
        public IActionResult GetAllCovidDetails()
        {
            var covidDetails = detailsBLL.GetAllCovidDetails();
            return Ok(covidDetails);

        }


        [HttpGet("GetCovidDetailsByWorker/{idWorker}")]
        public IActionResult GetCovidDetailsByWorker(string idWorker)
        {
            var covidDetails = detailsBLL.GetCovidDetailByWorker(idWorker);
            return Ok(covidDetails);

        }

        [HttpGet("GetCountDay")]
        public IActionResult GetCountDay()
        {
            var covidDetails = detailsBLL.GetCountAtMonth();
            return Ok(covidDetails);

        }
        [HttpGet("GetCountVaccine")]
        public IActionResult GetCountVaccine()
        {
            var covidDetails = detailsBLL.GetCountVaccine();
            return Ok(covidDetails);

        }



        [HttpPost("AddCovidDetails")]
        public IActionResult AddCategory([FromBody] CovidDetailDTO covidDetailDTO)
        {
            return Ok(detailsBLL.AddCovidDetails(covidDetailDTO));
        }
    }
}
