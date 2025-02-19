import { Link } from "react-router";

function Header() {
  return (
    <div className="title-box">
      <Link to="/">
        <h1 className="title-text">NC NEWS.</h1>
      </Link>
      <h4 className="tagline-text">
        <em>Short reads from the tech world and elsewhere.</em>
      </h4>
    </div>
  );
}
export default Header;
