using Core.Entities;
using Core.Utilities.Results;


namespace Businness.Abstract
{
    public interface IUserOperationClaimService
    {
        IResult Add(UserOperationClaim userOperationClaim);
    }
}
