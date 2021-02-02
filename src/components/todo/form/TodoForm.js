import { Field, FieldArray, Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import useAuthApi from "../../api/useAuthApi";
import Input from "../../form/Input";
import SubtasksInputList from "./SubtasksInputList";
import "./TodoForm.scss";

function TodoForm() {
  const api = useAuthApi();
  const history = useHistory();

  const initialValues = {
    name: "",
    priority: 1,
    subTasks: [{ name: "", done: false }],
  };

  const handleSubmit = (task) => {
    api.post("/tasks", task).then(() => history.push("/"));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field
          type="text"
          name="name"
          placeholder="My task"
          label="Name"
          component={Input}
        />
        <Field
          type="number"
          name="priority"
          placeholder="1"
          label="Priority"
          component={Input}
        />
        <FieldArray name="subTasks" component={SubtasksInputList} />
        <button type="submit">Creation ou mise à jour</button>
      </Form>
    </Formik>
  );
}

export default TodoForm;
