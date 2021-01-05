using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Core.DataAccess.Concrete.JwtContext
{
  public  class JwtContext :DbContext
    {
  
        protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-E1T0HQ2; initial catalog=jwt; integrated security=true");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }


        public DbSet<User> Users { get; set; }
        public DbSet<UserOperationClaim> UserOperationClaims { get; set; }
        public DbSet<OperationClaim> OperationClaims { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
         public DbSet<Trademark> Trademarks { get; set; }
         public DbSet<AvailableSize> AvailableSizes { get; set; }




    }
}
