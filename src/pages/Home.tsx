import { IonCardHeader, IonCardTitle, IonCardContent,IonCard,IonicSlides, IonButton, IonContent, IonHeader, IonItem, IonItemSliding, IonList, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import '../theme/Home.css';
import ExploreContainer from '../components/ExploreContainer';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; // Importa Navigation desde SwiperCore
import 'swiper/css/navigation'; // Estilos de navegación de Swiper
import SwiperCore from 'swiper'

SwiperCore.use([Navigation])

const cardData=[
  { id:1, title: 'Card 1', content:'Content for card 1'},
  { id:2, title: 'Card 2', content:'Content for card 2'},
  { id:3, title: 'Card 3', content:'Content for card 3'},
  { id:4, title: 'Card 4', content:'Content for card 4'},
];

const Home: React.FC = () => {

  return (
    <IonPage>
        <IonHeader>
        <IonToolbar className="custom">
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader>
        </IonHeader>
        <Swiper
        spaceBetween={10}
        slidesPerView={2}
        speed={400}
        initialSlide={0}
        grabCursor={true}
        navigation={true}
        >
        {cardData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{slide.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{slide.content}</IonCardContent>
              </IonCard>
              </SwiperSlide>
        ))}
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Home;
