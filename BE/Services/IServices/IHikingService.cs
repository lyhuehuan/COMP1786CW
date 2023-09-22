using BackEnd.Models;

namespace BackEnd.Services.IServices
{
    public interface IHikingService
    {
        IList<Hiking> GetAll();
        Hiking GetById(int id);
        bool Delete(int id);
        Hiking Create(Hiking input);
        Hiking Update(Hiking input);
        List<Hiking> Search(string keyword);
    }
}
