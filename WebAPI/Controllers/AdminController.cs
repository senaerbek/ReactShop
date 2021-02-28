using System.Security.Claims;
using Businness.Abstract;
using Core.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(Roles = "Admin")]
    public class AdminController : ControllerBase
    {
        ITrademarkService _trademarkService;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IProductService _productService;
        public AdminController(ITrademarkService trademarkService, IProductService productService, IHttpContextAccessor httpContextAccessor)
        {
            _productService = productService;
            _httpContextAccessor = httpContextAccessor;
            _trademarkService = trademarkService;
        }

        [HttpGet]
        public IActionResult GetUser()
        {
            var user = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.Role).Value;
            return Ok(user);
        }

        [HttpGet("status/{statu}")]
        public IActionResult GetListStatus(int statu)
        {
            var result = _trademarkService.GetByStatus(statu);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var t = new Trademark
            {
                Id = id,
            };
            var result = _trademarkService.Delete(t);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Trademark trademark, int id)
        {
            var newTrademark = new Trademark
            {
                Id = id,
                Name = trademark.Name,
                Image = trademark.Image,
                Description = trademark.Description,
                Status = 1
            };
            var result = _trademarkService.Update(newTrademark);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("products/{categoryId}")]
        public IActionResult GetList(int categoryId)
        {
            var result = _productService.GetByCategory(categoryId);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

    }
}