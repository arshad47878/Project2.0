// import { Document, Page, Text } from "react-pdf";
import React from 'react';
import { PDFDownloadLink, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';


const Invoice = ({ invoice }) => (
  <Document>
    <Page >
      <Text >Invoice</Text>
      <Text >{invoice.invoiceNumber}</Text>

      {/* Render invoice details */}
      <Text>Details</Text>
      <Text>Customer: {invoice.customerName}</Text>
      <Text>Date: {invoice.date}</Text>

      {/* Render invoice items */}
      <Text>Items</Text>
      {invoice.items.map((item, index) => (
        <Text key={index}>{item.name} - {item.quantity} x {item.price}</Text>
      ))}

      {/* Render total amount */}
      <Text>Total: {invoice.total}</Text>
    </Page>
  </Document>
);

export default Invoice;
