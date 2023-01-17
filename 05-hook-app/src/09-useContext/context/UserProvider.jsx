import { useState } from "react";
import { UserContext } from "./userContext";


// const user = {
//     id : '123',
//     email : 'alberto@gmailc.com',
//     name : 'Alberto'
// };

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{ user }}>
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
