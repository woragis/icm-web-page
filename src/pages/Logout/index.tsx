import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { urlPrefix } from "../../envVariables";

const Logout = () => {
  const navigate = useNavigate();
  const { toggleLoginLogout } = useAuth();
  const logout = async () => {
    try {
      let logoutURI = urlPrefix + "/logout";
      const response = await fetch(logoutURI, {
        method: "post",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Network error while requesting");
      }
      if (response.status === 200) {
        const jsonResponse = await response.json();
        console.log(jsonResponse.message);
        toggleLoginLogout();
        navigate("/");
        // console.log("Logged out successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Logout;
