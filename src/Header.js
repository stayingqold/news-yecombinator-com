import React, { useContext } from "react";

//import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  //const { authToken, removeAuthToken } = useContext(AuthContext);
  //const history = useHistory();
  
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Ye News</div>
        <a href="https://www.reddit.com/r/Kanye/new/" className="ml1 no-underline black">
          new
        </a>
        <div className="ml1">|</div>
        <a href="https://www.reddit.com/r/Kanye/top/?t=week" className="ml1 no-underline black">
          top
        </a>
        <div className="ml1">|</div>
      </div>
    </div>
  );
};

export default Header;
