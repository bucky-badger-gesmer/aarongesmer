import React from 'react';
import { Layout, Typography, Timeline } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={headerStyle}>
          <Title style={titleStyle}>Aaron Gesmer</Title>
        </Header>
        <Content style={contentStyle}>
          <Title level={2}>Hello, World!</Title>
          <Text style={textStyle}>There are so many things in this world that interest me, but I am particularly passionate about playing the guitar, cooking, and especially technology. I love watching the NBA, and am a huge fan of the Minnesota Timberwolves! </Text>
          <div style={{ border: '1px solid hotpink', maxWidth: 400 }}>
            <Title level={3}>Experience</Title>
            <Timeline
              items={[
                {
                  children: 'Create a services site 2015-09-01',
                },
                {
                  children: 'Solve initial network problems 2015-09-01',
                },
                {
                  children: 'Technical testing 2015-09-01',
                },
                {
                  children: 'Network problems being solved 2015-09-01',
                },
              ]}
            />
          </div>
        </Content>
        <Footer style={footerStyle}>This site was built with React and Ant Design.</Footer>
      </Layout>
    </div>
  );
}

const headerStyle = {
  position: 'sticky',
  top: 0,
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
  minHeight: 2400,
  color: '#fff',
  paddingLeft: 24,
  paddingRight: 24,
};

const textStyle = {
  textAlign: 'justify',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

export default App;
