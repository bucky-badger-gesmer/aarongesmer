import { Card, Typography, Timeline } from "antd";
const { Title, Link, Text } = Typography;

const Experience = () => {
  return (
    <div>
      <Card>
        <Title className="text-center" level={2}>
          Experience
        </Title>
        <Timeline
          mode="alternate"
          pending={
            <>
              <Title level={4}>June 6th 2023</Title>
              <Text>Looking for my next adventure!</Text>
            </>
          }
          items={[
            {
              children: (
                <>
                  <Title level={4}>May 13th 2017</Title>
                  <Text>Graduated from the University of Wisconsin</Text>
                  <Title level={5}>Degree(s):</Title>
                  <Text>
                    Bachelor of Arts in Computer Science | Certificate in
                    Mathematics
                  </Text>
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
                  <Link href="https://www.missionlane.com/" target="_blank">
                    Mission Lane
                  </Link>
                </>
              ),
            },
            {
              children: (
                <>
                  <Title level={4}>August 24th 2022</Title>
                  Became a Certified Nutrition Coach through{" "}
                  <Link href="https://www.nasm.org/" target="_blank">
                    NASM
                  </Link>
                </>
              ),
            },
            {
              children: (
                <>
                  <Title level={4}>October 13th 2022</Title>
                  Became a Certified Personal Trainer through{" "}
                  <Link href="https://www.nasm.org/" target="_blank">
                    NASM
                  </Link>
                </>
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default Experience;
