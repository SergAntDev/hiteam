import { useState } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTextarea,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar,
  IonIcon,
  IonFab,
} from "@ionic/react";
import { IonTextareaCustomEvent, TextareaChangeEventDetail } from "@ionic/core";
import { closeOutline } from "ionicons/icons";

export interface IModalData {
  reason?: string | null | undefined;
  dateFrom?: string | null | undefined;
  dateTo?: string | null | undefined;
  comment?: string | null | undefined;
}

interface IProps {
  onDismiss: (data?: IModalData, role?: string) => void;
}

const RequestModal: React.FC<IProps> = ({ onDismiss }) => {
  const [form, setForm] = useState<IModalData>({
    reason: null,
    dateFrom: null,
    dateTo: null,
    comment: null,
  });

  const onChangeForm = (
    e: IonTextareaCustomEvent<TextareaChangeEventDetail>
  ) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton color="primary" onClick={() => onDismiss({}, "cancel")}>
              <IonIcon icon={closeOutline} />
            </IonButton>
          </IonButtons>
          <h2 className="ion-no-margin">Создать запрос</h2>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem shape="round" lines="none">
          <IonLabel position="stacked">Комментарий</IonLabel>
          <IonTextarea
            onIonChange={(e) => onChangeForm(e)}
            autoGrow={true}
            name="comment"
            placeholder="Комментарий..."
          />
        </IonItem>

        <IonFab
          slot="fixed"
          className="ion-padding button-fixed-bottom"
          vertical="bottom"
        >
          <IonButton expand="block" onClick={() => onDismiss(form, "confirm")}>
            Отправить запрос
          </IonButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default RequestModal;
