import React from "react";
import { Layout, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { AntDesignOutlined } from "@ant-design/icons";
import { Profile } from "./components";

const { Header, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Header className="sticky top-0 z-10 shadow-lg text-center bg-sky-500 md:text-left md:h-20">
          <Title className="mt-1 md:mt-3" style={{ color: "white" }}>
            Aaron Gesmer
          </Title>
        </Header>
        <Profile />
        <Footer className="text-center bg-sky-300 text-white">
          This site was built with React <FontAwesomeIcon icon={faReact} /> and
          Ant Design <AntDesignOutlined />
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
