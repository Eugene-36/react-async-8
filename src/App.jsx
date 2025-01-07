import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operations';
// COMPONENTS
import ContactForm from './ContactForm.tsx';
import SearchBox from './SearchBox.tsx';
import ContactList from './ContactList.tsx';
import { selectIsLoading, selectError } from './redux/selectors.ts';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  console.log('isLoading', isLoading);
  console.log('error', error);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <section>
          <ContactForm />
        </section>
        {isLoading && !error && <b>Request in progress...</b>}
        <section>
          <SearchBox />
        </section>
        <section>
          <ContactList />
        </section>
      </div>
    </>
  );
}

export default App;
