import { useEffect, useRef, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonTextarea,
  IonText,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar,
  IonIcon,
  IonFab,
  IonAccordionGroup,
  IonAccordion,
  IonDatetime,
  IonModal,
  IonList,
} from "@ionic/react";
import { IonTextareaCustomEvent, TextareaChangeEventDetail } from "@ionic/core";
import { addCircleOutline } from "ionicons/icons";

import chooseDate from "../../../assets/icons/choose-date.svg";
import closeModal from "../../../assets/icons/close-modal.svg";

export interface IModalData {
  reason?: string | null | undefined;
  dateFrom?: string | null | undefined;
  dateTo?: string | null | undefined;
  comment?: string | null | undefined;
}

interface IProps {
  onDismiss: (data?: IModalData, role?: string) => void;
}

const reasonOptions = [
  {
    id: 1,
    label: "Больничный"
  },
  {
    id: 2,
    label: "Отпуск"
  },
  {
    id: 3,
    label: "Работа из дома"
  },
  {
    id: 4,
    label: "Пропуск части дня"
  },
  {
    id: 5,
    label: "Пропуск дня"
  },
  {
    id: 6,
    label: "Работа не по графику"
  }
];

const RequestModal: React.FC<IProps> = ({ onDismiss }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);

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

  useEffect(() => {
    if (!accordionGroup.current) {
      return;
    }

    accordionGroup.current.value = [];
  }, []);

  return (
    <IonPage>
      <IonModal
        ref={modal}
        isOpen={true}
        trigger="open-modal"
        className="ion-sheet-modal"
        initialBreakpoint={0.5}
        breakpoints={[0, 0.25, 0.5, 0.75]}
      >
        <IonContent className="ion-padding-top">
          <IonList>
            {reasonOptions.map(item => {
              return (
                <IonItem lines="none" key={item.id} button detail={false}>
                  <IonIcon slot="start" icon={addCircleOutline} />
                  <IonLabel>
                    {item.label}
                  </IonLabel>
                </IonItem>
              )
            })}
          </IonList>
        </IonContent>
      </IonModal>

      <IonHeader>
        <IonToolbar className="ion-no-padding">
          <IonButtons slot="end">
            <IonButton color="primary" onClick={() => onDismiss({}, "cancel")}>
              <IonIcon icon={closeModal} />
            </IonButton>
          </IonButtons>
          <IonTitle>
            <h2 className="ion-no-margin ion-text-start pl-12 f-weight-700 text-24">Создать запрос</h2>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding pt-0">
        <IonText color="medium" className="ion-text-uppercase">
          <p className="group-label">Причина</p>
        </IonText>
        <IonItem id="open-modal" shape="round" lines="none" button detail className="ion-margin-bottom">
          <IonIcon slot="start" icon={addCircleOutline} />
          <IonLabel>
            Отпуск
          </IonLabel>
        </IonItem>

        <IonText color="medium" className="ion-text-uppercase">
          <p className="group-label">Дата, Период</p>
        </IonText>
        <IonAccordionGroup ref={accordionGroup} multiple={true} className="accordion-rouned">
          <IonAccordion value="first" toggleIcon="">
            <IonItem slot="header" className="ion-padding-start ion-padding-end">
              <IonIcon slot="start" icon={chooseDate} color="medium" />
              <IonLabel>Дата начала</IonLabel>
            </IonItem>
            <div className="ion-padding-start ion-padding-end" slot="content">
              <IonDatetime presentation="date" />
            </div>
          </IonAccordion>
          <IonAccordion value="second" toggleIcon="">
            <IonItem slot="header" className="ion-padding-start ion-padding-end">
              <IonIcon slot="start" icon={chooseDate} color="medium" />
              <IonLabel>Дата окончания</IonLabel>
            </IonItem>
            <div className="ion-padding-start ion-padding-end" slot="content">
              <IonDatetime presentation="date" />
            </div>
          </IonAccordion>
        </IonAccordionGroup>

        <IonText color="medium" className="ion-text-uppercase">
          <p className="group-label">Комментарий</p>
        </IonText>
        <IonItem shape="round" lines="none">
          <IonTextarea
            onIonChange={(e) => onChangeForm(e)}
            autoGrow={true}
            rows={5}
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
