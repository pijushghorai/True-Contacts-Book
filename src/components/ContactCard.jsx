import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { IoRemoveCircle } from "react-icons/io5";
import { db } from "../config/firebase";
import AddAndUpdate from "./AddAndUpdate";
import useDisclose from "../hooks/useDisclose";
import { toast } from "react-toastify";
import NotFound from "./NotFound";

function ContactCard({ contacts }) {
  const { onOpen, onClose, isOpen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact deleted successfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {contacts.length <= 0 ? <NotFound /> : contacts.map((contact) => (
        <div
          className="bg-gray text-white flex justify-between items-center px-4 py-3 rounded-md my-2"
          key={contact.id}
        >
          <div className="flex items-center gap-4">
            <FaUserCircle className="text-blue text-5xl" />
            <div className="">
              <h2 className="font-bold">{contact.name}</h2>
              <p className="text-sm text-[#dfdfdf]">{contact.email}</p>
              <p className="text-sm text-[#dfdfdf]">{contact.mob}</p>
            </div>
          </div>
          <div className="flex gap-4 text-2xl">
            <FaUserEdit onClick={onOpen} className="cursor-pointer" />
            <IoRemoveCircle
              onClick={() => deleteContact(contact.id)}
              className="cursor-pointer"
            />
          </div>
        </div>
      ))}
      <AddAndUpdate contact={contacts} isUpdate isOpen={isOpen}  onClose={onClose} />
    </div>
  );
}

export default ContactCard;
