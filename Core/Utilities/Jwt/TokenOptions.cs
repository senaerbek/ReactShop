using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Jwt
{
   public class TokenOptions
    {
        public string Auidence { get; set; } //Kullanıcı kitlesi
        public string Issuer { get; set; }  //imzalayan
        public int AccessTokenExpiration { get; set; }
        public string SecurityKey { get; set; }
    }
}
