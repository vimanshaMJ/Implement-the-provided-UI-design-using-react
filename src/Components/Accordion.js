import React from "react";
import Accordion from "react-bootstrap/Accordion";
import classes from "./Accordion.module.css";

export default function TheAccordion() {
  const accordionList = [
    {
      id: 1,
      header: "What Are The Taxes On Buy And Sell?",
      body: "X Market Marker offers a comprehensive set of features tailored for market participants. Its core functionalities include real-time pricing, liquid provision and order book management.",
    },
    {
      id: 2,
      header: "How Is XMM Different From Others?",
      body: "X Market Marker offers a comprehensive set of features tailored for market participants. Its core functionalities include real-time pricing, liquid provision and order book management.",
    },
    {
      id: 3,
      header: "How Can I Buy?",
      body: "X Market Marker offers a comprehensive set of features tailored for market participants. Its core functionalities include real-time pricing, liquid provision and order book management.",
    },
    {
      id: 4,
      header: "How Do I Invest In Your Company?",
      body: "X Market Marker offers a comprehensive set of features tailored for market participants. Its core functionalities include real-time pricing, liquid provision and order book management.",
    },
  ];

  return accordionList.map((item) => (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey={item.id} className={classes.accordionItem}>
        <Accordion.Header className={classes.accordionHeader}>
          {item.header}
        </Accordion.Header>
        <Accordion.Body className={classes.accordionBody}>
          {item.body}
        </Accordion.Body>
      </Accordion.Item>
      <hr />
    </Accordion>
  ));
}
