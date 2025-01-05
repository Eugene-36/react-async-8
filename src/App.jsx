import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/operations';
// COMPONENTS
import ContactForm from './ContactForm.tsx';
import SearchBox from './SearchBox.tsx';
import ContactList from './ContactList.tsx';

function App() {
  const dispatch = useDispatch();
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
