import React from 'react';
import {IonItem, IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonPage, IonButton,IonButtons, IonMenuButton, IonList, IonLabel, IonMenuToggle } from '@ionic/react'
import '../theme/Login.css';

const Menu:React.FC=()=>{
    return(
        <IonMenu contentId="main-content" type="overlay">
        <IonHeader>
            <IonToolbar className="custom">
                <IonTitle>Menu</IonTitle>
            </IonToolbar>
        </IonHeader>
            <IonContent className="ion-padding">
                    <IonList>
                        <IonMenuToggle>
                            <IonItem routerLink='/home'> 
                                <IonLabel>Home</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink='/login'>
                                <IonLabel>Inicio de sesion</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
            </IonContent>
        </IonMenu>
    )
}

export default Menu;