import { IonContent, IonPage, useIonRouter, IonButton } from "@ionic/react";

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const onLogin = () => {
    navigation.push("/app", "root", "replace");
  };

  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding ion-text-center">
        <h1 className="ion-text-uppercase">HiTeam</h1>
        <IonButton expand="full" onClick={() => onLogin()}>
          Войти
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
