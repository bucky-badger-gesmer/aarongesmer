import { Card, Layout, Typography, Timeline } from "antd";
const { Title, Link } = Typography;
const { Meta } = Card;

const Experience = () => {
  return (
    <Card className="w-full md:w-3/5 my-2 md:mx-2 md:my-4">
      <Title className="text-center" level={2}>
        Experience
      </Title>
      <Timeline
        mode="alternate"
        pending={
          <>
            <Title level={4}>June 6th 2023</Title>
            Looking for my next adventure!
          </>
        }
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
        ]}
      />
    </Card>
  );
};

export default Experience;
