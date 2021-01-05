using Core.DataAccess.Concrete.EntityFramework;
using Core.DataAccess.Concrete.JwtContext;
using Core.Entities;
using DataAccess.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Concrete.EntityFramework
{
  public  class EfUserOperationClaimDal : EfEntityRepositoryBase<UserOperationClaim, JwtContext>, IUserOperationClaimDal
    {
    }
}
