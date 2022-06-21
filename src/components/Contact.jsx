import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='contact' id='contact'>
      {submitted && <h1>Thank you!</h1>}
      {!submitted && (
        <>
          <h1>Let's Talk!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='name' required />
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='email' required />
            <label htmlFor='message'>Message</label>
            <textarea type='text' id='message' placeholder='message' rows={4} required />
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