import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { RegisterDataType } from "../../types/forms";
import Cleave from "cleave.js/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { urlPrefix } from "../../envVariables";

const Register = () => {
  const navigate = useNavigate();
  const { isLogged, toggleLoginLogin } = useAuth();

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  });

  const cpfOptions = {
    numeral: true,
    blocks: [3, 3, 3, 2],
    delimiters: [".", ".", "-"],
    maxLength: 11,
  };

  const [userData, setUserData] = useState<RegisterDataType>({
    email: "",
    cpf: "",
    password: "",
    admin: false,
  } as RegisterDataType);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === "cpf" && value.length === 11) {
      setUserData({ ...userData, [id]: value });
    }
    setUserData({ ...userData, [id]: value });
  };
  const handleAdmin = () => {
    let prevAdmin = userData.admin;
    setUserData({ ...userData, admin: !prevAdmin });
  };
  const submitHandle = async (event: FormEvent) => {
    event.preventDefault();
    let registerURI = urlPrefix + "/register";
    const response = await fetch(registerURI, {
      method: "post",
      body: JSON.stringify(userData),
      credentials: "include",
      cache: "default",
      redirect: "follow",
    });
    const jsonData = await response.json();
    if (!response.ok) {
      const errorMessage = jsonData.error;
      console.log(errorMessage);
    } else if (response.status === 201) {
      console.log(jsonData.message);
      toggleLoginLogin();
      navigate("/");
    }
  };
  return (
    <div>
      <form onSubmit={submitHandle}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your_email@domain.com"
          autoComplete="email"
          autoFocus
          value={userData.email}
          onChange={handleChange}
          maxLength={255}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="none"
          value={userData.password}
          onChange={handleChange}
          maxLength={255}
        />
        <label htmlFor="cpf">CPF</label>
        <Cleave
          name="cpf"
          id="cpf"
          autoComplete="none"
          type="text"
          options={cpfOptions}
          value={userData.cpf}
          onChange={handleChange}
          maxLength={14}
        />
        <label htmlFor="admin">Admin?</label>
        <input type="checkbox" name="admin" id="admin" onClick={handleAdmin} />
        <button onSubmit={submitHandle}>Register</button>
      </form>
    </div>
  );
};

export default Register;
