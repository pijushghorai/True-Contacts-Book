import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import NewContact from "./NewContact";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import * as Yup from 'yup';

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Requred"),
  email: Yup.string().email("Invalid email"),
  mob: Yup.number().required("Mobile is Required").positive().integer()
})

function AddAndUpdate({ isOpen, onClose, isUpdate, contact }) {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact update successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NewContact isOpen={isOpen} onClose={onClose}>
        <Formik
        validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                  mob: contact.mob,
                }
              : {
                  name: "",
                  email: "",
                  mob: "",
                }
          }
          onSubmit={(values) => {
            isUpdate ? updateContact(values, contact.id) : addContact(values);
            console.log(values);
          }}
        >
          <Form className="flex flex-col">
            <div className="flex flex-col gap-1 mb-3">
              <label htmlFor="name" className="text-white">
                Name
              </label>
              <Field
                name="name"
                type="text"
                className="bg-darkblue text-white border border-[#ffffff31] py-2 px-3 rounded"
              />
              <div className="text-white">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <label htmlFor="email" className="text-white">
                E-Mail
              </label>
              <Field
                name="email"
                type="email"
                className="bg-darkblue text-white border border-[#ffffff31] py-2 px-3 rounded"
              />
              <div className="text-white">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <label htmlFor="mob" className="text-white">
                Mobile
              </label>
              <Field
                name="mob"
                type="tel"
                className="bg-darkblue text-white border border-[#ffffff31] py-2 px-3 rounded"
              />
              <div className="text-white">
                <ErrorMessage name="mob" />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue text-white py-2 px-8 rounded self-end"
            >
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </NewContact>
    </div>
  );
}

export default AddAndUpdate;
