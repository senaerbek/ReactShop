using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entities
{
    public class AvailableSize
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string Size { get; set; }
        public virtual Product Product { get; set; }
    }
}
