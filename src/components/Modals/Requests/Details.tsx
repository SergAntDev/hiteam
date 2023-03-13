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
import { closeOutline, homeOutline } from "ionicons/icons";

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
              <IonIcon icon={closeOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>
            <h2 className="ion-no-margin ion-text-start">Запрос</h2>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="white">
        <IonItem lines="full">
          <IonAvatar slot="start">
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>
          <IonLabel>
            <h2>Сергей Антонов</h2>
            <IonBadge color="primary">
              <IonIcon icon={homeOutline} /> Работа из дома
            </IonBadge>
          </IonLabel>
        </IonItem>
        <IonItem lines="full">
          <IonLabel>
            <p>Дата, период</p>
            <IonText>9 марта</IonText>
          </IonLabel>
        </IonItem>
        <IonItem lines="full">
          <IonLabel>
            <p>Комментарий</p>
            <IonText className="ion-text-wrap">
              Утром запись к стоматологу на 8:00. Отработаю сегодня вечером, задержусь на работе до 18:00.
            </IonText>
          </IonLabel>
        </IonItem>
        {type === 2 && <IonItem lines="full">
          <IonLabel>
            <p>Одобрено</p>
            <IonText className="ion-text-wrap">
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
