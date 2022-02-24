import classNames from 'classnames'
import { useFormContext } from 'react-hook-form'

export default function Field({ name, type, label, className, children, validation, ...options }) {
  const { register, watch, formState: { errors } } = useFormContext()
  const max = validation?.maxLength?.value
  const currentValue = max && watch(name)

  const props = {
    ...options,
    id: name,
    ...register(name, validation),
    'aria-invalid': errors[name] ? "true" : "false",
    className: classNames(className, {
      textarea: type === 'textarea',
      input: type !== 'textarea',
      'is-danger': errors[name]
    })
  }

  return (
    <div className="field">
      <label className="label" htmlFor={name}>{label}</label>

      <div className="control">
        {type === 'textarea' && <textarea {...props} />}
        {type !== 'textarea' && <input type={type} {...props} />}

        {max && (
          <progress className={classNames("progress is-small is-success", {
            'is-success': currentValue?.length < Math.floor(max * 2/3),
            'is-warning': currentValue?.length >= Math.floor(max * 2/3) && currentValue?.length < max,
            'is-danger': currentValue?.length >= max
          })} value={currentValue?.length ?? 0} max={max}>
            {Math.min(max, currentValue?.length ?? 0)}caractères
          </progress>
        )}

        {children}
      </div>
      {errors[name] && (
        <label role="alert" className="has-text-danger is-size-7" htmlFor={name}>
          {errors[name].message}
        </label>
      )}
    </div>
  )
}
