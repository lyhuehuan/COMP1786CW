using BackEnd.Models;

namespace BackEnd.Services.IServices
{
    public interface IObservationService
    {
        IList<Observation> GetAll(int hikingId);
        Observation GetById(int id);
        bool Delete(int id);
        Observation Create(Observation input);
        Observation Update(Observation input);
    }
}
