import React,{useState} from 'react';
import styled from 'styled-components';
import { AiOutlinePrinter} from 'react-icons/ai';
import {TiTick} from 'react-icons/ti';
import data from '../Data/TableData';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatus } from '../Slice/approvedSlice';
import {TfiClose} from 'react-icons/tfi';
import StatusModal from '../Popup/StatusModel';
const ParentDiv = styled.div`
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  
  align-items:center;
`;

const TableContainer = styled.div`
  padding: 20px;
  width: 80%;
  margin: auto;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: 1px solid lightgray;
  
  border-radius: 10px 10px 0 0;
  margin-top: 20px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
`;

const TableHeaderItem = styled.div`
  flex: 1;
  text-align:center;
  padding: 10px;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const TableItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
`;

const SearchBar = styled.input`
  width: 30%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Leftcontent=styled.div`
display:flex;
align-items:center;
`;
const AddButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: #1A5D1A;
  border: 1px solid #1A5D1A;
  border-radius: 20px;
  cursor: pointer;
  font-size:15px;
  font-weight:bold;
  &:hover {
    background-color: #1A5D1A;
    color: white;
  }

`;

const IconContainer = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
`;

const TickIcon = styled.span`
margin-right: 10px; /* Adjust the spacing as needed */
cursor:pointer;
`;

const CrossIcon = styled.span`
margin-left: 10px; /* Adjust the spacing as needed */
cursor:pointer;
`;
const EditIcon=styled.div`
margin-left:10px;
cursor:pointer;
`;
const StatusButton = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  
`;
const Button=styled.div`

`;



const Table = () => {
    const [showModal, setShowModal] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [selectedProductName, setSelectedProductName] = useState('');

    const dispatch = useDispatch();
const approvedStatus = useSelector((state) => state.approved);

// Function to handle the click on the tick icon
const handleTickClick = (itemId) => {
    const newStatus = approvedStatus.status[itemId] === 'Approved' ? ' ' : 'Approved';
    dispatch(toggleStatus({ itemId, status: newStatus }));
  };
  const handleCrossClick = (itemId, productName) => {
    setSelectedItemIndex(itemId);
    setSelectedProductName(productName); // Store the selected product name
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedItemIndex(null);
  };

  const handleStatusChange = (newStatus) => {
    // Update the status based on the user's choice
    if (selectedItemIndex !== null) {
      const newStatusObject = { itemId: selectedItemIndex, status: newStatus };
      dispatch(toggleStatus(newStatusObject));
    }
    handleModalClose();
  };
  return (
    <ParentDiv>
      <TableContainer>
        <ButtonContainer>
          <SearchBar type="text" placeholder="Search...." />
          <Leftcontent>
            <AddButton>
            Add Item
            </AddButton>
           
          <AiOutlinePrinter style={{ marginLeft: '50px',fontSize:'30px',color:'#1A5D1A' }} />
          </Leftcontent>

        </ButtonContainer>
        <TableHeader>
          <TableHeaderItem></TableHeaderItem>
          <TableHeaderItem>Product Name</TableHeaderItem>
          <TableHeaderItem>Brand</TableHeaderItem>
          <TableHeaderItem>Price</TableHeaderItem>
          <TableHeaderItem>Quantity</TableHeaderItem>
          <TableHeaderItem>Total</TableHeaderItem>
          <TableHeaderItem >Status</TableHeaderItem>
          <TableHeaderItem></TableHeaderItem>
        </TableHeader>
        {data.map((item, index) => (
          <TableRow key={index} >
            <TableItem>
              <img src={process.env.PUBLIC_URL + '/' + item.icon} alt="Product" width="50" height="50" />
            </TableItem>
            <TableItem style={{flex:'1',textAlign:'start',padding:'10px',whiteSpace:'normal'}}>{item.productName}</TableItem>
            <TableItem>{item.brand}</TableItem>
            <TableItem>{item.price}</TableItem>
            <TableItem>{item.quantity}</TableItem>
            <TableItem>{item.total}</TableItem>
            <TableItem><Button>
            {approvedStatus.status[index] === 'Approved' && (
      <StatusButton style={{ backgroundColor: '#5D9C59', color: 'white' }}>
        Approved
      </StatusButton>
    )}
               {approvedStatus.status[index] === 'Missing-urgent' && (
          <StatusButton style={{ backgroundColor: 'red', color: 'white',whiteSpace: 'nowrap' }}>
            Missing-urgent
          </StatusButton>
        )}
              {approvedStatus.status[index] === 'Missing' && (
                  <StatusButton style={{ backgroundColor: 'orange', color: 'white', whiteSpace: 'nowrap' }}>
                    Missing
                  </StatusButton>
                )}
                </Button></TableItem>
            <TableItem><IconContainer>
                
        <TickIcon style={{color:'green',fontSize:'30px'}} onClick={() => handleTickClick(index)}><TiTick/> </TickIcon>
        <CrossIcon
              onClick={() => handleCrossClick(index, item.productName)} // Pass the product name
              style={{ color: 'red', fontSize: '20px' }}
            ><TfiClose/></CrossIcon>
      <EditIcon>Edit</EditIcon>
      </IconContainer>
      {showModal && selectedItemIndex === index && (
              <StatusModal onClose={handleModalClose} onConfirm={handleStatusChange} productName={selectedProductName}/>
            )}</TableItem>
           
          </TableRow>
        ))}
      </TableContainer>
    </ParentDiv>
  );
};

export default Table;
