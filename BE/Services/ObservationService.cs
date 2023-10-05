using BackEnd.Data;
using BackEnd.Models;
using BackEnd.Services.IServices;

public class ObservationService:IObservationService
{
    private readonly ApplicationDbContext _db;

    public ObservationService(ApplicationDbContext db)
    {
        _db = db;
    }
    public Observation Create(Observation input)
    {
        try
        {
            _db.Observations.Add(input);
            _db.SaveChanges();
            return input;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public bool Delete(int id)
    {
        try
        {
            var observation = _db.Observations.FirstOrDefault(x => x.id == id);
            if (observation == null)
                return false;

            _db.Observations.Remove(observation);
            _db.SaveChanges();
            return true;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public IList<Observation> GetAll(int hikingId)
    {
        return _db.Observations.Where(x => x.HikingId == hikingId).ToList();
    }

    public Observation GetById(int id)
    {
        try
        {
            var observation = _db.Observations.FirstOrDefault(x => x.id == id);
            if (observation == null)
                throw new NullReferenceException();
            return observation;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public Observation Update(Observation input)
    {
        try
        {
            _db.Observations.Update(input);
            _db.SaveChanges();
            return input;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
}
