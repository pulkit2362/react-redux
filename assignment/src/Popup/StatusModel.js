import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  
`;

const ModalContainer = styled.div`
   background-color: white;
  padding: 20px;
  width: 30%;
  height: 180px;
  border: 1px solid black;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius:5px;
`;

const ModalHeader = styled.h2`
  font-size: 18px;
`;

const ModalText = styled.p`
  font-size: 14px;
  margin: 0;
  text-align: start;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  width:425px;
  align-items: flex-end; 
  justify-content: flex-end; 
  margin-top: auto; 
  
`;



const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: black;
  
  border: none;
  
  cursor: pointer;
  font-size: 20px;
  

 
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  


`;

const CloseIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 30px;
`;

const StatusModal = ({ onClose, onConfirm,productName }) => {
  const [isUrgent, setIsUrgent] = useState(false);

  const handleConfirm = () => {
    const newStatus = isUrgent ? 'Missing-urgent' : 'Missing';
    onConfirm(newStatus);
    onClose();
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseIcon onClick={onClose}>X</CloseIcon>
        <ModalHeader>Missing Product?</ModalHeader>
        <ModalText>Is this {productName}............ Urgent?</ModalText>
        
        <ButtonContainer>
          <ConfirmButton onClick={() => onConfirm('Missing-urgent')}>Yes</ConfirmButton>
          <CancelButton onClick={() => onConfirm('Missing')}>No</CancelButton>
        </ButtonContainer>
        </ModalContainer>
    </ModalBackground>
  );
};

export default StatusModal;
