using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Facebonk.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public string Message { get; set; }
        public DateTime Posted_At { get; set; }

        [ForeignKey("Post")]
        public long PostID { get; set; } 
        public Post Post { get; set; }

    }
}
