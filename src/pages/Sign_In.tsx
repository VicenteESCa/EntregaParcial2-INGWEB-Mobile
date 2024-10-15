import { IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import ExploreContainer from '../components/ExploreContainer';
import '../theme/Login.css';
import '../theme/Sign_In.css';
import My_Toolbar from '../components/My_Toolbar'

const Sign_In: React.FC = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const Is_Email = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  }

  const Validate_Email = (event: Event) => {
    const email = (event.target as HTMLTextAreaElement).value;

    setIsValid(undefined);

    if ( email === '' ) return;

    Is_Email(email) !== null ? setIsValid(true) : setIsValid(false);
  };

  const Validate_Password = (event: Event) => {
  }

  const markTouched = () => {
    setIsTouched(true);
  };

  return (
    <IonPage>
      <My_Toolbar>Sign In</My_Toolbar>
      <IonContent fullscreen>
        <IonItem>
          <IonToolbar className='Titulo-Correo'>
            <IonTitle>Registrarse</IonTitle>
          </IonToolbar>
        </IonItem>
        <IonList>
          <IonItem>
            <IonTextarea 
            className={clsx({
                'item-spacing ion-valid'  : isValid,
                'item-spacing ion-invalid': isValid === false,
                'item-spacing ion-touched': isTouched,
            })}
            fill="solid"
            label="Email"
            labelPlacement="floating"
            helperText="Enter a valid email"
            errorText="Invalid email"
            onIonInput={(event) => Validate_Email(event)}
            onIonBlur={() => markTouched()}
            ></IonTextarea>
          </IonItem>
          <IonItem>
            <IonToolbar>
              <IonTextarea
              className={clsx({
                'item-spacing ion-valid'  : isValid,
                'item-spacing ion-invalid': isValid === false,
                'item-spacing ion-touched': isTouched,
              })}
              fill="solid"
              label="Password"
              labelPlacement="floating"
              helperText="Ingresa tu contraseña"
              errorText="Contraseña invalida"
              onIonInput={(event) => Validate_Password(event)}
              onIonBlur={() => markTouched()}
              ></IonTextarea>
            </IonToolbar>
          </IonItem>
          <IonItem>
            <IonToolbar>
              <IonTextarea
              className={clsx({
                'item-spacing ion-valid'  : isValid,
                'item-spacing ion-invalid': isValid === false,
                'item-spacing ion-touched': isTouched,
              })}
              fill="solid"
              label="Validate Password"
              labelPlacement="floating"
              helperText="Confirma tu contraseña"
              errorText="Contraseña invalida"
              onIonInput={(event) => Validate_Password(event)}
              onIonBlur={() => markTouched()}
              ></IonTextarea>
            </IonToolbar>
          </IonItem>
        <div className="login-wrapper">
          <IonItem>
            <IonToolbar className="botones-container">
              <IonButton className="my-button" routerLink='/Home'>Registrate</IonButton>
            </IonToolbar>
          </IonItem>
        </div>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Sign_In;