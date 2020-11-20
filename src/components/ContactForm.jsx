import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

function ContactForm() {
  const [state, handleSubmit] = useForm('contactForm');
  if (state.succeeded) {
    return <p>Thanks for getting in touch. I'll get back to you shortly!</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormOption className='form-option'>
        <label htmlFor='email'>Email Address</label>
        <input autoFocus id='email' type='email' name='email' />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      </FormOption>
      <FormOption className='form-option'>
        <label htmlFor='message'>Message</label>
        <textarea rows='8' cols='30' id='message' name='message' />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
      </FormOption>
      <div className='form-option'>
        <button type='submit' disabled={state.submitting}>
          Submit
        </button>
      </div>
    </Form>
  );
}
export default ContactForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;

  label {
    margin-bottom: 1rem;
  }

  textarea {
    padding: 1rem;
  }

  .form-option {
    margin-top: 2rem;
    input {
      padding: 0.2rem;
    }
  }
`;

const FormOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
