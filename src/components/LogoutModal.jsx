import React from 'react'
import styled from 'styled-components'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: rgb(73, 73, 180);
  color: #111;
  padding: 2em;
  border-radius: 8px;
  text-align: center;
`;

const ModalButton = styled.button`
  margin: 0.5em;
  padding: 0.5em 1em;
  background-color: #333;
  color: rgb(73, 73, 235);
  border: none;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
`;



function LogoutModal(props) {
  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Are you sure you want to log out?</h2>
        <ModalButton onClick={props.handleConfirmLogout}>Yes, Log Out</ModalButton>
        <ModalButton onClick={props.handleCancelLogout}>Cancel</ModalButton>
      </ModalContent>
    </ModalOverlay>
  )
}

export default LogoutModal