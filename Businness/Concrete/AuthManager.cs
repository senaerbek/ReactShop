using Businness.Abstract;
using Core.Entities;
using Core.Utilities.Hashing;
using Core.Utilities.Jwt;
using Core.Utilities.Results;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace Businness.Concrete
{
  public  class AuthManager : IAuthService
    {
        IUserService _userService;
        ITokenHelper _tokenHelper;
        IUserOperationClaimService _userOperationClaimService;
        public AuthManager(IUserService userService, ITokenHelper tokenHelper, IUserOperationClaimService userOperationClaimService)
        {
            _userOperationClaimService = userOperationClaimService;
            _tokenHelper = tokenHelper;
            _userService = userService;
        }

        public IDataResult<AccessToken> CreateAccessToken(User user)
        {
            var claims = _userService.GetClaims(user);

            var accessToken = _tokenHelper.CreateToken(user, claims);
            return new SuccessDataResult<AccessToken>(accessToken,"Access Token Oluşturuldu");
        }

        public IResult Delete(User user)
        {
            throw new NotImplementedException();
        }

        public IDataResult<User> Login(UserForLoginDto userForLoginDto)
        {
            var userCheck = _userService.GetByMail(userForLoginDto.Email);
            if (userCheck == null)
            {
                return new ErrorDataResult<User>("kullanıcı yok");
            }
            if (!HashingHelper.VerifyPasswordHash(userForLoginDto.Password, userCheck.PasswordHash, userCheck.PasswordSalt))
            {
                return new ErrorDataResult<User>("Şifre Hatalı");     
            }
            return new SuccessDataResult<User>(userCheck,"Login Başarılı");
        }

        public IDataResult<User> Register(UserForRegisterDto userForRegisterDto, string password)
        {
            byte[] passwordHash, passwordSalt;
            HashingHelper.CreatePasswordHash(password, out passwordHash, out passwordSalt);
            var user = new User
            {
                Email = userForRegisterDto.Email,
                FirstName = userForRegisterDto.FirstName,
                LastName = userForRegisterDto.LastName,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                Status = true
            };
            _userService.Add(user);

            var uoc = new UserOperationClaim
            {
                UserId= user.Id,
                OperationClaimId = userForRegisterDto.ClaimId
            };
            _userOperationClaimService.Add(uoc);
            return new SuccessDataResult<User>(user,"Kayıt olundu");
        }

        public IResult UserExists(string email)
        {
            if (_userService.GetByMail(email)!=null)
            {
                return new ErrorResult("kullanıcı zaten mevcut");
            }
            return new SuccessResult();
        }
    }
}
