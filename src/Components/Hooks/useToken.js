import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.email;
    const theUser = { email: email };
    if (email) {
      axios
        .put(`https://frozen-mesa-63268.herokuapp.com/users/${email}`, theUser)
        .then((response) => {
          console.log(response);
          const { data } = response;
          console.log("data inside useToken", data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
