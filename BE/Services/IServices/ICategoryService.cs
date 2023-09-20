using BackEnd.Models;

namespace BackEnd.Services.IServices
{
    public interface ICategoryService
    {
        IEnumerable<Category> GetAll();
        Category GetById(int id);
        bool Delete(int id);
        void Create(Category category);
        void Update(int id, Category category);
    }
}
