using System;
using Microsoft.EntityFrameworkCore;

namespace Facebonk.Models
{
    public class FacebonkContext : DbContext
    {
        public FacebonkContext(DbContextOptions<FacebonkContext> options) : base(options)
        {
        }
        public DbSet<Post> Posts { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Comment> Comments { get; set; }

    }

}
