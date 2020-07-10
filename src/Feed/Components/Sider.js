import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Divider } from 'antd';
import {
  HomeOutlined,
  SearchOutlined,
  NotificationOutlined,
  CalendarOutlined,
  UserOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';

const Wrapper = styled.nav`
  width: 14.6%;
  padding: 1rem;
  border-right: 1px solid #deeaee;
  ${(props) => props.theme.tertiaryColor}
  height: 100vh;
  position: fixed;
  font-weight: 500;

  svg {
    width: 28px;
    height: 28px;
    margin-right: 0.5rem;
    position: relative;
    color: ${(props) => props.theme.accentColor};
    top: 7px;
  }
  .logo {
    margin-bottom: 1.3rem;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: -35px;
  }
  li {
    margin-bottom: 2rem;
  }
  .selected,
  .selected svg {
    color: ${(props) => props.theme.accentColor};
    fill: ${(props) => props.theme.accentColor};
  }
  @media screen and (max-width: 1160px) {
    z-index: 100;
    background: white;
    width: 10%;
    #span-link {
      display: none;
    }
    svg {
      margin-right: 0;
    }
    ul {
      margin-left: -15px;
    }
    li {
      margin: none;
    }
    button {
      display: none;
    }
    .logo {
      font-size: 8px;
    }
  }
  @media screen and (max-width: 870px) {
    z-index: 100;
    background: white;
    width: 10%;
    #span-link {
      display: none;
    }
    svg {
      margin-right: 0;
    }
    ul {
      margin-left: -35px;
    }
    li {
      margin: none;
    }
    button {
      display: none;
    }
    .logo {
      font-size: 8px;
    }
  }
  @media screen and (max-width: 635px) {
    bottom: 0;
    width: 100vw;
    border-right: none;
    height: 4rem;
    border-top: 1px solid ${(props) => props.theme.tertiaryColor};
    z-index: 2;
    background: ${(props) => props.theme.background};
    ul {
      flex-direction: row;
      justify-content: space-between;
    }
    li {
    }
    svg {
      width: 22px;
      height: 22px;
    }
  }
  @media screen and (max-width: 395px) {
    bottom: 0;
    width: 100vw;
    border-right: none;
    height: 4rem;
    border-top: 1px solid ${(props) => props.theme.tertiaryColor};
    z-index: 100;
    ul {
      flex-direction: row;
      justify-content: space-between;
    }
    svg {
      width: 22px;
      height: 22px;
    }
    .logo {
      display: none;
    }
  }
`;

const SideNav = () => {
  const currentState = useSelector((state) => state);
  const { isAuthenticated } = currentState.Auth;

  const profileRoute = isAuthenticated
    ? `/profile/${currentState.Auth.currentUser.id}`
    : '';

  return (
    <div>
      <Wrapper>
        <ul>
          <Link to="/">
            <span className="logo">
              <h3 style={{ color: '#fa541c', fontFamily: 'fantasy' }}>
                EventPark
              </h3>
              <Divider />
            </span>
          </Link>

          <li>
            <NavLink exact activeClassName="selected" to="/home">
              <HomeOutlined />
              <span id="span-link">Αρχική</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/explore">
              <SearchOutlined />
              <span id="span-link">Εξερευνήστε</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected " to="/notifications">
              <NotificationOutlined />
              <span id="span-link">Ειδοποιήσεις</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/saved">
              <CalendarOutlined />
              <span id="span-link">Αρχειοθήκη</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to={profileRoute}>
              <UserOutlined />
              <span id="span-link">Προφίλ</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/">
              <EllipsisOutlined />
              <span id="span-link">Περισσότερα</span>
            </NavLink>
          </li>
        </ul>
      </Wrapper>
    </div>
  );
};

export default SideNav;
