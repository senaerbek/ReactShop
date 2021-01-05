using Core.Entities;
using Core.Utilities.Jwt;
using Core.Utilities.Results;
using Entities.DTOs;

namespace Businness.Abstract
{
    public  interface IAuthService
    {
        IDataResult<User> Register(UserForRegisterDto userForRegisterDto, string passwordz);
        IDataResult<User> Login(UserForLoginDto userForLoginDto);
        IResult UserExists(string email);
        IDataResult<AccessToken> CreateAccessToken(User user);
        IResult Delete(User user);
    }
}
