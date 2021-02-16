using Microsoft.AspNetCore.Mvc;
using Saipos_ToDo.Crosscutting.Settings;
using Saipos_ToDo.Domain.CatFacts;
using Saipos_ToDo.Domain.PanelAggregate;
using Saipos_ToDo.Domain.Request;
using Saipos_ToDo.Infra.Data;
using Saipos_ToDo.Infra.Repositories;
using Saipos_ToDo.Infra.Services;
using System;
using System.Linq;

namespace Saipos_ToDo.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RandomizeController : ControllerBase
    {
        private readonly ToDoDbContext _context;
        private readonly TaskRepository _repository;
        private readonly ApiCallbackService _service;

        public RandomizeController(ToDoDbContext context, ApiCallbackService service)
        {
            _context = context;
            _repository = new TaskRepository(_context);
            _service = service;
        }

        [HttpPost]
        public IActionResult Post()
        {
            try
            {
                var parameters = new RequestParameters()
                {
                    Url = new GlobalOptions().CatFact_Url
                };

                var catFactList = _service.GetResponseList<CatFact>(parameters);

                for (int i = 0; i < new GlobalOptions().Value_Random_Tasks; i += 1)
                {
                    _repository.Save(new Task(catFactList.ElementAt(new Random().Next(0, catFactList.Count())).text));
                }

                return Ok("Success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
