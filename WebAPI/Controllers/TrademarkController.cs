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
    public class TrademarkController : ControllerBase
    {
        ITrademarkService _trademarkService;
        public TrademarkController(ITrademarkService trademarkService)
        {
            _trademarkService = trademarkService;
        }

        [HttpGet]
        public IActionResult GetList()
        {
            var result = _trademarkService.GetAll();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);

        }
        
        [HttpGet("status")]
        public IActionResult GetListStatus()
        {
            var result = _trademarkService.GetByStatus();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);

        }


        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Add([FromForm] Trademark trademark, List<IFormFile> Image)
        {

            foreach (var item in Image)
            {
                if (item.Length > 0)
                {
                    using (var stream = new MemoryStream())
                    {
                        await item.CopyToAsync(stream);
                        trademark.Image = stream.ToArray();

                    }
                }
            }
            trademark.Status = 1;
            var ekle = _trademarkService.Add(trademark);
            if (ekle.Success)
            {
                return Ok(ekle.Message);
            }
            return BadRequest(ekle.Message);


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

    }

}