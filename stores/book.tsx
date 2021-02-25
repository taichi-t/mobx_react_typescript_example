import { observable, action, makeAutoObservable, runInAction } from 'mobx';
import { fetcher } from '../libs/fetcher';

interface Book {
  name: string;
  price: number;
}

class BookStore {
  book: Partial<Book[]> = [];

  constructor() {
    makeAutoObservable(this, {
      fetchBooks: action,
      book: observable,
    });
  }

  public async fetchBooks(name: string) {
    const data = await fetcher<Book[]>(
      `http://localhost:3000/books?name=${name}`
    );
    runInAction(() => {
      this.book = data;
    });
  }
}

const bookStore = new BookStore();
export default bookStore;
export { BookStore };
