import React, { PropsWithChildren, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {IonCard, IonPopover,IonText, IonItem, IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonPage, IonButton,IonButtons, IonMenuButton, IonList, IonLabel, IonMenuToggle } from '@ionic/react'
import '../theme/My_Toolbar.css';
import { Children } from 'react';
import { home, person, settings } from 'ionicons/icons';
import Edit_Profile from '../pages/Edit_Profile';

const My_Toolbar = ({children} : PropsWithChildren)=>{
    const [showPopover, setShowPopover] = useState(false);
    return(
      <IonHeader className="Radius-Box-Sizing-toolbar">
          <IonToolbar className="custom">
            
                <IonMenuButton slot="start" className='menu-button'/> {/* Este botón controla el menú lateral */}
                <IonButton id="bottom-start" 
                           color="none" 
                           slot="end" 
                           size="small" 
                           shape={'circle' as any}
                           onClick={() => setShowPopover(true)}>
                    <img className="profile_img" src="src/assets/img_random.jpg"/>
                </IonButton>
                <IonPopover isOpen={showPopover}
                            onDidDismiss={()=> setShowPopover(false)}
                            trigger="bottom-start"
                            alignment='end'
                            side="bottom"
                >
                    <IonToolbar>
                        <IonList>
                            <IonButton color="none"
                                       onClick={()=>setShowPopover(false)}>
                            <IonLabel> volviendome loco </IonLabel>
                            </IonButton>
                        </IonList>
                    </IonToolbar>
                </IonPopover>

              <IonTitle className="toolbar-title">{children}</IonTitle>
          </IonToolbar>
      </IonHeader>
    )
}

export default My_Toolbar;