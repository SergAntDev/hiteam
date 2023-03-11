import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonItem,
  IonAvatar,
  IonLabel,
  IonText,
} from "@ionic/react";

import "./index.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem lines="none" color="none">
            <h2>Perfect Panel</h2>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>
          <IonText color="medium" className="ion-text-uppercase">
            <p className="ion-padding-start">Главный отдел</p>
          </IonText>
          <IonItem routerLink="/profile/1" detail={false}>
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
          <IonItem routerLink="/profile/1" detail={false}>
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
          <IonItem routerLink="/profile/1" detail={false}>
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
          <IonItem routerLink="/profile/1" detail={false}>
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
          <IonItem routerLink="/profile/1" detail={false} lines="full">
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
        </div>

        <div>
          <IonText color="medium" className="ion-text-uppercase">
            <p className="ion-padding-start">Panel Разработчики</p>
          </IonText>
          <IonItem routerLink="/profile/1" detail={false}>
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
          <IonItem routerLink="/profile/1" detail={false}>
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
          <IonItem routerLink="/profile/1" detail={false}>
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
          <IonItem routerLink="/profile/1" detail={false}>
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
          <IonItem routerLink="/profile/1" detail={false} lines="full">
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
        </div>

        <div>
          <IonText color="medium" className="ion-text-uppercase">
            <p className="ion-padding-start">My Разработчики</p>
          </IonText>
          <IonItem routerLink="/profile/1" detail={false}>
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
          <IonItem routerLink="/profile/1" detail={false}>
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
          <IonItem routerLink="/profile/1" detail={false}>
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
          <IonItem routerLink="/profile/1" detail={false}>
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
          <IonItem routerLink="/profile/1" detail={false} lines="full">
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;