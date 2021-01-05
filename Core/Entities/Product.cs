using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public int TrademarkId { get; set; }
        public string Code { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public string Date { get; set; }
        public int Stock { get; set; }
        public byte[] Image { get; set; }
        public string ProductDescription { get; set; }
        public virtual Trademark Trademark { get; set; }
        public ICollection<AvailableSize> AvailableSizes { get; set; }
        public virtual Category Category { get; set; }
    }
}
