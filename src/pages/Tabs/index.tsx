import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonModal,
} from "@ionic/react";
import { OverlayEventDetail } from "@ionic/core/components";

import homeFill from "../../assets/icons/home-fill.svg";
import requestStroke from "../../assets/icons/request-stroke.svg";
import employeesFill from "../../assets/icons/employees-fill.svg";

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

      <IonTabBar slot="bottom" onIonTabsDidChange={e => console.log(e)}>
        <IonTabButton tab="main" href="/app/home">
          <IonIcon icon={homeFill} />
        </IonTabButton>
        <IonTabButton tab="request" onClick={() => openModal()}>
          <IonIcon icon={requestStroke} />
        </IonTabButton>
        <IonTabButton tab="users" href="/app/users">
          <IonIcon icon={employeesFill} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
