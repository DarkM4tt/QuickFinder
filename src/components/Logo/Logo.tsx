import ZeviLogo from "../../assets/png/logo-zevi.png";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img src={ZeviLogo} alt="zevi" />
    </div>
  );
};

export default Logo;
