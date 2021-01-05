using System;
using System.Collections.Generic;
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
    public class CategoryController : ControllerBase
    {
        private ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }


        [HttpGet]
        public IActionResult GetList()
        {
            var result = _categoryService.GetAll();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpPost]
        public IActionResult Add(Category category)
        {
            var cName = _categoryService.CategoryExists(category.CategoryName);
            if (cName != null)
            {
                return BadRequest("Kategori Mevcut");
            }
            var result = _categoryService.Add(category);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Category category,  int id)
        {
    
            var newCategory = new Category
            {
                Id = id,
                CategoryName = category.CategoryName
            };
            var result = _categoryService.Update(newCategory);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete( int id)
        {
            var deleteCategory = new Category
            {
                Id = id
              
            };
            var result = _categoryService.Delete(deleteCategory);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest(result.Message);
        }
    }
}
