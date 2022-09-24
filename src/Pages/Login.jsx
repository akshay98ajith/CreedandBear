import React from "react";
import { useForm } from "react-hook-form";
import { users } from "../api";

const Login = () => {
  const { register, handleSubmit } = useForm();
  console.log("username", users[1].username);
  console.log("password", users[1].password);
  const onSubmit = (data) => {
    console.log(data);
    if (
      data.username === users[1].username &&
      data.password === users[1].password
    ) {
      const token = data.username + "token";
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("username", data.username);
      window.location.reload();
      console.log("Successfully logged in");
    } else {
      alert("validation failed");
    }
  };
  return (
    <>
      <div className="login">
        <div className="card">
          <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span>Username</span>
              <input
                placeholder={users[1].username}
                type="text"
                {...register("username", { requierd: true })}
                required
              />
            </label>
            <label>
              <span>Password</span>
              <input
                placeholder={users[1].password}
                type="password"
                {...register("password", { requierd: true })}
                required
              />
            </label>
            <div className="tac">
              <button className="loginBtn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="credentials">
        <div>username: superuser</div>
        <div>password: superuser</div>
      </div>
    </>
  );
};

export default Login;
