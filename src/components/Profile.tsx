import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Card, Layout, Timeline, Typography, Carousel } from "antd";
import Meta from "antd/es/card/Meta";

const { Content } = Layout;
const { Title, Link } = Typography;

const Profile = () => {
  return (
    <Content style={contentStyle}>
      <Card
        style={{ marginTop: 24 }}
        cover={
          <div style={coverStyle}>
            <img
              style={imageStyle}
              alt="Aaron Gesmer's Avatar"
              src="/avatar.jpeg"
            />
          </div>
        }
        actions={[
          <Link href="https://github.com/bucky-badger-gesmer/" target="_blank">
            <GithubOutlined /> Github
          </Link>,
          <Link
            href="https://www.linkedin.com/in/aaron-gesmer-4388b77b/"
            target="_blank"
          >
            <LinkedinOutlined /> LinkedIn
          </Link>,
          <Link href="mailto:aaron.gesmer@gmail.com">
            <MailOutlined /> Email
          </Link>,
        ]}
      >
        <Meta
          title="Hello, World!"
          description="There are so many things in this world that interest me, but I am particularly passionate about playing the guitar, collecting watches, cooking, and especially technology. I love watching the NBA, and am a huge fan of the Minnesota Timberwolves!"
        />
      </Card>
      <div>
        <Title level={3}>Experience</Title>
        <Timeline
          mode="alternate"
          style={timelineStyle}
          items={[
            {
              children: (
                <>
                  <Title level={4}>May 13th 2017</Title>
                  Graduated from the University of Wisconsin
                  <Title level={5}>Degree(s):</Title>
                  Bachelor of Arts in Computer Science | Certificate in
                  Mathematics
                </>
              ),
            },
            {
              children: (
                <>
                  <Title level={4}>June 12th 2017</Title>
                  Software Engineer I at{" "}
                  <Link href="https://www.cleo.com/" target="_blank">
                    Cleo
                  </Link>
                </>
              ),
            },
            {
              children: (
                <>
                  <Title level={4}>June 12th 2018</Title>
                  Test Engineer I at{" "}
                  <Link href="https://www.cleo.com/" target="_blank">
                    Cleo
                  </Link>
                </>
              ),
            },
            {
              children: (
                <>
                  <Title level={4}>November 18th 2019</Title>
                  Frontend Engineer at{" "}
                  <Link href="https://www.netwrix.com/" target="_blank">
                    STEALTHbits (now Netwrix)
                  </Link>
                </>
              ),
            },
            {
              children: (
                <>
                  <Title level={4}>August 16th 2021</Title>
                  Software Engineer - P2 at{" "}
                  <Link href="https://www.missionlane.com/">Mission Lane</Link>
                </>
              ),
            },
            {
              children: (
                <>
                  <Title level={4}>June 6th 2023</Title>
                  Looking for my next adventure!
                </>
              ),
            },
          ]}
        />
      </div>
      <div>
        <Title level={3}>Side Projects</Title>
        <Carousel
          autoplay
          style={{
            maxWidth: 300,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 24,
          }}
        >
          <div>
            <h3
              style={{
                margin: 0,
                height: "160px",
                color: "#fff",
                lineHeight: "160px",
                textAlign: "center",
                background: "#364d79",
              }}
            >
              <Link
                href="https://sportql-staging.up.railway.app"
                target="_blank"
                style={{ color: "inherit" }}
              >
                SportQL Apollo Server
              </Link>
            </h3>
          </div>
          <div>
            <h3
              style={{
                margin: 0,
                height: "160px",
                color: "#fff",
                lineHeight: "160px",
                textAlign: "center",
                background: "#364d79",
              }}
            >
              <Link
                href="https://sportql-client.netlify.app"
                target="_blank"
                style={{ color: "inherit" }}
              >
                SportQL Client React App
              </Link>
            </h3>
          </div>
        </Carousel>
      </div>
    </Content>
  );
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  maxWidth: 800,
  color: "#fff",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 24,
  paddingRight: 24,
};

const coverStyle = {
  width: "100%",
  maxWidth: 500,
  marginLeft: "auto",
  marginRight: "auto",
};

const imageStyle = {
  width: "100%",
  height: "auto",
};

const timelineStyle: React.CSSProperties = {
  textAlign: "left",
};

export default Profile;
