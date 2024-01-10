import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonThumbnail,
} from "@ionic/react";
import { code, link } from "ionicons/icons";

export interface ProjectCardProps {
  title: string;
  description: string;
  _link: string;
  sourceCodeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  _link,
  sourceCodeLink,
}: ProjectCardProps) => {
  return (
    <div style={styles.cardContainer}>
      <IonCard
        style={{
          width: "100%",
          maxWidth: "750px",
        }}
      >
        <IonCardHeader>
          <IonCardTitle>{title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              />
            </IonThumbnail>
            <div style={{ padding: "12px 0 12px 0" }}>{description}</div>
          </IonItem>
        </IonCardContent>
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
              window.open(_link, "_blank");
            }}
          >
            <IonIcon aria-hidden="true" icon={link} />
          </IonButton>
          <IonButton
            fill="clear"
            style={{ color: "white" }}
            onClick={() => {
              window.open(sourceCodeLink, "_blank");
            }}
          >
            <IonIcon aria-hidden="true" icon={code} />
          </IonButton>
        </div>
      </IonCard>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
};

export default ProjectCard;
