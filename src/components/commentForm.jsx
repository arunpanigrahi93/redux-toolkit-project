const CommentForm = () => {
  return (
    <div>
      <form className="formSection">
        <h4>Leave your comment</h4>
        <div className="commentInput">
          <textarea id="" cols="50" rows="4"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
