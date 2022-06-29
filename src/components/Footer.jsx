import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center text-center mt-6 text-sm">
      <p>Copywright &copy; 2022</p>
      <Link
        className="text-steelBlue inline-block hover:underline"
        to="/about"
      >
        About
      </Link>
    </footer>
  );
};

export default Footer;
