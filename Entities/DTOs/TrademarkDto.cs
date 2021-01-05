using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Http;

namespace Entities.DTOs
{
    public class TrademarkDto
    {
       public int Id { get; set; }
        public string Name { get; set; }
        public IFormFile Image { get; set; }

    }
}