import React from "react";
import { Col, Row } from "react-bootstrap";
import Topbar from "../../componnents/Topbar/Topbar";
import TheSidebar from "../../componnents/TheSideBar/TheSidebar";
import { Outlet } from "react-router-dom";


const DashbordControllerPanel = () => {
  return (
    <div>
      <Row style={{ marginRight: "0px", marginLeft: "0px" }}>
        <Col xs={2} style={{ paddingRight: "0px", paddingLeft: "0px" }}>
         <TheSidebar/>
        </Col>
        <Col style={{ paddingRight: "0px", paddingLeft: "0px" }}>
          <Topbar/>
          <Outlet/>
        </Col>
      </Row>
    </div>
  );
};

export default DashbordControllerPanel;
