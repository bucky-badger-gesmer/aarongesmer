import { Layout } from "antd";
import AvatarCard from "./Avatar";
import Experience from "./Experience";
import Projects from "./Projects";
import Watches from "./Watches";

const { Content } = Layout;

const Profile = () => {
  return (
    <Content>
      <div className="md:grid md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8">
        <AvatarCard />
        <Experience />
        <Projects />
        <Watches />
      </div>
    </Content>
  );
};

export default Profile;
