import { useState } from 'react';
import { useMount } from 'react-use';

import type { ICountry, IMeal } from '@/domain';
import api from '@/api';

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [meals, setMeals] = useState<IMeal[]>([]);

  useMount(() => {
    api.get<ICountry[]>('/countries').then((response) => {
      setCountries(response.data);
    });
    api.get<IMeal[]>('/meals').then((response) => {
      setMeals(response.data);
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
            <tr>
              <th>Id</th>
              <th>Meal</th>
            </tr>
          </thead>
          <tbody>
            {countries.map(({ id, name }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
              </tr>
            ))}
            {meals.map(({ id, name }) => (
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
