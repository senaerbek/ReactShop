using Core.DataAccess.Abstract;
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Abstract
{
   public interface IProductDal : IEntityRepository<Product>
    {
        List<Product> GetWithSizes();
        List<Product> GetWithSizesById(int trademarkId);
    }
}
