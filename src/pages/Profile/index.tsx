import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButton,
  IonButtons,
  IonBackButton,
  IonItem,
  IonAvatar,
  IonLabel,
  IonText,
  IonList,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              defaultHref="/app/home"
              text=""
              color="primary"
              icon={arrowBackOutline}
            />
          </IonButtons>
          <h2 className="ion-no-margin ion-padding-start">Профиль</h2>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem lines="full">
          <IonAvatar slot="start">
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>
          <IonLabel>
            <h2>Сергей Антонов</h2>
            <p>Разработчик интерфейсов</p>
          </IonLabel>
        </IonItem>
        <IonItem routerLink="/requests" lines="full">
          <IonText color="primary">
            <p>Все запросы</p>
          </IonText>
        </IonItem>
        <IonText color="medium" className="ion-text-uppercase">
          <p className="ion-padding-start">Общая информация</p>
        </IonText>

        <IonList>
          <IonItem>
            <IonLabel color="medium">Дата рождения</IonLabel>
            <IonLabel slot="end" className="ion-text-right">16 июня 1991</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="medium">В компании</IonLabel>
            <IonLabel slot="end" className="ion-text-right">с 22 августа 2018</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="medium">Телефон</IonLabel>
            <IonButton slot="end" href="tel:+ 7-978-999-99-99" fill="clear" className="ion-no-padding">
              + 7 978 999 99 99
            </IonButton>
          </IonItem>
          <IonItem lines="full">
            <IonLabel color="medium">Почта</IonLabel>
            <IonButton
              slot="end"
              href="mailto:mail@perfectpanel.com"
              fill="clear"
              className="ion-no-padding"
            >
              mail@perfectpanel.com
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
