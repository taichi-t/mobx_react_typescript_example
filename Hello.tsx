import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from './hooks/useStore';

export const Hello = observer(() => {
  const { userStore, bookStore } = useStores();

  React.useEffect(() => {
    userStore.fetchUser('1');
  }, []);

  return (
    <>
      <div>{userStore.user.name}</div>
      <div>{bookStore.book.map((el) => el?.price)}</div>
      <button onClick={() => userStore.fetchUser('2')}>get user</button>
      <button onClick={() => bookStore.fetchBooks('rion king')}>
        ger book
      </button>
    </>
  );
});
