import { IonAvatar, IonIcon, IonCard, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import '../theme/Login.css';
import My_Toolbar from '../components/My_Toolbar'

const Login: React.FC = () => {
  return (
    <IonPage>
      <My_Toolbar>
        Login
      </My_Toolbar>
      <IonContent fullscreen>
          <IonItem>
            <IonToolbar className='Titulo-Correo'>
              <IonTitle>Iniciar sesion</IonTitle>
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