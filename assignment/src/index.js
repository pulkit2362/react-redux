import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

   <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React, { useState } from 'react';
// import styled from 'styled-components';

// const ModalBackground = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background for the blur effect */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const ModalContainer = styled.div`
//   background-color: white;
//   padding: 20px;
//   border: 1px solid #ccc;
//   box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
// `;

// const ModalHeader = styled.h2`
//   font-size: 18px;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   gap: 10px;
// `;

// const ConfirmButton = styled.button`
//   padding: 10px 20px;
//   background-color: #1A5D1A;
//   color: white;
//   border: none;
//   border-radius: 20px;
//   cursor: pointer;
//   font-size: 15px;
//   font-weight: bold;

//   &:hover {
//     background-color: #146614;
//   }
// `;

// const CancelButton = styled.button`
//   padding: 10px 20px;
//   background-color: #ccc;
//   color: white;
//   border: none;
//   border-radius: 20px;
//   cursor: pointer;
//   font-size: 15px;
//   font-weight: bold;

//   &:hover {
//     background-color: #999;
//   }
// `;

// const StatusModal = ({ onClose, onConfirm }) => {
//   const [isUrgent, setIsUrgent] = useState(false);

//   const handleConfirm = () => {
//     const newStatus = isUrgent ? 'Missing-urgent' : 'Missing';
//     onConfirm(newStatus);
//     onClose();
//   };

//   return (
//     <ModalBackground>
//       <ModalContainer>
//         <ModalHeader>Is it urgent?</ModalHeader>
//         <ButtonContainer>
//           <ConfirmButton onClick={handleConfirm}>Yes</ConfirmButton>
//           <CancelButton onClick={onClose}>No</CancelButton>
//         </ButtonContainer>
//       </ModalContainer>
//     </ModalBackground>
//   );
// };

// export default StatusModal;
