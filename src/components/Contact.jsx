import { useState } from 'react';
import { API } from 'aws-amplify';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const values = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    API.post('contact', '/contact', { body: values });
  };

  return (
    <div className='contact' id='contact'>
      {submitted && <h1>Thank you!</h1>}
      {!submitted && (
        <>
          <h1>Let's Talk!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='name' defaultValue='a' required />
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='email' defaultValue='a@b' required />
            <label htmlFor='message'>Message</label>
            <textarea type='text' id='message' placeholder='message' defaultValue='a' rows={4} required />
            <div className='button-div'>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;