import { Layout } from "antd";
import Avatar from "./Avatar";
import Experience from "./Experience";
import Projects from "./Projects";

const { Content } = Layout;

const Profile = () => {
  return (
    <Content>
      <div className="gap-4 p-4 sm:p-12 md:grid md:grid-cols-2 md:gap-8 md:p-8">
        <Avatar />
        <Experience />
        <Projects />
      </div>
    </Content>
  );
};

export default Profile;
