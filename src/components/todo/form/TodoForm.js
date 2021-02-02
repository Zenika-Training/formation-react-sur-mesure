import { Field, FieldArray, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useAuthApi from "../../api/useAuthApi";
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

  return isLoading ? (
    <div>Chargement</div>
  ) : (
    <Formik initialValues={task} onSubmit={handleSubmit}>
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
