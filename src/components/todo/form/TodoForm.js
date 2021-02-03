import { Field, FieldArray, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useAuthApi from "../../api/useAuthApi";
import FormError from "../../form/FormError";
import Input from "../../form/Input";
import SubtasksInputList from "./SubtasksInputList";
import "./TodoForm.scss";

function TodoForm() {
  const api = useAuthApi();
  const history = useHistory();
  const { id } = useParams();

  const initialValues = {
    name: "",
    priority: 1,
    subTasks: [{ name: "", done: false }],
  };

  const [task, setTask] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      api
        .get(`/tasks/${id}`)
        .then(({ data }) => setTask(data))
        .then(() => setIsLoading(false))
        .catch((err) => console.error(err));
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleSubmit = (task) => {
    const call = id ? api.put(`/tasks/${id}`, task) : api.post("/tasks", task);
    call.then(() => history.push("/"));
  };

  const validateTitle = (value) => {
    let error;

    if (!value) {
      error = "Le titre doit être renseigné";
    } else if (value.length < 5) {
      error = "Le titre doit avoir au moins 5 caractères";
    } else if (value.length > 50) {
      error = "Le titre doit avoir moins de 50 caractères";
    }

    return error;
  };

  const validatePriority = (value) => {
    let error;

    if (!value) {
      error = "La priorité doit être renseigné";
    } else if (value < 1) {
      error = "La priorité doit être au moins 1";
    } else if (value > 3) {
      error = "La priorité doit être au plus 3";
    }

    return error;
  };

  const canSubmit = (errors) =>
    Object.keys(errors).every((errorKey) => {
      if (errorKey !== "subTasks") {
        return !errors[errorKey];
      } else {
        return errors[errorKey].every((stError) => !stError.name);
      }
    });

  return isLoading ? (
    <div>Chargement</div>
  ) : (
    <Formik initialValues={task} onSubmit={handleSubmit}>
      {({ errors }) => (
        <>
          <Form>
            <Field
              type="text"
              name="name"
              placeholder="My task"
              label="Name"
              component={Input}
              validate={validateTitle}
            />
            <FormError name="name" />
            <Field
              type="number"
              name="priority"
              placeholder="1"
              label="Priority"
              component={Input}
              validate={validatePriority}
            />
            <FormError name="priority" />
            <FieldArray name="subTasks" component={SubtasksInputList} />
            <button type="submit" disabled={!canSubmit(errors)}>
              Creation ou mise à jour
            </button>
          </Form>
        </>
      )}
    </Formik>
  );
}

export default TodoForm;
