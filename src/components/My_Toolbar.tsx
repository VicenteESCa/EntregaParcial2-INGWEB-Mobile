import React, { PropsWithChildren } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {IonText, IonItem, IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonPage, IonButton,IonButtons, IonMenuButton, IonList, IonLabel, IonMenuToggle } from '@ionic/react'
import '../theme/My_Toolbar.css';
import { Children } from 'react';
import { home, person, settings } from 'ionicons/icons';
import Edit_Profile from '../pages/Edit_Profile';

const My_Toolbar = ({children} : PropsWithChildren)=>{
    return(
      <IonHeader>
          <IonToolbar className="custom">
                <IonMenuButton slot="start" className='menu-button'/> {/* Este botón controla el menú lateral */}
                <IonButton routerLink="/edit_profile" color="none" slot="end" size="small" shape={'circle' as any}>
                    <img className="profile_img" src="src/assets/img_random.jpg"/>
                </IonButton>
              <IonTitle className="toolbar-title">{children}</IonTitle>
          </IonToolbar>
      </IonHeader>
    )
}

export default My_Toolbar;