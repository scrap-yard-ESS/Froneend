import Icon from "./Icon";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="icon">
        <Icon />
      </div>
      <div className="profile"></div>
    </div>
  );
};

export default Header;
