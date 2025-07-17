import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import styled from 'styled-components';
import LogoutModal from './LogoutModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  padding: 0.8em;
  background-color: ${props => (props.loggedIn ? '#111' : 'rgb(73, 73, 235)')};
  border: none;
  cursor: pointer;
  color: ${props => (!props.loggedIn ? '#fff' : 'rgb(73, 73, 235)')};
  font-size: 1.2em;
  display: flex;
  gap: 0.5em;
`;

function Login({ loggedIn, userProfile, handleLogin, handleLogout }) {
  const [showModal, setShowModal] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      const token = credentialResponse.access_token;

      if (token) {
        fetchUserProfile(token);
      }
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        handleLogin(data);  // Handle the login (pass user data to parent)
        
      } else {
        console.error('Error fetching user profile');
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const logOut = () => {
    setShowModal(true);
  };

  const handleConfirmLogout = () => {
    handleLogout()
    setShowModal(false);
  };

  const handleCancelLogout = () => {
    setShowModal(false);
  };

  return (
    <div>
      {loggedIn ? (
        <Button loggedIn={loggedIn} onClick={logOut}>
          <FontAwesomeIcon icon={faUser} />
          {userProfile ? userProfile.name : 'Logout'}
        </Button>
      ) : (
        <Button onClick={() => login()}>Login</Button>
      )}
      
      {showModal && (
        <LogoutModal 
          handleCancelLogout={handleCancelLogout} 
          handleConfirmLogout={handleConfirmLogout}
        />
      )}
    </div>
  );
}

export default Login;
