import './App.css';
import { Button, Stack } from '@mui/material';
import Page1 from './pages/Page1';
import React from 'react';
import { ColorProvider } from './ColorContext';
import InvoiceForm from './Components/GST-Form/InvoiceForm';
// import React from 'react';
import { PDFDownloadLink, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';
import Invoice from './Components/GST-Form/InvoiceForm';


function App() {
  
  const invoice = {
    invoiceNumber: 'INV001',
    customerName: 'John Doe',
    date: '2023-05-22',
    items: [
      { name: 'Product A', quantity: 2, price: 10 },
      { name: 'Product B', quantity: 3, price: 15 },
    ],
    total: 65,
  };

  return (
    <div>
      <h1>Invoice Generation Example</h1>
      <PDFDownloadLink document={<Invoice invoice={invoice} />} fileName="invoice.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download Invoice'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default App;
