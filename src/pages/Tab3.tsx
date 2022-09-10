import {
  IonButton,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab3.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Cocktail } from "../models/cocktail";
import { singleCocktailURL } from "../api";
import { chevronBack, heartOutline } from "ionicons/icons";

const Tab3: React.FC = () => {
  const [cocktail, setCocktail] = useState<Cocktail>();
  const [ingredients, setIngredients] = useState<Array<string>>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(singleCocktailURL(id))
      .then((res) => res.json())
      .then((data) => {
        if (data.drinks[0]) {
          setCocktail(data.drinks[0]);

          const tempIngredients = [];
          for (let i = 1; i < 15; i++) {
            const ingredientKey = `strIngredient${i}`;
            const ingredient = data.drinks[0][ingredientKey];

            if (ingredient) {
              tempIngredients.push(ingredient);
            } else {
              break;
            }
          }
          setIngredients(tempIngredients);
        }
      })
      .catch((e) => console.error(e));
  }, [id]);

  if (!cocktail || !ingredients.length) return null;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonButton color="dark" fill="clear" routerLink="/cocktails">
            <IonIcon slot="icon-only" icon={chevronBack} />
          </IonButton>
          <IonTitle>{cocktail.strDrink}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src={cocktail.strDrinkThumb} className="cocktail-img" />
        <IonList lines="none">
          <IonItem>
            <p>
              <IonChip color="dark">{cocktail.strCategory}</IonChip>
              <IonChip
                color={
                  cocktail.strAlcoholic === "Alcoholic" ? "danger" : "success"
                }
              >
                {cocktail.strAlcoholic}
              </IonChip>
              <IonButton color="dark" fill="clear">
                <IonIcon slot="icon-only" icon={heartOutline} />
              </IonButton>
            </p>
          </IonItem>
          <IonItem>
            <p>
              <span className="bold">Ingredients:</span>{" "}
              {ingredients.join(", ")}
            </p>
          </IonItem>
          <IonItem>
            <p>
              <span className="bold">Instructions:</span>{" "}
              {cocktail.strInstructions}
            </p>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
