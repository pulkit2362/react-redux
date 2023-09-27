import React from "react";
import styled from "styled-components";
import { TfiShoppingCart } from "react-icons/tfi";
import { AiOutlineRight } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
const ParentDiv = styled.div`
  background-color: #fff;
  width: 100%;
  align-items: center;
  height: 150px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
`;

const ChildDiv = styled.div`
  background-color: #1A5D1A;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px;
`;

const TextContainer = styled.div`
width:550px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  space:20px;
`;

const LeftText = styled.span`

  color: white;
  font-weight: light;
  font-size: 20px;
 
 
`;

const RightText = styled.span`
  color: white;
  font-size: 22px;
  display: flex;
  align-items: center;
`;

const IconWithGap = styled(TfiShoppingCart)`
  margin-right: 50px; /* Adjust the margin as needed */
`;
const ChildDiv1 = styled.div`
  height: 40px;
  font-size: 18px;
  display: flex;

  align-items: center;
  padding-left: 100px;
`;
const OrderNumber = styled.span`
  border-bottom: 1px solid black; 
  gap: 10px;
`;
const Icon=styled(AiOutlineRight)`
padding-left:0px;
padding-right:10px`;

const ChildDiv2 = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 95px;
`;
const LeftContent = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 35px;
  display: flex;
  align-items: center;
`;
const RoundedButton = styled.button`
  border: 1px solid #1A5D1A;
  border-radius: 20px; /* Add rounded corners */
  padding: 5px 10px; /* Add padding for button content */
  background-color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #1A5D1A;
  &:hover {
    background-color: #1A5D1A;
    color: white;
  }
`;
const RightContent = styled.div`
  display: flex;
  gap: 20px;

  padding-right: 100px;
`;
const AcceptOrderButton = styled(RoundedButton)`
  background-color: #1A5D1A;
  color: white;
`;

const Navbar = () => {
  return (
    <ParentDiv>
      <ChildDiv> 
        <TextContainer>
          <LeftText style={{fontWeight:'bold',fontSize:'30px',fontStyle:'italic',fontFamily:'serif'}}>Reeco</LeftText>
          <LeftText>Store</LeftText>
          <LeftText>Order</LeftText>
          <LeftText>Analytics </LeftText>
        </TextContainer>
        <RightText>
          <IconWithGap />
          Hello,James <BsChevronDown />
        </RightText>
      </ChildDiv>
      <ChildDiv1>
        Orders <Icon/>
        <OrderNumber>Order32456ABC</OrderNumber>
      </ChildDiv1>
      <ChildDiv2>
        <LeftContent>Order 32456ABC</LeftContent>
        <RightContent>
          <RoundedButton>Back</RoundedButton>
          <AcceptOrderButton>Approve Order</AcceptOrderButton>
        </RightContent>
      </ChildDiv2>
    </ParentDiv>
  );
};

export default Navbar;
