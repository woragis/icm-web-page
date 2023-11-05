import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledLogin } from "./style";
import { LoginDataType } from "../../types/forms";
import { useAuth } from "../../contexts/AuthContext";
import { urlPrefix } from "../../envVariables";

const Login = () => {
  const navigate = useNavigate();
  const { isLogged, toggleLoginLogin } = useAuth();

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  });
  const submitLoginForm = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const loginURI = urlPrefix + "/login";
      const response = await fetch(loginURI, {
        method: "post",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const jsonData = await response.json();
      if (!response.ok) {
        console.log(jsonData.error);
        throw new Error("Network response was not ok");
      }
      if (response.status === 200) {
        console.log(jsonData[0].message);
        toggleLoginLogin();
        navigate("/");
        // const loggedUser = jsonData[2].user;
        // const { email } = loggedUser;
      }
    } catch (error) {
      console.error("Error posting login data" + error);
    }
  };
  const [loginData, setLoginData] = useState<LoginDataType>({
    email: "",
    password: "",
  } as LoginDataType);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setLoginData({ ...loginData, [id]: value });
    console.log(id, value);
  };
  return (
    <StyledLogin>
      <form className="login-form" onSubmit={submitLoginForm}>
        <div className="form-element">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            id="password"
            // autoComplete="current-password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-element">
          <button type="submit">Login</button>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </StyledLogin>
  );
};

export default Login;
