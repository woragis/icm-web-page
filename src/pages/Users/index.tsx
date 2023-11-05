import { useEffect, useState } from "react";
import { StyledUsersComponent, StyledUsers, StyledUser } from "./style";
import LoadingComponent from "../../components/Loading";
import { UserDataType } from "../../types/frofiles";
import { urlPrefix } from "../../envVariables";

const User = ({ user_id, member_id, email, password }: UserDataType) => {
  return (
    <StyledUser key={user_id}>
      <p className="email">{email}</p>
      <p className="password">{password}</p>
      <p className="member-id">Member Id: {member_id}</p>
      <p className="user-id">User Id: {user_id}</p>
    </StyledUser>
  );
};

const Users = () => {
  const [users, setUsers] = useState<UserDataType[]>([{} as UserDataType]);
  const [data, setData] = useState<any>();
  const fetchUsers = async () => {
    try {
      let usersURI = urlPrefix + "/users";
      const response = await fetch(usersURI, {
        method: "GET",
        credentials: "include",
      });
      const jsonData = await response.json();
      if (!response.ok) {
        console.error(jsonData.error);
        throw new Error("Network response was not ok");
      } else if (response.status === 200) {
        setUsers(jsonData);
      }
    } catch (error) {
      console.error("Error fetching Users " + error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 500);
  }, []);
  useEffect(() => {
    if (users != null) {
      const usersComponent = users.map(
        ({ email, password, member_id, user_id }: UserDataType) => {
          return (
            <User
              user_id={user_id}
              email={email}
              password={password}
              member_id={member_id}
            />
          );
        }
      );
      setData(usersComponent);
    }
  }, [users]);
  return (
    <StyledUsersComponent>
      Users
      {data ? (
        <div>
          <StyledUsers>{data}</StyledUsers>
        </div>
      ) : (
        <div>
          <LoadingComponent />
        </div>
      )}
    </StyledUsersComponent>
  );
};

export default Users;
