using Microsoft.AspNetCore.Mvc;
using Saipos_ToDo.Domain.PanelAggregate;
using Saipos_ToDo.Infra.Data;
using Saipos_ToDo.Infra.Repositories;
using Saipos_ToDo.Infra.Services;
using System;

namespace Saipos_ToDo.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {

        private readonly ToDoDbContext _context;
        private readonly TaskRepository _repository;
        private readonly EmailValidationService _emailService;

        public TaskController(ToDoDbContext context, EmailValidationService emailService)
        {
            _context = context;
            _emailService = emailService;
            _repository = new TaskRepository(_context);
        }

        [HttpGet]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_repository.Get(id) as Task);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Task task)
        {
            try
            {
                _emailService.ValidateEmail(task);
                _repository.Save(task);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
