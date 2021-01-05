using Core.Entities;
using Core.Utilities.Results;
using System;
using System.Collections.Generic;
using System.Text;

namespace Businness.Abstract
{
   public interface IProductService
    {
        IDataResult<List<Product>> GetAll();
        IDataResult<Product> GetById(int id);
        IDataResult<List<Product>> GetBySubTrademarkId(int sCID);
        IResult Add(Product product);
        IResult Delete(Product product);
        IResult Update(Product product);
        Product ProductExists(string productName);
    }
}
