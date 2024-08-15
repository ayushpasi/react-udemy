import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { Fragment } from "react";
function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uname, uage) => {
    setUserList((prevList) => {
      return [...prevList, { name: uname, age: uage, id: Math.random() * 10 }];
    });
  };

  // useEffect(() => {
  //   if (userList.length > 0) {
  //     console.log(`userList[0]: ${userList[0].name}`);
  //   }
  // }, [userList]);

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
