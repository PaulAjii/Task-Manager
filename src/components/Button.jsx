import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="inline-block text-zinc-50 py-3 px-5 m-1 rounded-xl text-base cursor-pointer"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
