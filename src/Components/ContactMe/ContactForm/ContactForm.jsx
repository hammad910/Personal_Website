import { useFormik } from "formik";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import validationSchema from "../../../Schema/Validation";
import './ContactForm.css';

function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9lkgksb', 'template_nmlc0wu', form.current, 'zJcqBLdibi1muwoi_')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const notify = () => {
    const fields = Object.values(values).every((value) => value.trim() !== '');
    if (fields) {
      toast.success('Your Message Sent Successfully..');
    }else{
      toast.error('Please Complete All Fields!')
    }
  }


  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    message: "",
  }


  const handleSubmitWrapper = async (values, formik) => {
    try {
      await sendEmail(values);
      await formik.handleSubmit(values, formik);
    } catch (error) {
      console.error(error);
    }
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    }
  });

  return (
    <div className='contact-form-content'>
      <form onSubmit={(e) => handleSubmitWrapper(e, { handleSubmit })} ref={form}>
        <div className='name-container' >
          <input
            type='text'
            name='name'
            placeholder='First Name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (<p style={{ fontSize: 12, color: 'red' }}>{errors.name}</p>) : null}
          <input
            className="name"
            type='text'
            name='lastname'
            placeholder='Last Name'
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ marginTop: '1.5rem' }}
          />
          {errors.lastname && touched.lastname ? (<p style={{ fontSize: 12, color: 'red' }}>{errors.lastname}</p>) : null}
        </div>
        <input
          type='text'
          name='email'
          placeholder='Email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ marginTop: '1.5rem' }}
        />
        {errors.email && touched.email ? (<p style={{ fontSize: 12, color: 'red' }}>{errors.email}</p>) : null}
        <textarea
          type='text'
          name='message'
          placeholder='Message'
          rows={3}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ marginTop: '1.5rem' }}

        />
        {errors.message && touched.message ? (<p style={{ fontSize: 12, color: 'red' }}>{errors.message}</p>) : null}
        <button
          type='submit'
          onClick={notify}
          style={{ marginTop: '1.5rem' }}
        >
          <Toaster
            position="bottom-center"
            reverseOrder={false}
          />

          SEND
        </button>
      </form>
    </div>
  )
}

export default ContactForm