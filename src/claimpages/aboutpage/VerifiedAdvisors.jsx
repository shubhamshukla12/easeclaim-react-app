import React from 'react';
import { FiHeadphones } from 'react-icons/fi';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';

const Button2 = styled.a`
  position: absolute;
  width: 167px;
  height: 42px;
  left: 28%;
  top: 232px;
  /* primary 2 */
  background: #476BC7;
  border-radius: 6px;
`;

const P2 = styled.div`
  position: absolute;
  margin: 4%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  text-align: center;
  color: #FFFFFF;
`;

const Title = {
  textAlign: 'center',
  color: '#FFFFFF',
  paddingLeft: '40px',
};

const VerifiedAdvisors = () => {
  return (
    <>
      {/* Start Contact Top Area  */}
      <div className="bg_color--1">
        <div className="container">
          <div className="row">
            <div className="rn-verified-advisors">
              <div className="icon">
                <FiHeadphones color="#e63024" />
              </div>
              <div className="inner">
                <h4 className="title">100+ Verified Advisors</h4>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FiHeadphones />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Theresa Webb" secondary="Mentor of Web Design" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FiHeadphones />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Albert Flores" secondary="Mentor of Web Design" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FiHeadphones />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Robert Fox" secondary="Mentor of UI/UX" />
                  </ListItem>
                  <ListItem>
                    <ListItemText style={{ color: '#FB7369', fontSize: '18px', lineHeight: '22.59px', fontWeight: 500 }} primary="See More" />
                  </ListItem>
                </List>
              </div>
              <div className="buttom-cal-card">
                <div className="inner-container">
                  <img src="https://images.pexels.com/photos/14578357/pexels-photo-14578357.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                  <h2 className="title">Rohit Mehra</h2>
                  <p>Claim Consultant</p>
                  <Button2>
                    <P2>
                      <span style={Title}>CONTACT</span>
                    </P2>
                  </Button2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Top Area  */}
    </>
  );
};

export default VerifiedAdvisors;
