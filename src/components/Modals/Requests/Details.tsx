import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonText,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar,
  IonIcon,
  IonBadge,
  IonAvatar,
} from "@ionic/react";
import { homeOutline } from "ionicons/icons";

import closeModal from "../../../assets/icons/close-modal.svg";

interface IProps {
  onDismiss: (data?: string, role?: string) => void;
  type: number;
}

const RequestDetailsModal: React.FC<IProps> = ({ onDismiss, type }) => {
  return (
    <IonPage color="white">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton color="primary" onClick={() => onDismiss("dismiss", "cancel")}>
              <IonIcon icon={closeModal} />
            </IonButton>
          </IonButtons>
          <IonTitle>
            <h2 className="ion-no-margin ion-text-start pl-12 f-weight-700 text-24">Запрос</h2>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="white">
        <IonItem lines="full">
          <IonAvatar slot="start" className="avatar-56">
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>
          <IonLabel>
            <h2 className="f-weight-600 text-16">Сергей Антонов</h2>
            <IonBadge color="primary">
              <IonIcon icon={homeOutline} /> Работа из дома
            </IonBadge>
          </IonLabel>
        </IonItem>
        <IonItem lines="full">
          <IonLabel>
            <div>
              <IonText color="dark-medium" className="text-14">Дата, период</IonText>
            </div>
            <IonText color="dark">9 марта</IonText>
          </IonLabel>
        </IonItem>
        <IonItem lines="full">
          <IonLabel>
            <div>
              <IonText color="dark-medium" className="text-14">Комментарий</IonText>
            </div>
            <IonText className="ion-text-wrap" color="dark">
              Утром запись к стоматологу на 8:00. Отработаю сегодня вечером, задержусь на работе до 18:00.
            </IonText>
          </IonLabel>
        </IonItem>
        {type === 2 && <IonItem lines="full">
          <IonLabel>
            <div>
              <IonText color="dark-medium" className="text-14">Одобрено</IonText>
            </div>
            <IonText className="ion-text-wrap" color="dark">
              Дмитрий Овчаренко
            </IonText>
          </IonLabel>
        </IonItem>}

        <div className="ion-padding">
          {type === 1 &&
            <>
              <IonButton expand="block" onClick={() => onDismiss("confirm", "confirm")}>
                Одобрить запрос
              </IonButton>
              <IonButton fill="clear" expand="block" color="medium" onClick={() => onDismiss("reject", "confirm")}>
                Отклонить
              </IonButton>
            </>
          }
          {type === 2 && <IonButton expand="block" color="danger" onClick={() => onDismiss("reject", "confirm")}>
            Отклонить запрос
          </IonButton>}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RequestDetailsModal;
