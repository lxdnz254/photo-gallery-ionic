import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid } from '@ionic/react';
import {images, people } from 'ionicons/icons';
import LauncherContainer from '../components/LauncherContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>The Ionic Journey</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="center" size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <LauncherContainer name="Photos" target="/tab2" icon={images} />
          <LauncherContainer name="Employees" target="/tab3" icon={people}/>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
