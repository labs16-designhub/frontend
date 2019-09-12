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
    website,
    userProjectsNum,
    userFollowersNum,
    userFollowingNum,
    starredProjectsNum
  } = tempData;
  return (
    <main className="Dashboard">
      <section className="miniProfile">
        <img className="avatar" src={avatar} alt="userPhoto" />

        <p className="profileDetails">
          <h3>
            {firstName}&nbsp;{lastName}
          </h3>
          <h4>{username}</h4>
          <h5>{bio}</h5>

          <footer className="bottomRow">
            <div className="dataPoint">
              <img src={locationIcon} alt="locationIcon" />
              {location}
            </div>

            <div className="dataPoint">
              <img src={linkIcon} alt="linkIcon" />
              <a href={website}>{website}</a>
            </div>
          </footer>
        </p>
      </section>

      <section className="miniStats">
        <p className="A">Projects</p>
        <p className="B">Followers</p>
        <p className="C">Following</p>
        <p className="D">Starred</p>

        <p className="A">{userProjectsNum}</p>
        <p className="B">{userFollowersNum}</p>
        <p className="C">{userFollowingNum}</p>
        <p className="D">{starredProjectsNum}</p>

        <p className="A">Teams</p>
        <p className="A">XYZ</p>

        <button className="follow-btn">Follow</button>
      </section>
    </main>
  );
};

export default Dashboard;
