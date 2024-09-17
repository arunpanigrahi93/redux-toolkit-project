import { useDispatch } from "react-redux";
import { increment } from "./CounterSlice";

const PostDisplay = () => {
  const dispatch = useDispatch();

  const likeHndler = () => {
    dispatch(increment());
  };

  return (
    <div className="postSection">
      <div className="poster">
        <div className="postImage">
          <img src="assets/Kashmir.jpg" alt="" />
        </div>
        <div className="postButtons">
          <button>Subscribe</button>
          <button>Comment</button>
          <button onClick={likeHndler}>Like</button>
        </div>
        <div className="userForm"></div>
      </div>
      <div className="subSection"></div>
    </div>
  );
};

export default PostDisplay;
