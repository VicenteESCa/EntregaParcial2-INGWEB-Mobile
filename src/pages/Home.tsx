import { IonButton, IonContent, IonHeader, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../theme/Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonItem>
          <IonToolbar className='Titulo-Correo'>
            <IonTitle className='.CCentrado'>Iniciar sesion</IonTitle>
          </IonToolbar>
        </IonItem>
        <IonItem>
          <IonTextarea  placeholder="Ingresa tu correo electrónico"
                        className="semi-transparent-text"></IonTextarea>
        </IonItem>
        <IonItem>
          <IonToolbar>
            <IonTextarea  placeholder="Ingresa tu Contraseña"
                        className="semi-transparent-text"></IonTextarea>
          </IonToolbar>
        </IonItem>
        <IonItem>
          <IonToolbar className="botones-container">
            <IonButton className="Button-Iniciar">Iniciar</IonButton>
            <IonButton className="Button-CrearCuenta">Crear cuenta</IonButton>
          </IonToolbar>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
