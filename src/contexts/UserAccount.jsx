import { createContext, useState } from "react";

export const UserAccount = createContext(null);

export const UserAccountProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [avatarURL, setAvatarURL] = useState(null);

  return (
    <UserAccount.Provider value={{ user, avatarURL, setUser, setAvatarURL }}>
      {children}
    </UserAccount.Provider>
  );
};
