import { ErrorMessage, Field, Form, Formik } from "formik";

function FormikForm() {
  const handleValidateUsername = (username) => {
    let currentErrors = "";

    if (!username) {
      currentErrors = "Username is mandatory";
    } else if (username.length < 5) {
      currentErrors = "Username too short";
    } else if (username.length > 20) {
      currentErrors = "Username too long";
    }
    return currentErrors;
  };

  const handleValidateEmail = (email) => {
    let currentErrors = "";

    if (email && !email.match(/\S*@\S*\.\S{2,4}/)) {
      currentErrors = "Email is invalid";
    }
    return currentErrors;
  };

  const handleValidatePassword = (password) => {
    let currentErrors = "";

    if (!password) {
      currentErrors = "Password is mandatory";
    } else if (password.length < 5) {
      currentErrors = "Password too short";
    }
    return currentErrors;
  };

  return (
    <div>
      <h2>Formik form</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <div>
              <Field
                type="text"
                name="username"
                validate={handleValidateUsername}
              />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <Field type="email" name="email" validate={handleValidateEmail} />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field
                type="password"
                name="password"
                validate={handleValidatePassword}
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting || !isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
