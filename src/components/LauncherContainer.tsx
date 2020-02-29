import React from "react";
import "./LauncherContainer.css";
import { IonIcon, IonButton, IonLabel } from "@ionic/react";

interface LauncherProps {
  name: string;
  target: string;
  icon: string;
}

const LauncherContainer: React.FC<LauncherProps> = ({ name, target, icon }) => {
  return (
    <div className="launcher">
      <strong>{name}</strong>
      <br />
      <IonButton href={target}>
        <IonIcon icon={icon} />
        <IonLabel>&nbsp;{name}</IonLabel>
      </IonButton>
      <p>
        Goto{" "}
        <a target="_self" href={target}>
          {name}
        </a>
      </p>
    </div>
  );
};

export default LauncherContainer;
