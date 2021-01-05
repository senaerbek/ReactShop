using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Jwt.Encription
{
   public class SecurityKeyHelper
    {
        public static SecurityKey CreateSKey(string securityKey)
        {
           return new SymmetricSecurityKey(Encoding.UTF8.GetBytes(securityKey));

        }
    }
}
