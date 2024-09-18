const UserForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="formSection" onSubmit={submitHandler}>
        <h4>User Name</h4>
        <div className="userInput">
          <input type="text" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
