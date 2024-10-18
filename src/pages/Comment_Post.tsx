import { IonText, IonLabel, IonIcon, IonCol, IonRow, IonGrid, IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';

import '../theme/Edit_Profile.css';

const Edit_Profile: React.FC = () => {
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
      <My_Toolbar>Comment Post</My_Toolbar>
      <IonContent fullscreen>
        <IonItem>
            <IonTitle slot='start'></IonTitle>
            <IonText slot='end'>69</IonText>
        </IonItem>
        <div className='comment'>
            <IonItem style={{"margin-left": "50px", "width": "200px"}}>
                <span slot='end'>hola hola</span>
            </IonItem>
        </div>
      </IonContent>
      <Footer/>
    </IonPage>
  );
};

export default Edit_Profile;