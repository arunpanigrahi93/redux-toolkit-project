import { useState } from "react";

import { useDispatch } from "react-redux";

import { addUser } from "./userSlice";

const UserForm = () => {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  const nameHandler = (e) => {
    setUserName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("name", userName);
    dispatch(addUser(userName));
    setUserName("");
  };

  return (
    <div>
      <form className="formSection" onSubmit={submitHandler}>
        <h4>User Name</h4>
        <div className="userInput">
          <input type="text" value={userName} onChange={nameHandler} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
