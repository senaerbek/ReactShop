using Core.DataAccess.Concrete.EntityFramework;
using Core.DataAccess.Concrete.JwtContext;
using Core.Entities;
using DataAccess.Abstract;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace DataAccess.Concrete.EntityFramework
{
   public class EfTrademarkDal : EfEntityRepositoryBase<Trademark, JwtContext>, ITrademarkDal
    {
        public List<Trademark> GetP()
        {
            using (JwtContext context = new JwtContext())
            {
                var result = from photo in context.Trademarks
                     select new Trademark {
                         Id = photo.Id,
                         Name = photo.Name,
                         Image =  photo.Image 
                     };
                                    

                return result.ToList();
            }
        }
    }
}
