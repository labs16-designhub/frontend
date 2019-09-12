import React from 'react';
import './Dashboard.scss';

const fakeAvatar = require('./fakeAvatar.jpg');
const locationIcon = require('./location.svg');
const linkIcon = require('./link.svg');

const tempData = {
  firstName: 'Erik',
  lastName: 'Lambert',
  username: 'eriklambert',
  avatar: fakeAvatar,
  bio:
    'I love designing and always looking for ways to improve and innovate. 🤓 #Usersmatter! #LambdaBound #UXEngineer',
  location: 'Austin, TX',
  website: 'https://eriklambert.io',
  userProjectsNum: '12',
  userFollowersNum: '36',
  userFollowingNum: '1',
  starredProjectsNum: '143'
};

const Dashboard = props => {
  const {
    firstName,
    lastName,
    username,
    bio,
    avatar,
    location,
    website
  } = tempData;
  return (
    <div className="Dashboard">
      <div className="miniProfile">
        <img src={avatar} alt="userPhoto" />

        <div className="profileDetails">
          <h3>
            {firstName}&nbsp;{lastName}
          </h3>
          <h4>{username}</h4>
          <h5>{bio}</h5>

          <div className="bottomRow">
            <div className="dataPoint">
              <img src={locationIcon} alt="locationIcon" />
              {location}
            </div>

            <div className="dataPoint">
              <img src={linkIcon} alt="linkIcon" />
              <a href={website} target="_blank">
                {website}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="miniStats"></div>
    </div>
  );
};

export default Dashboard;
