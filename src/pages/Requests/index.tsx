import { useState } from "react";
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
  useIonModal,
} from "@ionic/react";
import {
  arrowBackOutline,
  homeOutline,
  checkmarkOutline,
  closeOutline,
} from "ionicons/icons";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";

import RequestDetailsModal from "../../components/Modals/Requests/Details";

const Requests: React.FC = () => {
  const [modalType, setModalType] = useState<number>(1);

  const [present, dismiss] = useIonModal(RequestDetailsModal, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
    type: modalType
  });

  const openModal = (type: number) => {
    setModalType(type);
    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === "confirm") {
          console.log(ev.detail.data);
        }
      },
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" className="ion-padding-start">
            <IonBackButton
              defaultHref="/profile"
              text=""
              color="primary"
              icon={arrowBackOutline}
            />
          </IonButtons>
          <h2 className="ion-no-margin ion-padding-start f-weight-700 text-24">Запросы</h2>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonText color="medium" className="ion-text-uppercase">
          <p className="ion-padding-start group-label">Активные</p>
        </IonText>

        <IonItem lines="full" button detail={false} onClick={() => openModal(2)}>
          <IonLabel>
            <IonRow>
              <IonCol size="auto" className="pl-0 d-flex ion-align-items-center">
                <IonText className="text-16">2 марта - 12 марта</IonText>
              </IonCol>
              <IonCol className="d-flex ion-align-items-center">
                <IonBadge color="tertiary">
                  <IonIcon icon={homeOutline} /> Работа не по графику
                </IonBadge>
              </IonCol>
            </IonRow>
            <IonText color="dark-medium" className="text-14">Плохо себя чувствую. Температура и кашель и насморк</IonText>
          </IonLabel>
        </IonItem>
        <IonItem lines="full" button detail={false} onClick={() => openModal(2)}>
          <IonLabel>
            <IonRow>
              <IonCol size="auto" className="pl-0 d-flex ion-align-items-center">
                <IonText className="text-16">2 марта - 12 марта</IonText>
              </IonCol>
              <IonCol className="d-flex ion-align-items-center">
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
              <IonCol size="11" className="d-flex ion-align-items-center">
                <h2 className="f-weight-600 text-16">Сергей Антонов</h2>
              </IonCol>
            </IonRow>
          </IonLabel>
        </IonItem>

        <IonText color="medium" className="ion-text-uppercase">
          <p className="ion-padding-start group-label">Прошедшие</p>
        </IonText>

        <IonItem lines="full">
          <IonLabel>
            <IonRow>
              <IonCol size="auto" className="pl-0">
                <IonText className="text-16">2 марта</IonText>
              </IonCol>
              <IonCol className="d-flex ion-align-items-center">
                <IonBadge color="success">
                  <IonIcon icon={homeOutline} /> Отпуск
                </IonBadge>
              </IonCol>
            </IonRow>
            <IonText color="dark-medium" className="text-14">Плохо себя чувствую. Температура и кашель и насморк</IonText>
            <IonRow className="ion-align-items-center">
              <IonCol size="1" className="pl-0">
                <IonIcon
                  icon={closeOutline}
                  color="danger"
                  className="ion-margin-end"
                />
              </IonCol>
              <IonCol size="11">
                <h2 className="f-weight-600 text-16">Сергей Антонов</h2>
              </IonCol>
            </IonRow>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Requests;
