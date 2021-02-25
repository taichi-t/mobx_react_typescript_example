import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './Hello';
import { UserStore } from './stores/user';
import { BookStore } from './stores/book';

export const storesContext = React.createContext({
  userStore: new UserStore(),
  bookStore: new BookStore(),
});

ReactDOM.render(<Hello />, document.getElementById('app'));
