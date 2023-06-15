import React from "react";
import { Layout, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { AntDesignOutlined } from "@ant-design/icons";
import Profile from "./components/Profile";

const { Header, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Header style={headerStyle}>
          <Title style={titleStyle}>Aaron Gesmer</Title>
        </Header>
        <Profile />
        <Footer style={footerStyle}>
          This site was built with React <FontAwesomeIcon icon={faReact} /> and
          Ant Design <AntDesignOutlined />
        </Footer>
      </Layout>
    </div>
  );
};

const headerStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 1,
  textAlign: "center",
  color: "white",
  height: 108,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#108ee9",
};

const titleStyle = {
  color: "inherit",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

export default App;
