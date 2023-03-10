import { useState } from 'react';
import { useMount } from 'react-use';

import type { ICuisine, IMeal, IIngredient } from '@/domain';
import api from '@/api';

function App() {
  const [cuisines, setCuisines] = useState<ICuisine[]>([]);
  const [meals, setMeals] = useState<IMeal[]>([]);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  useMount(() => {
    api.get<ICuisine[]>('/cuisines').then((response) => {
      setCuisines(response.data);
    });
    api.get<IMeal[]>('/meals').then((response) => {
      setMeals(response.data);
    });
    api.get<IIngredient[]>('/ingredients').then((response) => {
      setIngredients(response.data);
    });
  });

  return (
    <main>
      <section>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Cuisine</th>
            </tr>
          </thead>
          <tbody>
            {cuisines.map(({ id, name }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Meal</th>
            </tr>
          </thead>
          <tbody>
            {meals.map(({ id, name }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map(({ id, name }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default App;
