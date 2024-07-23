import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import NewContact from "./components/NewContact";
import AddAndUpdate from "./components/AddAndUpdate";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const { onOpen, onClose, isOpen } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContact = (event) => {
    const value = event.target.value;

    const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          const filterContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))
          setContacts(filterContacts);
          return filterContacts;
        });
  };

  return (
    <>
      <div className="max-w-[450px] mx-auto">
        <Navbar onOpen={onOpen} filterContact={contacts} />
        <ContactCard key={contacts.id} contacts={contacts} />
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={onClose} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </>
  );
}

export default App;
