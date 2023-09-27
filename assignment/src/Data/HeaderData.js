import React from 'react';
import { PiHamburgerLight, PiPizzaLight } from 'react-icons/pi';

const data = [
  { label: 'Supplier', value: 'East Coast Fruits & Vegetables', bold: true },
  { label: 'Shipping Date', value: 'Thu, Feb 10', bold: true },
  { label: 'Total', value: '$250,8900', bold: true },
  {
    label: 'Category',
    icon: (
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: '25%', textAlign: 'center' }}>
            <PiHamburgerLight />
          </div>
          <div style={{ flex: '25%', textAlign: 'center' }}>
            <PiPizzaLight />
          </div>
          <div style={{ flex: '25%', textAlign: 'center' }}>
            <PiHamburgerLight />
          </div>
          <div style={{ flex: '25%', textAlign: 'center' }}>
            <PiPizzaLight />
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: '25%', textAlign: 'center' }}>
            <PiHamburgerLight />
          </div>
          <div style={{ flex: '25%', textAlign: 'center' }}>
            <PiPizzaLight />
          </div>
          <div style={{ flex: '25%', textAlign: 'center' }}>
            <PiHamburgerLight />
          </div>
          <div style={{ flex: '25%', textAlign: 'center' }}>
            <PiPizzaLight />
          </div>
        </div>
      </>
    ),
    bold: true,
  },
  { label: 'Department', value: '300-42-600-500', bold: true },
  { label: 'Status', value: 'Awaiting Your  approval', bold: true },
];

export default data;
