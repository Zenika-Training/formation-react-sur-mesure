import { FormProvider, useForm } from 'react-hook-form'

export default function Form({ defaultValues, children, onSubmit, ...rest }) {
  const methods = useForm({ defaultValues })
  const smartSubmit = (data) => {
    onSubmit(data, methods)
  }

  return (
    <FormProvider {...methods}>
      <form {...rest} onSubmit={methods.handleSubmit(smartSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}
