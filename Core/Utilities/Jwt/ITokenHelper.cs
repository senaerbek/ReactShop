using Core.Entities;
using System;
using System.Collections.Generic;


namespace Core.Utilities.Jwt
{
  public  interface ITokenHelper
    {
        AccessToken CreateToken(User user, List<OperationClaim> operationClaims);
    }
}
