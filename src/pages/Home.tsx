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
  const history = useHistory();

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
                    <img
                      alt="Silhouette of mountains"
                      src="public/avatar.png"
                    />
                    <IonCardHeader>
                      <IonCardTitle>Hello World!</IonCardTitle>
                      <IonCardSubtitle>
                        My name is Aaron. Some people call me A-A-Ron ¯\_(ツ)_/¯
                      </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      There are so many things in this world that interest me,
                      but I am particularly passionate about playing the guitar,
                      collecting watches, cooking, and especially technology. I
                      love watching the NBA, and am a huge fan of the Minnesota
                      Timberwolves!
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
