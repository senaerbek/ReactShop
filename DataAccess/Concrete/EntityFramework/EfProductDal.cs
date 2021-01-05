using Core.DataAccess.Concrete.EntityFramework;
using Core.DataAccess.Concrete.JwtContext;
using Core.Entities;
using DataAccess.Abstract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfProductDal : EfEntityRepositoryBase<Product, JwtContext>, IProductDal
    {
        public List<Product> GetWithSizes()
        {
             using (var context = new JwtContext())
            {
                var result = context.Products.Include(s=>s.AvailableSizes)
                .Include(z=>z.Category);
                return result.ToList();
            }
        }

        public List<Product> GetWithSizesById(int trademarkId)
        {
            using (var context = new JwtContext())
            {
                var result = context.Products.Include(s=>s.AvailableSizes)
                 .Include(z=>z.Category)
                 .Where(x=>x.TrademarkId == trademarkId);
                return result.ToList();
            }
        }
    }
}
