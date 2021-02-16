using Microsoft.AspNetCore.Mvc;
using Saipos_ToDo.Infra.Services;
using System;

namespace Saipos_ToDo.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AuthenticateService _service;

        public AuthController(AuthenticateService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult Get(string password)
        {
            try
            {
                _service.ValidateUser(password);
                return Ok("Success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
