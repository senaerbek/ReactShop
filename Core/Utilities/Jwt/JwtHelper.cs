using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Core.Entities;
using Core.Extentions;
using Core.Utilities.Jwt.Encription;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Core.Utilities.Jwt
{
    public class JwtHelper : ITokenHelper
    {
      
        public IConfiguration _configuration { get; set; }
        TokenOptions _tokenOptions;
        DateTime _accessTokenExpiration;
        public JwtHelper(IConfiguration configuration)
        {
            _configuration = configuration;

            //TokenOptions bilgilerini TokenOptions nesnesine a bind ediyor
            _tokenOptions = configuration.GetSection("TokenOptions").Get<TokenOptions>();

            _accessTokenExpiration = DateTime.Now.AddMinutes(_tokenOptions.AccessTokenExpiration);
        }

        public AccessToken CreateToken(User user, List<OperationClaim> operationClaims)
        {
            var securityKey = SecurityKeyHelper.CreateSKey(_tokenOptions.SecurityKey);
            var signingC = SigningCredentialsHelper.CreateSigningC(securityKey);
            var jwt = CreateSecurityT(_tokenOptions, user, signingC, operationClaims);
            var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
            var token = jwtSecurityTokenHandler.WriteToken(jwt);
            return new AccessToken
            {
                Token = token,
                Expiration = _accessTokenExpiration
            };
        }

        public JwtSecurityToken CreateSecurityT(TokenOptions tokenOptions, User user /* hangi kullanıcı için*/, SigningCredentials signingCredentials , List<OperationClaim> operationClaims /* kullanıcının sahip olduğu claimler*/)
        {
            var jwt = new JwtSecurityToken(
                issuer: tokenOptions.Issuer,
                audience: tokenOptions.Auidence,
                expires:_accessTokenExpiration,
                notBefore:DateTime.Now, //  token ın expiration bilgisi şu andan önceyse geçerli değil
                claims:SetClaims(user,operationClaims),
                signingCredentials: signingCredentials
                );
            return jwt;
        }
        public IEnumerable<Claim> SetClaims (User user, List<OperationClaim> operationClaims){

            var claims = new List<Claim>();
            claims.AddNameIdentifier(user.Id.ToString());
            claims.AddEmail(user.Email);
            claims.AddName($"{user.FirstName} {user.LastName}");
            claims.AddRoles(operationClaims.Select(c => c.Name).ToArray());
            return claims;

        }
    }
}
