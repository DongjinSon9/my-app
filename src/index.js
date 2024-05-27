import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentList from './chapter05/CommentList';
import BoardList from './chapter05/BoardList';
import NotificationList from './chapter06/NotificationList';
import Counter from './chapter07/Counter';
import Info from './chapter07/Info';
import Average from './chapter07/Average';
import Accommodate from './chapter07/Accommodate';
import Say from './chapter08/Say';
import Toggle from './chapter08/Toggle';
import EventPractice from './chapter08/EventPractice';
import Greeting from './chapter09/Greeting';
import LoginControl from './chapter09/LoginControl';
import LandingPage from './chapter09/LandingPage';
import NumberList from './chapter10/NumberList';
import StudentList from './chapter10/StudentList';
import InterationSample from './chapter10/InterationSample';
import Calculator from './chapter12/Calculator';
import ProfileCard from './chapter13/ProfileCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CommentList /> */}
    {/* <BoardList /> */}
    {/* <NotificationList /> */}
    {/* <Counter /> */}
    {/* <Info /> */}
    {/* <Average /> */}
    {/* <Accommodate /> */}
    {/* <Say /> */}
    {/* <Toggle /> */}
    {/* <EventPractice /> */}
    {/* <Greeting /> */}
    {/* <LoginControl /> */}
    {/* <LandingPage /> */}
    {/* <NumberList /> */}
    {/* <StudentList /> */}
    {/* <InterationSample /> */}
    {/* <Calculator /> */}
    <ProfileCard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
