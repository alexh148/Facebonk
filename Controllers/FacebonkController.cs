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
    public class FacebonkController : ControllerBase
    {
        private readonly FacebonkContext _context;

        public FacebonkController(FacebonkContext context)
        {
            _context = context;

        }

        [HttpGet]
        public ActionResult<List<Post>> GetAll()
        {
            return _context.Posts.OrderByDescending(i => i.Posted_At).ToList();
        }

        [HttpGet("{id}", Name = "GetPost")]
        public ActionResult<Post> GetById(long id)
        {
            var post = _context.Posts.Find(id);
            if (post == null)
            {
                return NotFound();
            }
            return post;
        }

        [HttpPost]
        public async Task<ActionResult<Post>> PostPost(Post post)
        {
            _context.Posts.Add(post);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = post.Id }, post);
        }
    }
}