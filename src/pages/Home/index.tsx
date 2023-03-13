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
} from "@ionic/react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { homeOutline } from "ionicons/icons";
import { format } from "date-fns";
import { ru } from "date-fns/esm/locale";

import RequestDetailsModal from "../../components/Modals/Requests/Details";

import "./main.css";
import { useState } from "react";

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
              <p>{prepareCurrentDate().dayOfweek}</p>
              <h1>{prepareCurrentDate().monthWithDate}</h1>
            </IonLabel>
            <IonAvatar slot="end">
              <img
                alt="Silhouette of a person's head"
                src="https://avatars.slack-edge.com/2023-02-15/4828862206512_15d53457ba3f26cfffca_48.png"
              />
            </IonAvatar>
          </IonItem>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="waiting-list">
          <IonText color="medium" className="ion-text-uppercase">
            <p className="ion-padding-start">Ожидают одобрения</p>
          </IonText>
          <IonItem lines="full" button detail={false} onClick={() => openModal(1)}>
            <IonLabel>
              <div className="inline-container">
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar>
                <h2>Сергей Антонов</h2>
              </div>
              <div className="inline-container">
                <p className="date">2 марта</p>
                <IonBadge color="success">
                  <IonIcon icon={homeOutline}></IonIcon> Отпуск
                </IonBadge>
              </div>
            </IonLabel>
          </IonItem>
          <IonItem lines="full" button detail={false} onClick={() => openModal(1)}>
            <IonLabel>
              <div className="inline-container">
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar>
                <h2>Сергей Антонов</h2>
              </div>
              <div className="inline-container">
                <p className="date">2 марта</p>
                <IonBadge color="success">
                  <IonIcon icon={homeOutline}></IonIcon> Отпуск
                </IonBadge>
              </div>
              <p>Плохо себя чувствую. Температура и кашель и насморк</p>
            </IonLabel>
          </IonItem>
          <IonItem lines="full" button detail={false} onClick={() => openModal(1)}>
            <IonLabel>
              <div className="inline-container">
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar>
                <h2>Сергей Антонов</h2>
              </div>
              <div className="inline-container">
                <p className="date">2 марта</p>
                <IonBadge color="success">
                  <IonIcon icon={homeOutline}></IonIcon> Отпуск
                </IonBadge>
              </div>
              <p>Плохо себя чувствую. Температура и кашель и насморк</p>
            </IonLabel>
          </IonItem>
        </div>

        <div className="missing-list">
          <IonText color="medium" className="ion-text-uppercase">
            <p className="ion-padding-start">Отсутствуют сегодня</p>
          </IonText>
          <IonItem button detail={false} onClick={() => openModal(2)}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>
              <h2>Сергей Антонов</h2>
              <div className="inline-container">
                <p className="date">2 марта</p>
                <IonBadge color="primary">
                  <IonIcon icon={homeOutline}></IonIcon> Работа из дома
                </IonBadge>
              </div>
            </IonLabel>
          </IonItem>
          <IonItem button detail={false} onClick={() => openModal(2)}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>
              <h2>Сергей Антонов</h2>
              <div className="inline-container">
                <p className="date">2 марта</p>
                <IonBadge color="tertiary">
                  <IonIcon icon={homeOutline}></IonIcon> Работа не по графику
                </IonBadge>
              </div>
            </IonLabel>
          </IonItem>
          <IonItem button detail={false} onClick={() => openModal(2)}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>
              <h2>Сергей Антонов</h2>
              <div className="inline-container">
                <p className="date">2 марта</p>
                <IonBadge color="primary">
                  <IonIcon icon={homeOutline}></IonIcon> Работа из дома
                </IonBadge>
              </div>
            </IonLabel>
          </IonItem>
          <IonItem button detail={false} onClick={() => openModal(2)}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>
              <h2>Сергей Антонов</h2>
              <div className="inline-container">
                <p className="date">2 марта</p>
                <IonBadge color="primary">
                  <IonIcon icon={homeOutline}></IonIcon> Работа из дома
                </IonBadge>
              </div>
            </IonLabel>
          </IonItem>
          <IonItem lines="full" button detail={false} onClick={() => openModal(2)}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>
              <h2>Сергей Антонов</h2>
              <div className="inline-container">
                <p className="date">2 марта</p>
                <IonBadge color="primary">
                  <IonIcon icon={homeOutline}></IonIcon> Работа из дома
                </IonBadge>
              </div>
            </IonLabel>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
