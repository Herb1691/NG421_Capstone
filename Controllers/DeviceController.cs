using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace capstone.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class DeviceController : ControllerBase
    {
        private ApplicationDbContext _context;

        public DeviceController( ApplicationDbContext context )
        {
            this._context = context;
        }

        [HttpGet]
        public IEnumerable<Devices> Get()
        {
            var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;

            Devices[] devices = null;
            _context.Devices.Where( m => m.User.Id == userId).ToArray();

            return devices;
        }
        [HttpPost]
        public Devices Post([FromBody]Devices devices)
        {
            devices.UserId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            _context.Devices.Add(devices);
            _context.SaveChanges();
            return devices;
        }
    }
}
