import React from 'react';
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
} from '@ionic/react';

import fromHome from "../../../assets/icons/reasons/from-home.svg";
import sickLeave from "../../../assets/icons/reasons/sick-leave.svg";
import skippingDay from "../../../assets/icons/reasons/skipping-day.svg";
import skippingPartOfTheDay from "../../../assets/icons/reasons/skipping-part-of-the-day.svg";
import vacation from "../../../assets/icons/reasons/vacation.svg";
import workingOffTheSchedule from "../../../assets/icons/reasons/working-off-the-schedule.svg";

export interface IReason {
  id: number;
  label: string;
  icon: any;
  color: string;
}

interface IProps {
  onDismiss: (reason?: IReason, role?: string) => void;
}

const reasonOptions = [
  {
    id: 1,
    label: "Больничный",
    icon: sickLeave,
    color: "danger"
  },
  {
    id: 2,
    label: "Отпуск",
    icon: vacation,
    color: "success"
  },
  {
    id: 3,
    label: "Работа из дома",
    icon: fromHome,
    color: "secondary"
  },
  {
    id: 4,
    label: "Пропуск части дня",
    icon: skippingPartOfTheDay,
    color: "warning"
  },
  {
    id: 5,
    label: "Пропуск дня",
    icon: skippingDay,
    color: "tertiary"
  },
  {
    id: 6,
    label: "Работа не по графику",
    icon: workingOffTheSchedule,
    color: "pink"
  }
];


const ModalExample: React.FC<IProps> = ({ onDismiss }) => {
  const onSelectReason = (item: IReason) => {
    onDismiss(item, 'confirm');
  };

  return (
    <IonPage>
      <IonContent className="ion-padding-top">
        <IonList>
          {reasonOptions.map(item => {
            return (
              <IonItem
                onClick={() => onSelectReason(item)}
                lines="none"
                key={item.id}
                detail={false}
                button
              >
                <IonIcon slot="start" icon={item.icon} color={item.color} />
                <IonLabel>
                  {item.label}
                </IonLabel>
              </IonItem>
            )
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ModalExample;