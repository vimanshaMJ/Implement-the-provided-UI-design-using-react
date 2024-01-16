import React from "react";
import Accordion from "react-bootstrap/Accordion";
import classes from "./Accordion.module.css";

export default function TheAccordion() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className={classes.accordionItem}>
          <Accordion.Header className={classes.accordionHeader}>
            What Are The Taxes On Buy And Sell?
          </Accordion.Header>
          <Accordion.Body className={classes.accordionBody}>
            X Market Marker offers a comprehensive set of features tailored for
            market participants. Its core functionalities include real-time
            pricing, liquid provision and order book management.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className={classes.accordionItem}>
          <Accordion.Header className={classes.accordionHeader}>
            How Is XMM Different From Others?
          </Accordion.Header>
          <Accordion.Body className={classes.accordionBody}>
            X Market Marker offers a comprehensive set of features tailored for
            market participants. Its core functionalities include real-time
            pricing, liquid provision and order book management.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className={classes.accordionItem}>
          <Accordion.Header className={classes.accordionHeader}>
            How Can I Buy?
          </Accordion.Header>
          <Accordion.Body className={classes.accordionBody}>
            X Market Marker offers a comprehensive set of features tailored for
            market participants. Its core functionalities include real-time
            pricing, liquid provision and order book management.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className={classes.accordionItem}>
          <Accordion.Header className={classes.accordionHeader}>
            How Do I Invest In Your Company?
          </Accordion.Header>
          <Accordion.Body className={classes.accordionBody}>
            X Market Marker offers a comprehensive set of features tailored for
            market participants. Its core functionalities include real-time
            pricing, liquid provision and order book management.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
