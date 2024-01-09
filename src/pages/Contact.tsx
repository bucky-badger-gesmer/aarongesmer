import { IonContent, IonPage } from "@ionic/react";
import { Header } from "../components";

const Contact: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>{/* <IonContent>Poop</IonContent> */}</IonContent>
    </IonPage>
  );
};

export default Contact;
