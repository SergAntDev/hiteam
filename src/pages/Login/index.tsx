import { IonContent, IonPage, useIonRouter, IonButton, IonItem, IonInput, IonIcon, IonList } from "@ionic/react";

import email from "../../assets/icons/email.svg";
import password from "../../assets/icons/password.svg";

import "./index.css";

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const onLogin = () => {
    navigation.push("/app", "root", "replace");
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <div className="flex-center-column">
          <h1 className="login-title">HI 👋 TEAM</h1>

          <IonList inset className="m-0 ion-padding-start">
            <IonItem lines="full">
              <IonIcon slot="start" icon={email} color="medium" />
              <IonInput placeholder="Почта" />
            </IonItem>
            <IonItem lines="none">
              <IonIcon slot="start" icon={password} color="medium" />
              <IonInput placeholder="Пароль" />
            </IonItem>
          </IonList>

          <IonButton expand="block" className="ion-margin-top" onClick={() => onLogin()}>
            Войти
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
