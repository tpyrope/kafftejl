import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Tab1.css";
import { cocktailsURL } from "../api";
import { useState } from "react";
import { SimpleCoctail } from "../models/cocktail";

const Tab1: React.FC = () => {
  const [cocktails, setCocktails] = useState<Array<SimpleCoctail>>([]);

  useIonViewWillEnter(() => {
    fetch(cocktailsURL)
      .then((res) => res.json())
      .then((data) => setCocktails(data.drinks));
  });

  if (!cocktails) return null;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cocktails</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cocktails</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {cocktails.map((cocktail) => (
              <IonCol key={cocktail.idDrink} size="6">
                <IonCard key={cocktail.idDrink}>
                  <IonImg src={cocktail.strDrinkThumb}></IonImg>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
