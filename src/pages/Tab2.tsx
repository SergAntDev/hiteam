import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Пункт 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense" translucent>
          <IonToolbar>
            <IonTitle size="large">Пункт 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Content</h1>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
