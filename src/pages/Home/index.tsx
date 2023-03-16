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
import { homeOutline } from "ionicons/icons";
import { format } from "date-fns";
import { ru } from "date-fns/esm/locale";

import RequestDetailsModal from "../../components/Modals/Requests/Details";
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
        <div className="waiting-list">
          <IonText color="medium" className="ion-text-uppercase">
            <p className="ion-padding-start group-label">Ожидают одобрения</p>
          </IonText>

          <IonItem lines="full" button detail={false} onClick={() => openModal(1)}>
            <IonLabel>
              <IonRow>
                <IonCol size="auto" className="pl-0">
                  <IonAvatar className="avatar-24">
                    <img
                      alt="Silhouette of a person's head"
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                  </IonAvatar>
                </IonCol>
                <IonCol className="d-flex ion-align-items-center">
                  <h2 className="f-weight-600">Сергей Антонов</h2>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="auto" className="pl-0 pt-0 pb-0 d-flex ion-align-items-center">
                  <p className="date text-16">2 марта</p>
                </IonCol>
                <IonCol className="pt-0 pb-0 d-flex ion-align-items-center">
                  <IonBadge color="success">
                    <IonIcon icon={homeOutline} /> Отпуск
                  </IonBadge>
                </IonCol>
              </IonRow>
            </IonLabel>
          </IonItem>
          <IonItem lines="full" button detail={false} onClick={() => openModal(1)}>
            <IonLabel>
              <IonRow>
                <IonCol size="auto" className="pl-0">
                  <IonAvatar className="avatar-24">
                    <img
                      alt="Silhouette of a person's head"
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                  </IonAvatar>
                </IonCol>
                <IonCol className="d-flex ion-align-items-center">
                  <h2 className="f-weight-600">Сергей Антонов</h2>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="auto" className="pl-0 pt-0 pb-0 d-flex ion-align-items-center">
                  <p className="date text-16">2 марта</p>
                </IonCol>
                <IonCol className="pt-0 pb-0 d-flex ion-align-items-center">
                  <IonBadge color="success">
                    <IonIcon icon={homeOutline} /> Отпуск
                  </IonBadge>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="pl-0">
                  <IonText color="dark-medium" className="text-14">Плохо себя чувствую. Температура и кашель и насморк</IonText>
                </IonCol>
              </IonRow>
            </IonLabel>
          </IonItem>
          <IonItem lines="full" button detail={false} onClick={() => openModal(1)}>
            <IonLabel>
              <IonRow>
                <IonCol size="auto" className="pl-0">
                  <IonAvatar className="avatar-24">
                    <img
                      alt="Silhouette of a person's head"
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                  </IonAvatar>
                </IonCol>
                <IonCol className="d-flex ion-align-items-center">
                  <h2 className="f-weight-600">Сергей Антонов</h2>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="auto" className="pl-0 pt-0 pb-0 d-flex ion-align-items-center">
                  <p className="date text-16">2 марта</p>
                </IonCol>
                <IonCol className="pt-0 pb-0 d-flex ion-align-items-center">
                  <IonBadge color="success">
                    <IonIcon icon={homeOutline} /> Отпуск
                  </IonBadge>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="pl-0">
                  <IonText color="dark-medium" className="text-14">Плохо себя чувствую. Температура и кашель и насморк</IonText>
                </IonCol>
              </IonRow>
            </IonLabel>
          </IonItem>
        </div>

        <div className="missing-list">
          <IonText color="medium" className="ion-text-uppercase">
            <p className="ion-padding-start group-label">Отсутствуют сегодня</p>
          </IonText>

          <IonItem button detail={false} onClick={() => openModal(2)}>
            <IonAvatar slot="start" className="avatar-56">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>
              <IonRow>
                <IonCol className="pl-0">
                  <h2 className="f-weight-600">Сергей Антонов</h2>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="auto" className="pl-0 d-flex ion-align-items-center">
                  <p className="text-16">2 марта</p>
                </IonCol>
                <IonCol className="pl-0 pt-0 pb-0 d-flex ion-align-items-center">
                  <IonBadge color="primary">
                    <IonIcon icon={homeOutline} /> Работа из дома
                  </IonBadge>
                </IonCol>
              </IonRow>
            </IonLabel>
          </IonItem>
          <IonItem button detail={false} onClick={() => openModal(2)}>
            <IonAvatar slot="start" className="avatar-56">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>
              <IonRow>
                <IonCol className="pl-0">
                  <h2 className="f-weight-600">Сергей Антонов</h2>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="auto" className="pl-0 d-flex ion-align-items-center">
                  <p className="text-16">2 марта</p>
                </IonCol>
                <IonCol className="pl-0 pt-0 pb-0 d-flex ion-align-items-center">
                  <IonBadge color="tertiary">
                    <IonIcon icon={homeOutline} /> Работа не по графику
                  </IonBadge>
                </IonCol>
              </IonRow>
            </IonLabel>
          </IonItem>
          <IonItem button detail={false} onClick={() => openModal(2)}>
            <IonAvatar slot="start" className="avatar-56">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>
              <IonRow>
                <IonCol className="pl-0">
                  <h2 className="f-weight-600">Сергей Антонов</h2>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="auto" className="pl-0 d-flex ion-align-items-center">
                  <p className="text-16">2 марта</p>
                </IonCol>
                <IonCol className="pl-0 pt-0 pb-0 d-flex ion-align-items-center">
                  <IonBadge color="primary">
                    <IonIcon icon={homeOutline} /> Работа из дома
                  </IonBadge>
                </IonCol>
              </IonRow>
            </IonLabel>
          </IonItem>
          <IonItem button detail={false} onClick={() => openModal(2)}>
            <IonAvatar slot="start" className="avatar-56">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>
              <IonRow>
                <IonCol className="pl-0">
                  <h2 className="f-weight-600">Сергей Антонов</h2>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="auto" className="pl-0 d-flex ion-align-items-center">
                  <p className="text-16">2 марта</p>
                </IonCol>
                <IonCol className="pl-0 pt-0 pb-0 d-flex ion-align-items-center">
                  <IonBadge color="primary">
                    <IonIcon icon={homeOutline} /> Работа из дома
                  </IonBadge>
                </IonCol>
              </IonRow>
            </IonLabel>
          </IonItem>
          <IonItem lines="full" button detail={false} onClick={() => openModal(2)}>
            <IonAvatar slot="start" className="avatar-56">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>
              <IonRow>
                <IonCol className="pl-0">
                  <h2 className="f-weight-600">Сергей Антонов</h2>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="auto" className="pl-0 d-flex ion-align-items-center">
                  <p className="text-16">2 марта</p>
                </IonCol>
                <IonCol className="pl-0 pt-0 pb-0 d-flex ion-align-items-center">
                  <IonBadge color="primary">
                    <IonIcon icon={homeOutline} /> Работа из дома
                  </IonBadge>
                </IonCol>
              </IonRow>
            </IonLabel>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
