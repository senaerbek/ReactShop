using Core.DataAccess.Abstract;
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Abstract
{
    public interface ITrademarkDal : IEntityRepository<Trademark>
    {
        List<Trademark> GetP();
    }
}
