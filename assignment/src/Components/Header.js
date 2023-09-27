import React from "react";
import styled from "styled-components";
import data from "../Data/HeaderData";

const Parentdiv = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const ChildDiv = styled.div`
  width: 83%;
  margin: auto;
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const Box = styled.div`
  flex: 1;
  height: 100px;
  padding: 20px;
  margin: 5px;
  align-items: center;
  background-color: white;
  position: relative;
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 0;
    right: -5px;
    width: 1px;
    height: 100%;
    background-color: lightgray;
  }
`;

const TextWrapper = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: gray;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "20px" : "20px")};
`;
const TextWrapper1 = styled.div`
  font-weight: bold;
  word-break: break-word;
`;

const Header = () => {
  return (
    <Parentdiv>
      <ChildDiv>
        {data.map((item, index) => (
          <Box key={index}>
            <TextWrapper bold={item.bold} marginBottom={index % 2 === 1}>
              {item.label}
            </TextWrapper>
            {item.label === 'Category' ? (
              <div>
                {item.icon}
                <TextWrapper1>{item.value}</TextWrapper1>
              </div>
            ) : (
              <TextWrapper1>{item.value}</TextWrapper1>
            )}
            
          </Box>
        ))}
      </ChildDiv>
    </Parentdiv>
  );
};

export default Header;
