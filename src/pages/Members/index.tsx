import { useEffect, useState } from "react";
import LoadingComponent from "../../components/Loading";
import { MemberDataType } from "../../types/members";
import { urlPrefix } from "../../envVariables";

const Members = () => {
  const [members, setMembers] = useState<MemberDataType[]>([]);
  const [data, setData] = useState<any>();
  const fetchData = async () => {
    try {
      let membersURI = urlPrefix + "/admin/members";
      const response = await fetch(membersURI, {
        method: "GET",
        credentials: "include",
      });
      const jsonData = await response.json();
      if (!response.ok) {
        console.error(jsonData.error);
        throw new Error("Network response was not ok");
      } else if (response.status === 200) {
        setMembers(jsonData);
      }
    } catch (error) {
      console.error("Error fetching data: " + error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  useEffect(() => {
    if (members.length > 0) {
      const membersComponent = members.map(
        ({ member_id, cpf, full_name, birth_date }: MemberDataType) => {
          return (
            <li key={member_id}>
              <p>
                <strong>{full_name}</strong>
              </p>
              <p>{cpf}</p>
              <p>{birth_date}</p>
            </li>
          );
        }
      );
      setData(membersComponent);
    }
  }, [members]);

  return (
    <>
      <h1>Members</h1>
      {data ? (
        <div>{data}</div>
      ) : (
        <div>
          <LoadingComponent />
        </div>
      )}
    </>
  );
};

export default Members;
