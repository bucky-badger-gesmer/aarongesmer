import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from "@ionic/react";
import { Header } from "../components";

const Contact: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div style={styles.cardContainer}>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Let's Connect!</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Here's a small text description for the card content.
                    Nothing more, nothing less.
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
};

export default Contact;
