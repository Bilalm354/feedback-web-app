import React from "react";

const FeedbackDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Feedback Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem porro sapiente harum ipsum quam molestias possimus,
            dignissimos saepe ad eos impedit doloremque libero dolor? Numquam
            tempore perferendis aperiam quis corporis.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Bilal</div>
          <div>20/01/20</div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetails;
