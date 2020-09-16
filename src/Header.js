import React, { useContext } from "react";

//import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  //const { authToken, removeAuthToken } = useContext(AuthContext);
  //const history = useHistory();
  
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Ye News</div>
      </div>
    </div>
  );
};

export default Header;
