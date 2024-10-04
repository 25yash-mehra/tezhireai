import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import style from '../Style/Form.module.css';
import logo from "../Images/favicon-removebg-preview.png"
function Form() {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(); // useForm hook for validation

  const onSubmit = (data) => {
    setLoading(true);
    setSubmit(true);
    console.log(data); // log form data
    setTimeout(() => {
      setLoading(false);
      reset(); // reset form after submission for 2 sec
    }, 2000);
  };

  const Thankyou = () => (
    <div className={style.thankyouContainer}>
    <img src={logo} alt="Company Logo" className={style.logo} />
    <h1>Thank You!</h1>
    <p>Your form has been successfully submitted.</p>
    <blockquote className={style.quote}>
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
    </blockquote>
    <blockquote className={style.quote}>
      "The future belongs to those who believe in the beauty of their dreams."
    </blockquote>
  </div>
  );

  return (
    <>
      {submit ? (
        <Thankyou />
      ) : (
        <div style={{ backgroundColor: 'rgb(69, 100, 237)', padding: '20px' }}>
          <h1 style={{ color: 'white', textAlign: 'center' }}>Form</h1>
          <div className={style.mainBox}>
            <div className={style.formSection}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.nameDiv}>
                  <input
                    placeholder="Name"
                    type="text"
                    className={style.Name}
                    {...register('name', { required: true })}
                  />
                  {errors.name && <span style={{ color: 'red' }}>Name is required</span>}
                </div>
                <div className={style.emailDiv}>
                  <input
                    placeholder="Email"
                    type="email"
                    className={style.Email}
                    {...register('email', { required: true })}
                  />
                  {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                </div>

                <div className={style.textDiv}>
                  <textarea
                    className={style.Textarea}
                    rows={3}
                    {...register('message', { required: true })}
                  />
                  {errors.message && <span style={{ color: 'red' }}>Message is required</span>}
                </div>

                <div className={style.fileDiv}>
                  <input
                    placeholder="Upload File"
                    type="file"
                    className={style.chooseFile}
                    {...register('file', { required: true })}
                  />
                  {errors.file && <span style={{ color: 'red' }}>File is required</span>}
                </div>
                <button type="submit" className={style.Submit} disabled={loading}>
                  Submit
                </button>
                {loading && <h3 style={{ color: 'blue' }}>Submitting...</h3>}
              </form>
            </div>

            {/* embed google maps for easy to find tezhire ai office */}
            <div className={style.googleMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5953675227765!2d75.74787207543848!3d26.884593976663943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db549263744e3%3A0x7e17f8f41cf09bff!2sTezHire%20AI%20Private%20Limited!5e0!3m2!1sen!2sin!4v1728022915366!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
