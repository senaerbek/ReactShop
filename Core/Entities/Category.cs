using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Core.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public ICollection<Product> Product { get; set; }
    }
}
