import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import { Header, ProjectCard } from "../components";
import { ProjectCardProps } from "../components/ProjectCard";

const Projects: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Modern Angular App",
      description: "Ionic/Angular movie application",
      _link: "https://modern-angular-app.netlify.app",
      sourceCodeLink:
        "https://github.com/bucky-badger-gesmer/modern-angular-app",
    },
    {
      title: "P2G Sovev Kinneret",
      description:
        "Website for Partnership 2Gether Initiative between St. Paul, Milwaukee, and the Sovev Kinneret Region in Israel.",
      _link: "https://p2g-sovev-kinneret.netlify.app",
      sourceCodeLink:
        "https://github.com/bucky-badger-gesmer/p2g-sovev-kinneret",
    },
    {
      title: "Watches.io Dashboard App",
      description: "Ionic/React Dashboard application to track watch prices",
      _link: "https://watches-exercise.netlify.app",
      sourceCodeLink: "https://github.com/bucky-badger-gesmer/watches-exercise",
    },
    {
      title: "Watches.io Mobile Exchange",
      description:
        "Ionic/React application to list watch for sale/exchange on Watches.io exchange platform",
      _link: "https://watches-exercise-ii.netlify.app",
      sourceCodeLink:
        "https://github.com/bucky-badger-gesmer/watches-exercise-ii",
    },
  ];

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              {projects.map((o) => (
                <ProjectCard
                  title={o.title}
                  description={o.description}
                  _link={o._link}
                  sourceCodeLink={o.sourceCodeLink}
                />
              ))}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Projects;
