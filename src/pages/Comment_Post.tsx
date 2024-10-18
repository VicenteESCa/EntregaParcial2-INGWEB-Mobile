import { IonText, IonLabel, IonIcon, IonCol, IonRow, IonGrid, IonCheckbox, IonSelect, IonSelectOption, IonInputPasswordToggle, IonList, IonInput, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import My_Toolbar from '../components/My_Toolbar'
import Footer from '../components/Footer';

import '../theme/Comment_Post.css';

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
        <IonLabel>
            <IonTitle style={{"margin-top": "30px", "margin-left": "30px"}}>Comentarios: 69</IonTitle>
        </IonLabel>
          <div className='comment'>
            <IonItem style={{width: "300px"}} >
              <img slot='start' style={{width: "50px"}} src="src/assets/img_random.jpg" alt="foto perfil"/>
              <span>I think you should try...</span>
            </IonItem>
          </div>
        <IonList inset={true}>
        </IonList>
      </IonContent>
      <Footer/>
    </IonPage>
  );
};

export default Edit_Profile;