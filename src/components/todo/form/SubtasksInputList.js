import { Field } from "formik";
import FormError from "../../form/FormError";
import Input from "../../form/Input";
import "./SubtasksInputList.scss";

function InputList({ form, name, remove, push }) {
  const handleAdd = () => push({ name: "", done: false });

  const validateSubTasks = (value) => {
    let error;

    if (!value) {
      error = "La sous tache doit être renseigné";
    }

    return error;
  };

  return (
    <div>
      {form.values[name].map((st, index, arr) => (
        // to ease exercice, we skip key handling
        <div>
          <div className="subtasks__item">
            <Field
              name={`${name}.${index}.name`}
              type="text"
              label={`Subtask ${index + 1}`}
              component={Input}
              validate={validateSubTasks}
            />
            {arr.length > 1 && (
              <button type="button" onClick={() => remove(index)}>
                -
              </button>
            )}
            {index === arr.length - 1 && (
              <button type="button" onClick={handleAdd}>
                +
              </button>
            )}
          </div>
          <FormError name={`${name}.${index}.name`} />
        </div>
      ))}
    </div>
  );
}

export default InputList;
