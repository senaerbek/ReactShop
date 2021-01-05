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
    public class TrademarkManager : ITrademarkService
    {
        ITrademarkDal _trademarkDal;
        public TrademarkManager(ITrademarkDal trademark)
        {
            _trademarkDal = trademark;
        }

        public IResult Add(Trademark trademark)
        {
           _trademarkDal.Add(trademark);
            return new SuccessResult("eklendi");
        }

        public IResult Delete(Trademark trademark)
        {
            
            _trademarkDal.Delete(trademark);
            return new SuccessResult("silindi");
        }

        public IDataResult<List<Trademark>> GetAll()
        {
  
            return new SuccessDataResult<List<Trademark>>(_trademarkDal.GetList().ToList());
        }

        public IDataResult<List<Trademark>> GetByStatus()
        {
            return new SuccessDataResult<List<Trademark>>(_trademarkDal.GetList(p=>p.Status == 1).ToList());
        }
    }
}