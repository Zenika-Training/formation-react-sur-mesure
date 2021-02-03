import { ErrorMessage } from "formik";
import "./FormError.scss";

function FormError({ name }) {
  return (
    <ErrorMessage
      name={name}
      render={(msg) => <div className="form__error">{msg}</div>}
    />
  );
}

export default FormError;
