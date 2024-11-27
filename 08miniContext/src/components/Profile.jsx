import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;            // This condition is important because by default we have given null as a user when the input fields are not filled
  return <div>Welcome {user.username}</div>;
}

export default Profile;
