import React, { Component } from "react";
import {
  PageHeader,
  Tabs,
  Descriptions,
  Statistic,
  Avatar,
  Timeline
} from "antd";
import "antd/dist/antd.css";

const { TabPane } = Tabs;

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column} style={{ marginTop: "3vh" }}>
    <Descriptions.item label="Username"></Descriptions.item>
    <Descriptions.item label="Email"></Descriptions.item>
    <Descriptions.item label="Nickname"></Descriptions.item>
    <Descriptions.item label="Όνομα"></Descriptions.item>
    <Descriptions.item label="Επίθετο"></Descriptions.item>
  </Descriptions>
);

const extraContent = (
  <div
    style={{
      display: "flex",
      width: "max-content",
      justifyContent: "flex-end"
    }}
  >
    <Statistic
      title="Status"
      value="Ενεργός/ή"
      style={{
        marginRight: 32
      }}
    />
  </div>
);

const Content = ({ children, extra }) => {
  return (
    <div className="content">
      <div className="main">
        <Avatar shape="square" size={64} icon="user" />
        {children}
      </div>
      <div className="extra">{extra}</div>
    </div>
  );
};

class ProfileEdit extends Component {
  render() {
    return (
      <div>
        <PageHeader
          style={{ border: "1px solid rgb(235,237,240)" }}
          onBack={() => window.history.back()}
          title="Επεξεργασία Προφίλ"
          subTitle="Επεξεργασία δεδομένων"
          footer={
            <Tabs defaultActiveKey="1">
              <TabPane tab="Ιστορικό" key="1">
                <Timeline style={{ marginTop: "5vh" }}>
                  <Timeline.Item>
                    Δημιουργία Λογαριασμού 12-11-2019
                  </Timeline.Item>
                  <Timeline.Item>Αλλαγή Κωδικού 13-11-2019</Timeline.Item>
                  <Timeline.Item>
                    Ενημέρωση Πληροφοριών 13-11-2019
                  </Timeline.Item>
                  <Timeline.Item>Δημιουργία Event 15-11-2019</Timeline.Item>
                </Timeline>
              </TabPane>
              <TabPane
                tab="Λοιπές Πληροφορίες"
                key="2"
                style={{ marginTop: "5vh" }}
              >
                ...
              </TabPane>
            </Tabs>
          }
        >
          <Content extra={extraContent}>{renderContent()}</Content>
        </PageHeader>
      </div>
    );
  }
}

export default ProfileEdit;
