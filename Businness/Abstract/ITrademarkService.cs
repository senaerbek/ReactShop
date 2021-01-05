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
        IDataResult<List<Trademark>> GetByStatus();
         IResult Add(Trademark trademark);
        IResult Delete(Trademark trademark);
    }
}
