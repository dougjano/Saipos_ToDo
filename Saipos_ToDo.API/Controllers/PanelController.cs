using Microsoft.AspNetCore.Mvc;
using Saipos_ToDo.Domain.PanelAggregate;
using Saipos_ToDo.Infra.Data;
using Saipos_ToDo.Infra.Repositories;
using System;

namespace Saipos_ToDo.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PanelController : ControllerBase
    {

        private readonly ToDoDbContext _context;
        private readonly TaskRepository _repository;

        public PanelController(ToDoDbContext context)
        {
            _context = context;
            _repository = new TaskRepository(_context);
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(new Panel(_repository.GetAll()));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] int id)
        {
            try
            {
                var task = _repository.Get(id) as Task;
                if (task.IsTaskDone)
                {
                    task.UnfinishTask();
                }
                else
                {
                    task.FinishTask();
                }

                _repository.Save(task);

                return Ok("Success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
