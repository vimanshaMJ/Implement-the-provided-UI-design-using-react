import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function TheAccordion() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What Are The Taxes On Buy And Sell?
          </Accordion.Header>
          <Accordion.Body>
            X Market Marker offers a comprehensive set of features tailored for
            market participants. Its core functionalities include real-time
            pricing, liquid provision and order book management.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How Is XMM Different From Others?</Accordion.Header>
          <Accordion.Body>
            X Market Marker offers a comprehensive set of features tailored for
            market participants. Its core functionalities include real-time
            pricing, liquid provision and order book management.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How Can I Buy?</Accordion.Header>
          <Accordion.Body>
            X Market Marker offers a comprehensive set of features tailored for
            market participants. Its core functionalities include real-time
            pricing, liquid provision and order book management.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How Do I Invest In Your Company?</Accordion.Header>
          <Accordion.Body>
            X Market Marker offers a comprehensive set of features tailored for
            market participants. Its core functionalities include real-time
            pricing, liquid provision and order book management.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
