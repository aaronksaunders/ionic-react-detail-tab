import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonButton
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { apps, flash, send } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import Details from "./pages/Details";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const TabsRoot: React.FC = () => {
  const history = useHistory();
  const backToHome = () => {
    history.push("/home");
  };
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/tab1" exact={true}>
          <Tab1 goHome={backToHome} />
        </Route>
        <Route path="/tabs/tab2" exact={true}>
          <Tab2 goHome={backToHome} />
        </Route>
        <Route path="/tabs/tab2/details" component={Details} />
        <Route
          path="/tabs"
          render={() => <Redirect to="/tabs/tab1" />}
          exact={true}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/tab1">
          <IonIcon icon={flash} />
          <IonLabel>Tab One</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/tab2">
          <IonIcon icon={apps} />
          <IonLabel>Tab Two</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

const ListPage: React.FC = (props: any) => {
  const history = useHistory();
  const detail = () => {
    history.push("/tabs");
  };
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>List Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={detail}>Logout</IonButton>
      </IonContent>
    </>
  );
};

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
      <Route path="/home" component={ListPage} exact={true} />
      <Route path="/tabs" component={TabsRoot} />
    </IonReactRouter>
  </IonApp>
);

export default App;
