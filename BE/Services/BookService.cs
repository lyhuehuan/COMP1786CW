using System.ComponentModel;
using BackEnd.Data;
using BackEnd.Models;
using BackEnd.Services.IServices;
 
namespace BackEnd.Services
{
    public class BookService : IBookService
    {
        private readonly ApplicationDbContext _db;

        public BookService(ApplicationDbContext db)
        {
            _db = db;
        }
        public void Create(Book book)
        {
            _db.Books.Add(book);
            _db.SaveChanges();
        }

        public bool Delete(int id)
        {
            var book = GetById(id);
            if (book == null)
            {
                return false;
            }
            _db.Books.Remove(book);
            _db.SaveChanges();
            return true;
        }

        public IEnumerable<Book> GetAll()
        {
            return _db.Books.ToList();
        }

        public Book GetById(int id)
        {
            return _db.Books.Find(id);
        }

        public void Update(int id, Book book)
        {
            var bookDb = GetById(id);

            bookDb.Description = book.Description;
            bookDb.Name = book.Name;

            _db.Books.Update(bookDb);
            _db.SaveChanges();
        }

        public List<Book> Search(string keyword)
        {
            var result = _db.Books.Where(_ => _.Name.ToLower().Trim().Contains(keyword.ToLower().Trim())).ToList();
            return result;
        }
    }

}
