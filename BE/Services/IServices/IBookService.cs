using BackEnd.Models;

namespace BackEnd.Services.IServices
{
    public interface IBookService
    {
        IEnumerable<Book> GetAll();
        Book GetById(int id);
        bool Delete(int id);
        void Create(Book book);
        void Update(int id, Book book);
        List<Book> Search(string keyword);
    }
   
}
