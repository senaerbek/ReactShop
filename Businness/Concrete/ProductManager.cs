using Businness.Abstract;
using Core.Entities;
using Core.Utilities.Results;
using DataAccess.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Businness.Concrete
{
    public class ProductManager : IProductService
    {
        IProductDal _productDal; 
        public ProductManager(IProductDal productDal)
        {
            _productDal = productDal;
        }

        public IResult Add(Product product)
        {
            _productDal.Add(product);
            return new SuccessResult("eklendi");
        }

        public IResult Delete(Product product)
        {
            _productDal.Delete(product);
            return new SuccessResult("silindi");
        }

        public IDataResult<List<Product>> GetAll()
        {
            return new SuccessDataResult<List<Product>>(_productDal.GetWithSizes().ToList());
        }

        public IDataResult<Product> GetById(int id)
        {
            return new SuccessDataResult<Product>(_productDal.Get(p => p.Id == id));
        }

        public IDataResult<List<Product>> GetBySubTrademarkId(int sCID)
        {
             return new SuccessDataResult<List<Product>>(_productDal.GetWithSizesById(sCID).ToList());
        }

        public Product ProductExists(string productName)
        {
            var cName = _productDal.Get(p => p.ProductName== productName);
            if(cName != null)
            {
                var newProduct = new Product
                {
                    Id = cName.Id,
                    CategoryId = cName.CategoryId,
                    TrademarkId = cName.TrademarkId,
                    Code = cName.Code,
                    ProductName = cName.ProductName,
                    Price = cName.Price,
                    Date = cName.Date,
                    Stock = cName.Stock+=1
                };
                _productDal.Update(newProduct);
            }
            return cName;
        }

        public IResult Update(Product product)
        {
            _productDal.Update(product);
            return new SuccessResult("güncellendi");
        }
    }
}
