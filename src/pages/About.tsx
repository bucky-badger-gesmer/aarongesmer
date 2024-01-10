import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from "@ionic/react";
import { Header } from "../components";
import { ConfigProvider, Timeline, theme, Typography } from "antd";
const { Title, Link, Text } = Typography;

const About: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div style={styles.cardContainer}>
                <IonCard style={styles.cardContentContainer}>
                  <img alt="Experience Image" src="/experience.png" />
                  <IonCardHeader>
                    <IonCardTitle>Experience</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <ConfigProvider
                      theme={{
                        algorithm: theme.darkAlgorithm,
                      }}
                    >
                      <Timeline
                        mode="alternate"
                        pending={
                          <>
                            <Title level={4}>January 1st 2024</Title>
                            <Text>Looking for my next adventure!</Text>
                          </>
                        }
                        items={[
                          {
                            children: (
                              <>
                                <Title level={4}>May 13th 2017</Title>
                                <Text>
                                  Graduated from the University of Wisconsin
                                </Text>
                                <Title level={5}>Degree(s):</Title>
                                <Text>
                                  Bachelor of Arts in Computer Science |
                                  Certificate in Mathematics
                                </Text>
                              </>
                            ),
                          },
                          {
                            children: (
                              <>
                                <Title level={4}>June 12th 2017</Title>
                                Software Engineer I at{" "}
                                <Link
                                  href="https://www.cleo.com/"
                                  target="_blank"
                                >
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
                                <Link
                                  href="https://www.cleo.com/"
                                  target="_blank"
                                >
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
                                <Link
                                  href="https://www.netwrix.com/"
                                  target="_blank"
                                >
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
                                <Link
                                  href="https://www.missionlane.com/"
                                  target="_blank"
                                >
                                  Mission Lane
                                </Link>
                              </>
                            ),
                          },
                          {
                            children: (
                              <>
                                <Title level={4}>August 28th 2023</Title>
                                Senior Software Engineer at{" "}
                                <Link
                                  href="https://www.poplin.co/"
                                  target="_blank"
                                >
                                  Poplin
                                </Link>
                              </>
                            ),
                          },
                        ]}
                      />
                    </ConfigProvider>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  cardContentContainer: {
    maxWidth: "750px",
  },
};

export default About;
