import React from 'react';
import { Layout, Typography, Timeline, Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { AntDesignOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Link } = Typography;
const { Meta } = Card;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={headerStyle}>
          <Title style={titleStyle}>Aaron Gesmer</Title>
        </Header>
        <Content style={contentStyle}>
          <Card
            style={{ marginTop: 24 }}
            cover={
              <img
                alt="example"
                src="/avatar.jpeg"
              />
            }
            actions={[
              <LinkedinOutlined />,
              <GithubOutlined />,
              <TwitterOutlined />,
            ]}
          >
            <Meta
              title="Hello, World!"
              description="There are so many things in this world that interest me, but I am particularly passionate about playing the guitar, cooking, and especially technology. I love watching the NBA, and am a huge fan of the Minnesota Timberwolves! "
            />
          </Card>
          <Title level={3}>Experience</Title>
          <Timeline
            mode='alternate'
            style={timelineStyle}
            items={[
              {
                children:
                  <>
                    <Title level={4}>May 13th 2017</Title>
                    Graduated from the University of Wisconsin with a Bachelor of Arts in Computer Science and a Certificate in Mathematics
                  </>,
              },
              {
                children:
                  <>
                    <Title level={4}>June 12th 2017</Title>
                    Software Engineer I at <Link>Cleo</Link>
                  </>,
              },
              {
                children:
                  <>
                    <Title level={4}>June 12th 2018</Title>
                    Test Engineer I at <Link>Cleo</Link>
                  </>,
              },
              {
                children:
                  <>
                    <Title level={4}>November 18th 2019</Title>
                    Frontend Engineer at <Link>STEALTHbits (now Netwrix)</Link>
                  </>,
              },
              {
                children:
                  <>
                    <Title level={4}>August 16th 2021</Title>
                    Software Engineer - P2 at <Link>Mission Lane</Link>
                  </>
              },
            ]}
          />
        </Content>
        <Footer style={footerStyle}>This site was built with React <FontAwesomeIcon icon={faReact} /> and Ant Design <AntDesignOutlined /></Footer>
      </Layout>
    </div>
  );
}

const headerStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 1,
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
  maxWidth: 700,
  color: '#fff',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 24,
  paddingRight: 24,
};

const timelineStyle = {
  textAlign: 'left',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

export default App;
