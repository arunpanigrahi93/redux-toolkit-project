import { useState } from "react";
import NewUser from "./NewUser";
import NewComment from "./NewComment";
import UserForm from "./UserForm";
import CommentForm from "./commentForm";
import { useDispatch } from "react-redux";
import { increment } from "./CounterSlice";

const PostDisplay = () => {
  const [showUser, setShowUser] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const dispatch = useDispatch();

  const likeHandler = () => {
    dispatch(increment());
  };

  const handleSubscribe = () => {
    setShowUser(true);
    setShowComment(false);
  };

  const handleComment = () => {
    setShowComment(true);
    setShowUser(false);
  };
  return (
    <div className="postSection">
      <div className="poster">
        <div className="postImage">
          <img src="assets/Kashmir.jpg" alt="" />
        </div>
        <div className="postButtons">
          <button onClick={handleSubscribe}>Subscribe</button>
          <button onClick={handleComment}>Comment</button>
          <button onClick={likeHandler}>Like</button>
        </div>
        <div className="userForm">
          {showUser && <UserForm />}
          {showComment && <CommentForm />}
        </div>
      </div>
      <div className="subSection">
        <NewUser />
        <NewComment />
      </div>
    </div>
  );
};

export default PostDisplay;
