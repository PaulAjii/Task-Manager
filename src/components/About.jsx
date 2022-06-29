import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mt-3">
      <h4>Version 1.0.0</h4>
      <Link
        className="text-steelBlue inline-block text-sm hover:underline"
        to="/"
      >
        Go Back
      </Link>
    </div>
  );
};

export default About;
