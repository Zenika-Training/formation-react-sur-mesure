import { useState } from "react";

function ManualForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const handleValidateUsername = () => {
    const { username } = form;
    let currentErrors = "";

    if (!username) {
      currentErrors = "Username is mandatory";
    } else if (username.length < 5) {
      currentErrors = "Username too short";
    } else if (username.length > 20) {
      currentErrors = "Username too long";
    }
    setErrors((e) => ({ ...e, username: currentErrors }));
  };

  const handleValidateEmail = () => {
    const { email } = form;
    let currentErrors = "";

    if (email && !email.match(/\S*@\S*\.\S{2,4}/)) {
      currentErrors = "Email is invalid";
    }
    setErrors((e) => ({ ...e, email: currentErrors }));
  };

  const handleValidatePassword = () => {
    const { password } = form;
    let currentErrors = "";

    if (!password) {
      currentErrors = "Password is mandatory";
    } else if (password.length < 5) {
      currentErrors = "Password too short";
    }
    setErrors((e) => ({ ...e, password: currentErrors }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(form);
      setIsSubmitting(false);
    }, 400);
  };

  const canSubmit = () => {
    return !isSubmitting && Object.values(errors).every((e) => !e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Manual form</h2>
      <div>
        <label htmlFor="name">Username :</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.username}
          onChange={handleFieldChange("username")}
          onBlur={handleValidateUsername}
        />
        {errors.username && (
          <div style={{ color: "red" }}>{errors.username}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleFieldChange("email")}
          onBlur={handleValidateEmail}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Username :</label>
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleFieldChange("password")}
          onBlur={handleValidatePassword}
        />
        {errors.password && (
          <div style={{ color: "red" }}>{errors.password}</div>
        )}
      </div>
      <button type="submit" disabled={!canSubmit()}>
        Log on
      </button>
    </form>
  );
}

export default ManualForm;
