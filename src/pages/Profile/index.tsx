import { useEffect, useState } from "react";
import { StyledProfile } from "./style";
import LoadingComponent from "../../components/Loading";
import { UserDataType } from "../../types/profiles";
import { urlPrefix } from "../../envVariables";

const Profile = () => {
  const [profile, setProfile] = useState<UserDataType>({} as UserDataType);
  const fetchProfile = async () => {
    try {
      const profileURI = urlPrefix + "/profile";
      const response = await fetch(profileURI, {
        method: "GET",
        credentials: "include",
      });
      const jsonData = await response.json();
      if (!response.ok) {
        console.log(jsonData.error);
      } else if (response.status === 200) {
        console.log(jsonData);
        setProfile(jsonData);
      }
    } catch (error) {
      throw new Error("Error fetching profile");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchProfile();
    }, 1000);
  }, []);

  return (
    <StyledProfile>
      <h1>Profile</h1>
      {profile ? (
        <div key={profile.user_id}>
          <small>{profile.user_id}</small>
          <p>{profile.email}</p>
          <small>{profile.member_id}</small>
          <p>{profile.password}</p>
        </div>
      ) : (
        <div>
          <LoadingComponent />
        </div>
      )}
    </StyledProfile>
  );
};

export default Profile;
