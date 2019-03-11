using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Facebonk.Models;

namespace Facebonk.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacebonkUserController : ControllerBase
    {
        private readonly FacebonkContext _context;

        public FacebonkUserController(FacebonkContext context)
        {
            _context = context;

        }

        [HttpGet]
        public ActionResult<List<User>> GetAll()
        {
            return _context.Users.ToList();
        }

        [HttpGet("{id}", Name = "GetUser")]
        public ActionResult<User> GetById(long id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
        }

    }
}