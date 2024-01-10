import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
} from "@ionic/react";
import { Header } from "../components";
import { logoGithub, logoLinkedin, mail } from "ionicons/icons";
import { useHistory } from "react-router";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div style={styles.cardContainer}>
                <IonCard>
                  <div style={styles.cardContentContainer}>
                    <img alt="Avatar Image" src="/avatar.png" />
                    <IonCardHeader>
                      <IonCardTitle>Hello, World!</IonCardTitle>
                      <IonCardSubtitle>
                        My name is Aaron. Some people call me A-A-Ron ¯\_(ツ)_/¯
                      </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent style={{ padding: "0 24px 24px 24px" }}>
                      <p>
                        There are so many things in this world that interest me,
                        but I am particularly passionate about playing the
                        guitar, collecting watches, cooking, and especially
                        technology. I love watching the NBA, and am a huge fan
                        of the Minnesota Timberwolves! 🐺🐺🐺
                      </p>
                      <br />
                    </IonCardContent>
                  </div>
                </IonCard>
              </div>
              <div style={styles.cardContainer}>
                <IonCard>
                  <div style={styles.cardContentContainer}>
                    <IonCardHeader>
                      <IonCardTitle>Let's Connect!</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent style={{ padding: "0 24px 24px 24px" }}>
                      <p>
                        In regards to software development, most of my
                        experience is in frontend mobile development. However, I
                        do have experience in other facets of software
                        development, including backend development and devops,
                        and always eager to embrace a new technology and/or
                        challenge! At the moment, I love the stack of
                        Ionic/React, and TypeScript (deployed to Netlify) paired
                        with a database hosted from SupaBase to give
                        applications a "mobile-first" development approach.
                      </p>
                    </IonCardContent>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <IonButton
                      fill="clear"
                      style={{ color: "white" }}
                      onClick={() => {
                        window.location.href =
                          "https://github.com/bucky-badger-gesmer/";
                      }}
                    >
                      <IonIcon aria-hidden="true" icon={logoGithub} />
                    </IonButton>
                    <IonButton
                      fill="clear"
                      style={{ color: "white" }}
                      onClick={() => {
                        window.location.href =
                          "https://www.linkedin.com/in/aaron-gesmer/";
                      }}
                    >
                      <IonIcon aria-hidden="true" icon={logoLinkedin} />
                    </IonButton>
                    <IonButton
                      fill="clear"
                      style={{ color: "white" }}
                      onClick={() => {
                        window.location.href = "mailto:aaron.gesmer@gmail.com";
                      }}
                    >
                      <IonIcon aria-hidden="true" icon={mail} />
                    </IonButton>
                  </div>
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

export default Home;
