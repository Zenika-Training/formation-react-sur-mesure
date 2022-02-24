import shallow from 'zustand/shallow'
import useStore from '../hooks/useStore'
import Form from './form/Form'
import Field from './form/Field';

export default function ToDoForm() {
  const create = useStore((state) => state.create)
  const listNames = useStore((state) => (
    Array.from(
      state.todos.reduce(
        ($, { list }) => $.add(list),
        new Set()
      )
    ).sort()
  ), shallow)

  const onSubmit = ({ list, description }, { resetField }) => {
    create(list, description)
    resetField('description')
  }

  return (
    <Form onSubmit={onSubmit} className="box" >
      <Field
        type="textarea" rows="3"
        name="description"
        label="A faire :"
        validation={{
          required: 'Vous devez écrire ce que vous avez à faire',
          maxLength: { value: 240, message: 'Soyez plus concis, 240 caractères max.' }
        }}
        className="is-primary"
      />

      <Field
        type="text"
        name="list"
        label="Dans la list :"
        validation={{
          required: 'Vous devez choisir une liste.'
        }}
        list="list-name"
        autoComplete="off"
      >
        <datalist id="list-name">
          {listNames.map((name) => <option key={name} value={name} />)}
        </datalist>
      </Field>

      <button className="button is-primary">Ajouter</button>
    </Form>
  )
}
