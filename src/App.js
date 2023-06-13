import React from 'react';
import { Layout, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={headerStyle}>
          <Title style={titleStyle}>Aaron Gesmer</Title>
        </Header>
        <Content style={contentStyle}>
          <Title level={2}>Hello, World!</Title>
        </Content>
        <Footer style={footerStyle}>This site was built with React and Ant Design.</Footer>
      </Layout>
    </div>
  );
}

const headerStyle = {
  textAlign: 'center',
  color: 'white',
  height: 108,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#108ee9',
};

const titleStyle = {
  color: 'inherit',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

export default App;
