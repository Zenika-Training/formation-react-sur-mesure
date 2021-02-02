import { Field } from "formik";
import Input from "../../form/Input";
import "./SubtasksInputList.scss";

function InputList({ form, name, remove, push }) {
  const handleAdd = () => push({ name: "", done: false });

  return (
    <div>
      {form.values[name].map((st, index, arr) => (
        // to ease exercice, we skip key handling
        <div className="subtasks__item">
          <Field
            name={`${name}.${index}.name`}
            type="text"
            label={`Subtask ${index + 1}`}
            component={Input}
          />
          <button type="button" onClick={() => remove(index)}>
            -
          </button>
          {index === arr.length - 1 && (
            <button type="button" onClick={handleAdd}>
              +
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default InputList;
