import { useContext, useEffect } from "react";
import { UserAccount } from "../contexts/UserAccount";

const User = () => {
  const { user, avatarURL } = useContext(UserAccount);

  return (
    <>
      <h2>User Profile</h2>
      <h3>Hi User{user}</h3>
    </>
  );
};

export default User;
