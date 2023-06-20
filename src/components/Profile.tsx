import { Layout, Timeline, Typography, Carousel } from "antd";
import AvatarCard from "./AvatarCard";
import Experience from "./Experience";
const { Content } = Layout;
const { Title, Link } = Typography;

const Profile = () => {
  return (
    <Content>
      <div className="flex flex-col md:flex-row mx-4 md:mx-12">
        <AvatarCard />
        <Experience />
      </div>
      {/* <AvatarCard />
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
      </div> */}
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

const timelineStyle: React.CSSProperties = {
  textAlign: "left",
};

export default Profile;
