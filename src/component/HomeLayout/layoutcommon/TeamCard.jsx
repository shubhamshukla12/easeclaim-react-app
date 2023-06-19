import React from 'react';

const TeamCard = () => {
  return (
    <div className="ptb--120 bg_color--1">
      <div className="container">
        <div className="row">
          <div className="claim-team-card custom-color">
            <div className="custom-team-card-1">
              <div>
                <img style={{ maxHeight: '250px' }} src="https://images.pexels.com/photos/16869356/pexels-photo-16869356/free-photo-of-man-in-a-suit-holding-his-face-in-his-hands.jpeg?auto=compress&cs=tinysrgb&w=600=200&lazy=load" alt="Team" />
              </div>
              <br />
              <div className="team-name">
                <p>Team Name</p>
              </div>
              <div className="team-position">
                <p>Position</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
