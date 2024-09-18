import { useSelector } from "react-redux";

const NewUser = () => {
  const newUser = useSelector((state) => state.newSubscriber.users);

  return (
    <div className="userSection">
      Subsribers:
      {newUser.map((item) => (
        <ul>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
};

export default NewUser;
