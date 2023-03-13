import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonModal,
} from "@ionic/react";
import { OverlayEventDetail } from "@ionic/core/components";
import { home, calendarNumber, personCircle } from "ionicons/icons";

import Home from "../Home";
import Users from "../Users";
import RequestModal from "../../components/Modals/Requests/Create";

const Tabs: React.FC = () => {
  const [present, dismiss] = useIonModal(RequestModal, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
  });

  const openModal = () => {
    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === "confirm") {
          console.log(ev.detail.data);
        }
      },
    });
  };

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/app/home">
          <Home />
        </Route>
        <Route path="/app/users">
          <Users />
        </Route>
        <Route exact path="/app">
          <Redirect to="/app/home" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="main" href="/app/home">
          <IonIcon icon={home} />
          <IonLabel>Главная</IonLabel>
        </IonTabButton>
        <IonTabButton tab="request" onClick={() => openModal()}>
          <IonIcon icon={calendarNumber} />
          <IonLabel>Запрос</IonLabel>
        </IonTabButton>
        <IonTabButton tab="users" href="/app/users">
          <IonIcon icon={personCircle} />
          <IonLabel>Сотрудники</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
