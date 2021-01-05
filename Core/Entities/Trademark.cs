using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Core.Entities
{
    public class Trademark{

        public int Id { get; set; }
        public string Name { get; set; }
         public byte[] Image { get; set; }
         public string Description { get; set; }
         public int Status { get; set; }
         public virtual ICollection<Product> Product { get; set; }

    }
}