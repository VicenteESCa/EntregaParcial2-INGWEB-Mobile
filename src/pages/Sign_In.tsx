import { IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import ExploreContainer from '../components/ExploreContainer';
import '../theme/Login.css';
import '../theme/Sign_In.css';
import My_Toolbar from '../components/My_Toolbar'

const Sign_In: React.FC = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>();

  const Is_Email = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  }

  const Validate_Email = (event: Event) => {
    const email = (event.target as HTMLTextAreaElement).value;

    setIsEmailValid(undefined);

    if ( email === '' ) return;

    Is_Email(email) !== null ? setIsEmailValid(true) : setIsEmailValid(false);
  };

  const Is_Rut = (rut: string) => {
    return rut.match(
      /^(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])$/
    );
  }

  const [isRutValid, setIsRutValid] = useState<boolean>();
  const Validate_Rut = (event: Event) => {
    const rut = (event.target as HTMLTextAreaElement).value;

    setIsRutValid(true);

    if ( rut === '' ) return;

    Is_Rut(rut) !== null ? setIsRutValid(true) : setIsRutValid(false);
  }

  const Validate_Password = (event: Event) => {
  }

  const markTouched = () => {
    setIsTouched(true);
  };

  const Validate_Submit = () : Boolean =>  {
      console.log("hola perras");
      return true;
  }

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
            className={clsx('item-spacing', {
                'ion-valid'  : isEmailValid,
                'ion-invalid': isEmailValid === false,
                'ion-touched': isTouched,
            })}
            fill="solid"
            label="Nombre de usuario (obligatorio)"
            labelPlacement="floating"
            helperText="Ingresa tu nombre de usuario."
            errorText="Nombre de usuario invalido."
            onIonInput={(event) => Validate_Email(event)}
            onIonBlur={() => markTouched()}
            ></IonTextarea>
          </IonItem>
          <IonItem>
            <IonTextarea 
            className={clsx('item-spacing', {
                'ion-valid'  : isRutValid,
                'ion-invalid': isRutValid === false,
                'ion-touched': isTouched,
            })}
            fill="solid"
            label="Rut (obligatorio)"
            labelPlacement="floating"
            helperText="Ingresa tu rut. (00.000.000-0)"
            errorText="Rut invalido. El formato debe corresponder con (00.000.000-0)"
            onIonInput={(event) => Validate_Rut(event)}
            onIonBlur={() => markTouched()}
            ></IonTextarea>
          </IonItem>
          <IonItem>
            <IonTextarea 
            className={clsx('item-spacing', {
                'ion-valid'  : isEmailValid,
                'ion-invalid': isEmailValid === false,
                'ion-touched': isTouched,
            })}
            fill="solid"
            label="Email (obligatorio)"
            labelPlacement="floating"
            helperText="Ingresa tu email."
            errorText="Email invalido."
            onIonInput={(event) => Validate_Email(event)}
            onIonBlur={() => markTouched()}
            ></IonTextarea>
          </IonItem>
          <IonItem>
            <IonSelect
            label="Region (obligatorio)"
            fill="solid"
            labelPlacement="floating"
            className={clsx('item-spacing', {
                'ion-valid'  : isEmailValid,
                'ion-invalid': isEmailValid === false,
                'ion-touched': isTouched,
            })}
            >
              <IonSelectOption value="chile">Chile</IonSelectOption>
              <IonSelectOption value="peru">Peru</IonSelectOption>
              <IonSelectOption value="bolivia">Bolivia</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonSelect
            label="Comuna (obligatorio)"
            fill="solid"
            labelPlacement="floating"
            className={clsx('item-spacing', {
                'ion-valid'  : isEmailValid,
                'ion-invalid': isEmailValid === false,
                'ion-touched': isTouched,
            })}
            >
              <IonSelectOption value="chile">Chile</IonSelectOption>
              <IonSelectOption value="peru">Peru</IonSelectOption>
              <IonSelectOption value="bolivia">Bolivia</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonInput
             className={clsx('item-spacing', {
                 'ion-valid'  : isEmailValid,
                 'ion-invalid': isEmailValid === false,
                 'ion-touched': isTouched,
             })}
             type="password"
             label="Contraseña (obligatorio)"
             fill="solid"
             labelPlacement="floating"
             helperText="Ingresa tu contraseña"
             errorText="Contraseña invalida"
             onIonInput={(event) => Validate_Email(event)}
             onIonBlur={() => markTouched()}
            >
              <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              className={clsx('item-spacing', {
                  'ion-valid'  : isEmailValid,
                  'ion-invalid': isEmailValid === false,
                  'ion-touched': isTouched,
              })}
              fill="solid"
              label="Confirmar contraseña (obligatorio)"
              labelPlacement="floating"
              helperText="Confirma tu contraseña"
              errorText="Contraseña invalida"
              onIonInput={(event) => Validate_Password(event)}
              onIonBlur={() => markTouched()}
            >
              <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox>I agree to the terms and conditions</IonCheckbox>
          </IonItem>
        <div className="login-wrapper">
          <IonItem>
            <IonToolbar className="botones-container">
              <IonButton className="my-button" onClick={() => Validate_Submit()} routerLink='/Home'>Registrate</IonButton>
            </IonToolbar>
          </IonItem>
        </div>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Sign_In;