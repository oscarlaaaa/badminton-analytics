import * as React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = (): React.ReactElement => {
  return (
    <div>
      <h1>this is the landing page</h1>
      <div>
        <Link to="/search">
          <button>Search page</button>
        </Link>
      </div>
      <div>
        <Link to="/dashboard/:uid">
          <button>dashboard page</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
