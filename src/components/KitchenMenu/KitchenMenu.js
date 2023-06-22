import { useState } from "react";
import { GroupOutlined } from "@ant-design/icons";
import { Drawer, Row, Col, Divider } from "antd";
import KeyValueContent from "../../common/keyValueContent/keyValueContent";
import SubmitButton from "@/common/SubmitButton/SubmitButton";
import MoreInfo from "../MoreInfo/MoreInfo";
import data from "./data.json";
import { BoxPlotOutlined, CloudDownloadOutlined } from "@ant-design/icons";

import styles from "./KitchenMenu.module.scss";

const KitchenMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleStatus = (value) => {
    switch (value) {
      case "high":
        return "highDot";
      case "low":
        return "lowDot";
      case "medium":
        return "mediumDot";
    }
  };

  return (
    <div>
      <p className={"action"}>
        <GroupOutlined className={"backgroundIcon"} onClick={showDrawer} />
        <span className={"count"}>3</span>
      </p>

      <Drawer
        title="Kitchen Menu "
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
        style={{ zIndex: 50000 }}
        key="right"
        width={350}
        className={"menu"}
      >
        <Row>
          <Col span={12}>Request</Col>
          <Col span={9}>Status</Col>
          <Col span={1}>O/P Link</Col>
        </Row>
        <Divider />

        {data.map((item, index) => (
          <div key={index}>
            <Row>
              <Col span={12}>
                <div className={"leftSide"}>
                  <BoxPlotOutlined className={"box"} />
                  <span>
                    <span className={"title"}>{item.title}</span>
                    <span className={"price"}>{item.price}</span>
                  </span>
                </div>
              </Col>
              <Col span={9}>
                <span className={`status ${styles[item.status]}`}>
                  <span
                    className={`dot ${styles[handleStatus(item.status)]}`}
                  ></span>
                </span>
              </Col>
              <Col span={1}>
                <CloudDownloadOutlined />
              </Col>
            </Row>
            <Divider />
          </div>
        ))}

        <KeyValueContent text="Units Under Processing" value="12.00 DTSUs" />
        <KeyValueContent text="Units Completed" value="12.00 DTSUs" />
        <Divider />
        <KeyValueContent
          text="Total Units Consumed"
          value="Total Units Consumed"
        />
        <br />

        <SubmitButton text="Refresh Status" skyBackground={true} />

        <SubmitButton text="Back to Your Dashboard" />
        <MoreInfo />
      </Drawer>
    </div>
  );
};

export default KitchenMenu;
