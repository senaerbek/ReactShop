using Core.Entities;
using Core.Utilities.Results;
using System;
using System.Collections.Generic;
using System.Text;

namespace Businness.Abstract
{
   public interface ITrademarkService
    {
        IDataResult<List<Trademark>> GetAll();
        IDataResult<List<Trademark>> GetByStatus(int statu);
        IResult Add(Trademark trademark);
         IResult Update(Trademark trademark);
        IResult Delete(Trademark trademark);
    }
}
