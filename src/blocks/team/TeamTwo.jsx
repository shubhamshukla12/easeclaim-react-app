import React from 'react';
import data from './data';

const TeamTwo = (props) => {
  const itemSlice = data.slice(0, props.item);
  
  return (
    <div className="row gap-80px">
      {itemSlice.map((value, i) => (
        <div className={props.column} key={i}>
          <div className={`team-static ${props.teamStyle}`}>
            <div className="thumbnail">
              <img src={`assets/images/aboutus/team${value.images}.png`} alt="Team Member" />
            </div>
            <div className="inner">
              <div className="content">
                <h4 className="title">{value.title}</h4>
                <p className="designation">{value.designation}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamTwo;
