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
  useIonModal,
  DatetimeChangeEventDetail,
} from "@ionic/react";
import { IonTextareaCustomEvent, TextareaChangeEventDetail, IonDatetimeCustomEvent } from "@ionic/core";
import { OverlayEventDetail } from '@ionic/core/components';
import { format } from "date-fns";
import { ru } from "date-fns/esm/locale";

import chooseDate from "../../../assets/icons/choose-date.svg";
import closeModal from "../../../assets/icons/close-modal.svg";
import vacation from "../../../assets/icons/reasons/vacation.svg";
import openList from "../../../assets/icons/open-list.svg";

import ModalExample, { IReason } from "./Reasons";

export interface IModalData {
  reason?: IReason | null | undefined;
  dateFrom?: string | null | undefined;
  dateTo?: string | null | undefined;
  comment?: string | null | undefined;
}

interface IProps {
  onDismiss: (data?: IModalData, role?: string) => void;
}

const RequestModal: React.FC<IProps> = ({ onDismiss }) => {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);

  const currentDateFormat = format(new Date(), "yyyy-MM-dd", {
    locale: ru,
  });

  const [init, setInit] = useState<boolean>(false);
  const [form, setForm] = useState<IModalData>({
    reason: {
      id: 2,
      label: "Отпуск",
      icon: vacation,
      color: "success"
    },
    dateFrom: currentDateFormat,
    dateTo: currentDateFormat,
    comment: null,
  });

  const onChangeForm = (
    e: IonTextareaCustomEvent<TextareaChangeEventDetail> | IonDatetimeCustomEvent<DatetimeChangeEventDetail>
  ) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const [present, dismiss] = useIonModal(ModalExample, {
    onDismiss: (data: IReason, role: string) => dismiss(data, role),
  });

  function openModal() {
    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === 'confirm') {
          setForm((prevForm) => ({
            ...prevForm,
            reason: ev.detail.data,
          }));
        }
      },
      cssClass: "ion-sheet-modal",
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.25, 0.5, 0.75],
    });
  };

  useEffect(() => {
    setInit(true);
    if (!accordionGroup.current) {
      return;
    }

    accordionGroup.current.value = [];

    return () => setInit(false);
  }, []);

  useEffect(() => {
    if (init) openModal();
    // eslint-disable-next-line
  }, [init]);

  return (
    <IonPage>
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
        <IonItem
          onClick={() => openModal()}
          detailIcon={openList}
          shape="round"
          lines="none"
          button
          detail
          className="ion-margin-bottom"
        >
          <IonIcon slot="start" icon={form.reason?.icon} color={form.reason?.color} />
          <IonLabel>
            {form.reason?.label}
          </IonLabel>
        </IonItem>

        <IonText color="medium" className="ion-text-uppercase">
          <p className="group-label">Дата, Период</p>
        </IonText>
        <IonAccordionGroup ref={accordionGroup} multiple={true} className="accordion-rouned">
          <IonAccordion value="first" toggleIcon="">
            <IonItem slot="header" className="ion-padding-start ion-padding-end">
              <IonIcon slot="start" icon={chooseDate} color="medium" />
              <IonLabel color="medium">{form.dateFrom}</IonLabel>
            </IonItem>
            <div className="ion-padding-start ion-padding-end" slot="content">
              <IonDatetime
                onIonChange={(e) => onChangeForm(e)} min={currentDateFormat}
                presentation="date"
                value={form.dateFrom}
                name="dateFrom"
              />
            </div>
          </IonAccordion>
          <IonAccordion value="second" toggleIcon="">
            <IonItem slot="header" className="ion-padding-start ion-padding-end">
              <IonIcon slot="start" icon={chooseDate} color="medium" />
              <IonLabel color="medium">{form.dateTo}</IonLabel>
            </IonItem>
            <div className="ion-padding-start ion-padding-end" slot="content">
              <IonDatetime
                onIonChange={(e) => onChangeForm(e)} min={currentDateFormat}
                presentation="date"
                value={form.dateTo}
                name="dateTo"
              />
            </div>
          </IonAccordion>
        </IonAccordionGroup>

        <IonText color="medium" className="ion-text-uppercase">
          <p className="group-label">Комментарий</p>
        </IonText>
        <IonItem shape="round" lines="none" className="footer-space">
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
