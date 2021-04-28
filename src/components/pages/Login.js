import { PageLayout, Input } from "components/common";
import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

function Login() {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  function handleInputChange(e) {
    e.persist();
    setFormFields((s) => ({ ...s, [e.target.name]: e.target.value }));
  }
  function passwordToggler() {
    setShowPassword((s) => !s);
  }
  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          value={formFields.username}
          onChange={handleInputChange}
          name="username"
          type="text"
          placeholder="username"
        />
        <Input
          value={formFields.password}
          onChange={handleInputChange}
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="password"
        />
      </Form>
      <button onClick={passwordToggler}>passtoggler</button>
    </PageLayout>
  );
}

export default Login;
