function Input({ label, className, field, ...props }) {
  return (
    <div className={className}>
      {label && <label htmlFor={field.name}>{label}: </label>}
      <input {...field} {...props} id={field.name} />
    </div>
  );
}

export default Input;
