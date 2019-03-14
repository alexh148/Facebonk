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
    public class CommentController : ControllerBase
    {
        private readonly FacebonkContext _context;

        public CommentController(FacebonkContext context)
        {
            _context = context;

        }

        [HttpGet]
        public ActionResult<List<Comment>> GetAll()
        {
            return _context.Comments.ToList();
        }

        [HttpGet("{id}", Name = "GetCommentByID")]
        public ActionResult<List<Comment>> GetById(int id)
        {
            var comment = _context.Comments.Where(a => a.PostID == id).ToList();
            if (comment == null)
            {
                return NotFound();
            }
            return comment;
        }

        [HttpPost]
        public async Task<ActionResult<Comment>> AddComment(Comment comment)
        {
            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = comment.Id }, comment);
        }
    }
}
