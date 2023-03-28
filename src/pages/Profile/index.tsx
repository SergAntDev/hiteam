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
  IonIcon,
  useIonActionSheet,
  useIonRouter,
} from "@ionic/react";

import goBack from "../../assets/icons/go-back.svg";
import logout from "../../assets/icons/logout.svg";
import openList from "../../assets/icons/open-list.svg";

const Profile: React.FC = () => {
  const navigation = useIonRouter();

  const [present] = useIonActionSheet();

  const onDidDismiss = (detail: any) => {
    if (detail.role === "confirm") {
      navigation.push("/", "root", "replace");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" className="ion-padding-start">
            <IonBackButton
              defaultHref="/app/home"
              text=""
              color="primary"
              icon={goBack}
            />
          </IonButtons>
          <h2 className="ion-no-margin ion-padding-start f-weight-700 text-24">Профиль</h2>
          <IonButton
            onClick={() =>
              present({
                header: 'Выйти из аккаунта',
                subHeader: 'Вы уверены, что хотите выйти из аккаунта?',
                buttons: [
                  {
                    text: 'Выйти',
                    role: 'confirm',
                  },
                  {
                    text: 'Отмена',
                    role: 'cancel',
                    data: {
                      action: 'cancel',
                    },
                  },
                ],
                onDidDismiss: ({ detail }) => onDidDismiss(detail),
              })
            }
            slot="end"
            fill="clear"
            color="medium"
            size="small"
          >
            <IonIcon slot="icon-only" icon={logout} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem lines="full">
          <IonAvatar slot="start" className="avatar-56">
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>
          <IonLabel>
            <h2 className="f-weight-600 text-16">Сергей Антонов</h2>
            <IonText color="dark-medium">
              <p className="text-14">Разработчик интерфейсов</p>
            </IonText>
          </IonLabel>
        </IonItem>
        <IonItem detailIcon={openList} routerLink="/requests" lines="full">
          <IonText color="primary">
            <p className="f-weight-600">Все запросы</p>
          </IonText>
        </IonItem>
        <IonText color="medium" className="ion-text-uppercase">
          <p className="ion-padding-start group-label">Общая информация</p>
        </IonText>

        <IonList>
          <IonItem>
            <IonLabel color="dark-medium" className="text-14">Дата рождения</IonLabel>
            <IonLabel slot="end" className="ion-text-right text-16">16 июня 1991</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="dark-medium" className="text-14">В компании</IonLabel>
            <IonLabel slot="end" className="ion-text-right text-16">с 22 августа 2018</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="dark-medium" className="text-14">Телефон</IonLabel>
            <IonButton slot="end" href="tel:+ 7-978-999-99-99" fill="clear" className="ion-no-padding text-16">
              + 7 978 999 99 99
            </IonButton>
          </IonItem>
          <IonItem lines="full">
            <IonLabel color="dark-medium" className="text-14">Почта</IonLabel>
            <IonButton
              slot="end"
              href="mailto:mail@perfectpanel.com"
              fill="clear"
              className="ion-no-padding text-16"
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
