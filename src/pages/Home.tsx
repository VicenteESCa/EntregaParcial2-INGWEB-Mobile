import { IonCardHeader, IonCardTitle, IonCardContent,IonCard,IonicSlides, IonButton, IonContent, IonHeader, IonItem, IonItemSliding, IonList, IonPage, IonTextarea, IonTitle, IonToolbar, IonNote, IonImg } from '@ionic/react';
import '../theme/Home.css';
import ExploreContainer from '../components/ExploreContainer';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules'; // Importa Navigation desde SwiperCore
import 'swiper/css/navigation'; // Estilos de navegación de Swiper
import 'swiper/css';
import SwiperCore from 'swiper'
import probarImage from '../theme/images/probar.jpg';
import python from '../theme/images/python.jpg';
SwiperCore.use([Navigation])

const cardDataProgram=[
  { id:1, title: 'JavaScript', content:'s', Link:"./Login", imgBackground:probarImage},
  { id:2, title: 'Card 2', content:'Content for card 2',Link:"./Login", imgBackground:python}, 
  { id:3, title: 'Card 3', content:'Content for card 3'},   
  { id:4, title: 'Card 4', content:'Content for card 4'},];
const cardDataScience=[
  { id: 6, title: 'Data Card 1', content: 'Content for Data card 1',},
  { id: 7, title: 'Data Card 2', content: 'Content for Data card 2',},
  { id: 8, title: 'Data Card 3', content: 'Content for Data card 3',},
  { id: 9, title: 'Data Card 4', content: 'Content for Data card 4',},
];
const swiperCaract0=
  {
  spaceBetween:10,
  slidesPerView:2,
  speed:400,
  initialSlide:0,
  navigation:true,
  grabCursor:true,
  modules:[Navigation],
};

const Home: React.FC = () =>{
  return(
    <IonPage>
        <IonHeader>
        <IonToolbar className="custom">
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader>
          <IonTitle style={{fontSize:"40px"}}>Hi, user!!</IonTitle>
        </IonHeader>
        <p>
          Pregunta y resuelve tus dudas
        </p>
        <IonItem>
        <Swiper {...swiperCaract0}>
          {
            cardDataProgram.map((slide)=>(    
                <SwiperSlide key={slide.id}>
                <IonItem>
                <IonCard className="cards"
                routerLink={slide.Link}
                >
                  <img src={slide.imgBackground} alt="Card background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <IonCardHeader>
                    <IonCardTitle>{slide.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>{slide.content}</IonCardContent>
                </IonCard>
                </IonItem>
              </SwiperSlide>           
            ))}
        </Swiper>
        </IonItem>
        <IonItem>
        <Swiper {...swiperCaract0}>
          {
            cardDataScience.map((lide)=>(
              <SwiperSlide key={lide.id}>
                <IonItem>
                <IonCard className='cards'>
                  <IonCardHeader>
                    <IonCardTitle>{lide.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>{lide.content}</IonCardContent>
                </IonCard>
                </IonItem>
              </SwiperSlide>
            ))}
        </Swiper>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
