import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css'

export const BookingForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    bookingDate: Yup.date().required('Booking date is required'),
    comment: Yup.string().max(500, 'Comment must be 500 characters or less'),
  });

  return (<><div>
    <h2 className={css.title}>Book your campervan now</h2>
    <p className={css.caption}>Stay connected! We are always ready to help you.</p>
    <Formik
      initialValues={{
        name: '',
        email: '',
        bookingDate: '',
        comment: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        alert('Form submitted successfully!');
        resetForm();
      }}
    >
      {() => (
        <Form>
          <div className={css.formContainer}>
            <div className={css.formGroup}>
              <Field type="text" id="name" name="name" placeholder="Name" className={css.input} />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div className={css.formGroup}>
              <Field type="email" id="email" name="email" placeholder="Email" className={css.input} />
              <ErrorMessage name="email" component="div" className={css.error} />
            </div>

            <div className={css.formGroup}>
              <Field type="date" id="bookingDate" placeholder='Booking Date'name="bookingDate" className={css.input} />
              <ErrorMessage name="bookingDate" component="div" className={css.error} />
            </div>

            <div className={css.formGroup}>
              <Field as="textarea" id="comment" name="comment" rows="4" placeholder="Comment" className={css.input} />
              <ErrorMessage name="comment" component="div" className={css.error} />
            </div>
</div>
            <button className={css.formButton} type="submit">Send</button>
          </Form>
      )}
    </Formik>
   </div> </>
  );
};
