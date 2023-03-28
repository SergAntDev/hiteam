import { useState } from "react";
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar,
  IonBadge,
  IonIcon,
  IonText,
  useIonModal,
  IonRow,
  IonCol,
} from "@ionic/react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { format } from "date-fns";
import { ru } from "date-fns/esm/locale";

// import emptyState from "../../assets/icons/empty-state.svg";
import fromHome from "../../assets/icons/reasons/from-home.svg";
import sickLeave from "../../assets/icons/reasons/sick-leave.svg";
import skippingDay from "../../assets/icons/reasons/skipping-day.svg";
import skippingPartOfTheDay from "../../assets/icons/reasons/skipping-part-of-the-day.svg";
import vacation from "../../assets/icons/reasons/vacation.svg";
import workingOffTheSchedule from "../../assets/icons/reasons/working-off-the-schedule.svg";

import RequestDetailsModal from "../../components/Modals/Requests/Details";

const waitingList = [
  {
    id: 1,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    employee: "Сергей Антонов",
    date: "3 июл - 17 июл",
    reason: {
      name: "Отпуск",
      icon: vacation,
      colors: {
        icon: "#10B981",
        text: "#14532D",
        badge: "#DCFCE7"
      }
    }
  },
  {
    id: 2,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    employee: "Сергей Антонов",
    date: "2 марта",
    comments: "Плохо себя чувствую. Температура и кашель и насморк",
    reason: {
      name: "Пропуск дня",
      icon: skippingDay,
      colors: {
        icon: "#8B5CF6",
        text: "#581C87",
        badge: "#F3E8FF"
      }
    }
  },
  {
    id: 3,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    employee: "Сергей Антонов",
    date: "2 марта",
    comments: "Утром запись к стоматологу на 8:00. Отработаю в этот же день",
    reason: {
      name: "Пропуск части дня",
      icon: skippingPartOfTheDay,
      colors: {
        icon: "#F97316",
        text: "#9A3412",
        badge: "#FFEDD5"
      }
    }
  }
];

const missingList = [
  {
    id: 1,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    employee: "Сергей Антонов",
    date: "3 июл - 17 июл",
    reason: {
      name: "Работа из дома",
      icon: fromHome,
      colors: {
        icon: "#0EA5E9",
        text: "#0C4A6E",
        badge: "#E0F2FE"
      }
    }
  },
  {
    id: 2,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    employee: "Сергей Антонов",
    date: "2 марта",
    reason: {
      name: "Работа не по графику",
      icon: workingOffTheSchedule,
      colors: {
        icon: "#EC4899",
        text: "#831843",
        badge: "#FCE7F3"
      }
    }
  },
  {
    id: 3,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    employee: "Сергей Антонов",
    date: "2 марта",
    reason: {
      name: "Больничный",
      icon: sickLeave,
      colors: {
        icon: "#EF4444",
        text: "#7F1D1D",
        badge: "#FEE2E2"
      }
    }
  },
  {
    id: 4,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    employee: "Сергей Антонов",
    date: "2 марта",
    reason: {
      name: "Пропуск части дня",
      icon: skippingPartOfTheDay,
      colors: {
        icon: "#F97316",
        text: "#9A3412",
        badge: "#FFEDD5"
      }
    }
  },
  {
    id: 5,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    employee: "Сергей Антонов",
    date: "2 марта",
    reason: {
      name: "Больничный",
      icon: sickLeave,
      colors: {
        icon: "#EF4444",
        text: "#7F1D1D",
        badge: "#FEE2E2"
      }
    }
  }
];

interface ICurrentDate {
  dayOfweek: string;
  monthWithDate: string;
}
type voidFunc = () => ICurrentDate;

const Home: React.FC = () => {
  const [modalType, setModalType] = useState<number>(1);

  const prepareCurrentDate: voidFunc = () => {
    const currentDate = new Date();
    const currentDateFormat = format(currentDate, "EEEE,d MMMM", {
      locale: ru,
    });
    const slicedDate = currentDateFormat.split(",");

    return {
      dayOfweek: slicedDate[0],
      monthWithDate: slicedDate[1],
    };
  };

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
          <IonItem
            routerLink="/profile"
            lines="none"
            color="none"
            detail={false}
          >
            <IonLabel>
              <IonText color="medium">
                <p className="ion-text-uppercase text-12">{prepareCurrentDate().dayOfweek}</p>
              </IonText>
              <h1 className="text-24 f-weight-700">{prepareCurrentDate().monthWithDate}</h1>
            </IonLabel>
            <IonAvatar slot="end" className="avatar-48">
              <img
                alt="Silhouette of a person's head"
                src="https://avatars.slack-edge.com/2023-02-15/4828862206512_15d53457ba3f26cfffca_48.png"
              />
            </IonAvatar>
          </IonItem>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* <div className="empty-content">
          <IonIcon icon={emptyState} size="large" color="very-light" />
          <IonText color="medium">
            <p className="ion-padding-start">Список пуст...</p>
          </IonText>
        </div> */}
        <div className="waiting-list">
          <IonText color="medium" className="ion-text-uppercase">
            <p className="ion-padding-start group-label">Ожидают одобрения</p>
          </IonText>

          {waitingList.map(item => {
            return (
              <IonItem key={item.id} lines="full" button detail={false} onClick={() => openModal(1)}>
                <IonLabel>
                  <IonRow>
                    <IonCol size="auto" className="pl-0">
                      <IonAvatar className="avatar-24">
                        <img
                          alt="Silhouette of a person's head"
                          src={item.avatar}
                        />
                      </IonAvatar>
                    </IonCol>
                    <IonCol className="d-flex ion-align-items-center">
                      <h2 className="f-weight-600">{item.employee}</h2>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="auto" className="pl-0 pt-0 pb-0 d-flex ion-align-items-center">
                      <p className="date text-16">{item.date}</p>
                    </IonCol>
                    <IonCol className="pt-0 pb-0 d-flex">
                      <IonBadge className="d-flex ion-align-items-center" style={{ background: item.reason.colors.badge }}>
                        <IonIcon icon={item.reason.icon} style={{ color: item.reason.colors.icon }} />
                        <span className="ml-4" style={{ color: item.reason.colors.text }}>{item.reason.name}</span>
                      </IonBadge>
                    </IonCol>
                  </IonRow>
                  {item.comments && <IonRow>
                    <IonCol className="pl-0">
                      <IonText color="dark-medium" className="text-14">{item.comments}</IonText>
                    </IonCol>
                  </IonRow>}
                </IonLabel>
              </IonItem>
            )
          })}
        </div>

        <div className="missing-list">
          <IonText color="medium" className="ion-text-uppercase">
            <p className="ion-padding-start group-label">Отсутствуют сегодня</p>
          </IonText>

          {missingList.map((item, index) => {
            return (
              <IonItem
                key={item.id}
                lines={index === (missingList.length - 1) ? "full" : undefined}
                button
                detail={false}
                onClick={() => openModal(2)}
              >
                <IonAvatar slot="start" className="avatar-56">
                  <img
                    alt="Silhouette of a person's head"
                    src={item.avatar}
                  />
                </IonAvatar>
                <IonLabel>
                  <IonRow>
                    <IonCol className="pl-0">
                      <h2 className="f-weight-600">{item.employee}</h2>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="auto" className="pl-0 pt-0 pb-0 d-flex ion-align-items-center">
                      <p className="text-16">{item.date}</p>
                    </IonCol>
                    <IonCol className="pt-0 pb-0 d-flex">
                      <IonBadge className="d-flex ion-align-items-center" style={{ background: item.reason.colors.badge }}>
                        <IonIcon icon={item.reason.icon} style={{ color: item.reason.colors.icon }} />
                        <span className="ml-4" style={{ color: item.reason.colors.text }}>{item.reason.name}</span>
                      </IonBadge>
                    </IonCol>
                  </IonRow>
                </IonLabel>
              </IonItem>
            )
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
