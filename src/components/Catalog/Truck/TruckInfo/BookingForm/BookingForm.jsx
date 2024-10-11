import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const BookingForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    bookingDate: Yup.date().required('Booking date is required'),
    comment: Yup.string().max(500, 'Comment must be 500 characters or less'),
  });

  return (
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
          <div>
            <label htmlFor="name">Name</label><br />
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" /><br />
          </div>

          <div>
            <label htmlFor="email">Email</label><br />
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" /><br />
          </div>

          <div>
            <label htmlFor="bookingDate">Booking Date</label><br />
            <Field type="date" id="bookingDate" name="bookingDate" />
            <ErrorMessage name="bookingDate" component="div" className="error" /><br />
          </div>

          <div>
            <label htmlFor="comment">Comment</label><br />
            <Field as="textarea" id="comment" name="comment" rows="4" />
            <ErrorMessage name="comment" component="div" className="error" /><br />
          </div>

          <button type="submit">Send</button>
        </Form>
      )}
    </Formik>
  );
};
