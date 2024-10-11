import { IonCard, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import '../theme/Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom">
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonItem>
            <IonToolbar className='Titulo-Correo'>
              <IonTitle className='CCentrado'>Iniciar sesion</IonTitle>
            </IonToolbar>
          </IonItem>
          <IonItem>     
            <IonTextarea  placeholder="Ingresa tu correo electrónico"
                          className="semi-transparent-text"></IonTextarea>
          </IonItem>
          <IonItem>
            <IonToolbar>
              <IonTextarea placeholder="Ingresa tu Contraseña"
                          className="semi-transparent-text"></IonTextarea>
            </IonToolbar>
          </IonItem>
          <div className="login-wrapper">
            <IonItem>
              <IonToolbar>
                <IonButton className="my-button" routerLink='/Home'>Iniciar</IonButton>
                <IonButton className="my-button" routerLink='/Sign_In'>Crear cuenta</IonButton>
              </IonToolbar>
            </IonItem>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;