import React, { PropsWithChildren } from 'react';
import {IonText, IonItem, IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonPage, IonButton,IonButtons, IonMenuButton, IonList, IonLabel, IonMenuToggle } from '@ionic/react'
import '../theme/My_Toolbar.css';
import { Children } from 'react';
import { home, person, settings } from 'ionicons/icons';

const My_Toolbar = ({children} : PropsWithChildren)=>{
    return(
      <IonHeader className="Radius-Box-Sizing-toolbar">
          <IonToolbar className="custom">
              <IonMenuButton slot="start" className='menu-button'/> {/* Este botón controla el menú lateral */}
              <IonButton color="none" slot="end" size="small" shape={'circle' as any}>
                  <img className="profile_img" src="src/assets/img_random.jpg"/>
              </IonButton>
              <IonTitle className="toolbar-title">{children}</IonTitle>
          </IonToolbar>
      </IonHeader>
    )
}

export default My_Toolbar;