using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Businness.Abstract;
using Core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public IActionResult GetList()
        {
            var result = _productService.GetAll();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

         [HttpGet("{id}")]
        public IActionResult GetList(int id)
        {
            var result = _productService.GetBySubTrademarkId(id);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpPost]
         [Consumes("multipart/form-data")]
        public async Task<IActionResult> Add([FromForm] Product product, List<IFormFile> Image)
        {
           foreach (var item in Image)
            {
                if (item.Length > 0)
                {
                    using (var stream = new MemoryStream())
                    {
                        await item.CopyToAsync(stream);
                        product.Image = stream.ToArray();

                    }
                }
            }
            var result = _productService.Add(product);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Product product, int id)
        {
            var newProduct = new Product
            {
                Id=id,
                CategoryId = product.CategoryId,
                TrademarkId = product.TrademarkId,
                Code = product.Code,
                ProductName = product.ProductName,
                Price = product.Price,
                Date = product.Date,
                Stock = product.Stock
            };
            var result = _productService.Update(newProduct);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var newProduct = new Product
            {
                Id = id,
            };
            var result = _productService.Delete(newProduct);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }
    }
}
