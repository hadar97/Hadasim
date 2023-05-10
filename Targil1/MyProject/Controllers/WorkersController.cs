using BLL.Interfaces;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;


namespace MyProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkersController : ControllerBase
    {
        IWorkerBLL iWorker;
        public WorkersController(IWorkerBLL iW)
        {
            iWorker = iW;
        }

        [HttpGet("GetAllWorkers")]
        public IActionResult GetAllWorkers()
        {
            var worker = iWorker.GetAllWorkers();
            return Ok(worker);
        }



        [HttpGet("GetWorker/{idWorker}")]
        public IActionResult GetWorker(string idWorker)
        {
            var worker = iWorker.GetWorker(idWorker);
            return Ok(worker);

        }
        [HttpPost("AddWorker")]
        public IActionResult AddCategory([FromBody] WorkerDTO workerDTO)
        {
            return Ok(iWorker.AddWorker(workerDTO));
        }

        [HttpPost]
        [Route("upload")]
            public async Task<IActionResult> upload()
            {
                try
                {
                    var file = Request.Form.Files[0];

                    if (file == null || file.Length == 0)
                    {
                        return BadRequest("No file selected");
                    }

                    if (!IsImageFile(file))
                    {
                        return BadRequest("File is not an image");
                    }

                    var fileName = file.FileName;
                    var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/Myimg", fileName);

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }

                    return Ok();
                }
                catch (Exception ex)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
                }
            }

        private bool IsImageFile(IFormFile file)
        {
            if (file.ContentType.ToLower() != "image/jpg"
                && file.ContentType.ToLower() != "image/jpeg"
                && file.ContentType.ToLower() != "image/pjpeg"
                && file.ContentType.ToLower() != "image/gif"
                && file.ContentType.ToLower() != "image/x-png"
                && file.ContentType.ToLower() != "image/png")
            {
                return false;
            }

            var extension = Path.GetExtension(file.FileName).ToLower();
            if (extension != ".jpg" && extension != ".png" && extension != ".gif" && extension != ".jpeg")
            {
                return false;
            }

            return true;
        }

    }  }

