import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonText,
  IonItem,
  IonLabel,
  IonBadge,
  IonIcon,
  IonRow,
  IonCol,
} from "@ionic/react";
import {
  arrowBackOutline,
  homeOutline,
  checkmarkOutline,
  closeOutline,
} from "ionicons/icons";

const Requests: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              defaultHref="/profile"
              text=""
              color="primary"
              icon={arrowBackOutline}
            />
          </IonButtons>
          <h2 className="ion-no-margin ion-padding-start">Запросы</h2>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonText color="medium" className="ion-text-uppercase">
          <p className="ion-padding-start">Активные</p>
        </IonText>

        <IonItem lines="full">
          <IonLabel>
            <IonRow>
              <IonCol size="auto" className="pl-0">
                <IonText>2 марта - 12 марта</IonText>
              </IonCol>
              <IonCol>
                <IonBadge color="tertiary">
                  <IonIcon icon={homeOutline} /> Работа не по графику
                </IonBadge>
              </IonCol>
            </IonRow>
            <p>Плохо себя чувствую. Температура и кашель и насморк</p>
          </IonLabel>
        </IonItem>
        <IonItem lines="full">
          <IonLabel>
            <IonRow>
              <IonCol size="auto" className="pl-0">
                <IonText>2 марта - 12 марта</IonText>
              </IonCol>
              <IonCol>
                <IonBadge color="success">
                  <IonIcon icon={homeOutline} /> Отпуск
                </IonBadge>
              </IonCol>
            </IonRow>
            <IonRow className="ion-align-items-center">
              <IonCol size="1" className="pl-0">
                <IonIcon
                  icon={checkmarkOutline}
                  color="success"
                  className="ion-margin-end"
                />
              </IonCol>
              <IonCol size="11">
                <h2>Сергей Антонов</h2>
              </IonCol>
            </IonRow>
          </IonLabel>
        </IonItem>

        <IonText color="medium" className="ion-text-uppercase">
          <p className="ion-padding-start">Прошедшие</p>
        </IonText>

        <IonItem lines="full">
          <IonLabel>
            <IonRow>
              <IonCol size="auto" className="pl-0">
                <IonText>2 марта</IonText>
              </IonCol>
              <IonCol>
                <IonBadge color="success">
                  <IonIcon icon={homeOutline} /> Отпуск
                </IonBadge>
              </IonCol>
            </IonRow>
            <p>Плохо себя чувствую. Температура и кашель и насморк</p>
            <IonRow className="ion-align-items-center">
              <IonCol size="1" className="pl-0">
                <IonIcon
                  icon={closeOutline}
                  color="danger"
                  className="ion-margin-end"
                />
              </IonCol>
              <IonCol size="11">
                <h2>Сергей Антонов</h2>
              </IonCol>
            </IonRow>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Requests;
