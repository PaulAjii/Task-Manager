import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onShow, showAdd }) => {
  const location = useLocation();
  return (
    <header className="flex flex-row justify-between items-center mb-5">
      <h1 className="font-medium text-2xl">
        {title}
      </h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onShow}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
