import { useState } from 'react';
import { useMount } from 'react-use';

import type { ICountry, IMeal, IIngredient } from '@/domain';
import api from '@/api';

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [meals, setMeals] = useState<IMeal[]>([]);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  useMount(() => {
    api.get<ICountry[]>('/countries').then((response) => {
      setCountries(response.data);
    });
    api.get<IMeal[]>('/meals').then((response) => {
      setMeals(response.data);
    });
    api.get<ICountry[]>('/ingredients').then((response) => {
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
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {countries.map(({ id, name }) => (
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
