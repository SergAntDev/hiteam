import { IonContent, IonPage, useIonRouter, IonButton, IonItem, IonInput, IonIcon, IonList } from "@ionic/react";
import { at, key } from "ionicons/icons";

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
          <h1 className="login-title">HiTeam</h1>

          <IonList inset className="m-0 ion-padding-start">
            <IonItem lines="full">
              <IonIcon slot="start" icon={at} />
              <IonInput placeholder="Почта" />
            </IonItem>
            <IonItem lines="none">
              <IonIcon slot="start" icon={key} />
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
