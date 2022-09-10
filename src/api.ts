export const cocktailsURL = `https://www.thecocktaildb.com/api/json/v1/${process.env.REACT_APP_API_KEY}/filter.php?i=Coffee`;

export const singleCocktailURL = (id: string) =>
  `https://www.thecocktaildb.com/api/json/v1/${process.env.REACT_APP_API_KEY}/lookup.php?i=${id}`;
