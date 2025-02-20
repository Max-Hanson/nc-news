import { UserAccount } from "../contexts/UserAccount";
import { Link } from "react-router";
import { useContext } from "react";
import { HouseSimple, User } from "@phosphor-icons/react";

const NavBar = () => {
  const { user, avatarURL } = useContext(UserAccount);

  return (
    <footer>
      <nav className="nav-bar">
        <Link to="/">
          <button className="home-button">
            <HouseSimple size={25} />
          </button>
        </Link>
        <Link to="/User">
          <button className="user-button">
            <User size={25} />
          </button>
        </Link>
      </nav>
    </footer>
  );
};
export default NavBar;
{
  /* <img src={avatarURL} alt="avatar img" className="avatar-img" /> */
}
