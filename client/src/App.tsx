import { useState } from 'react';
import { useMount } from 'react-use';

import type { ICountry } from '@/domain';
import api from '@/api';

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);

  useMount(() => {
    api.get<ICountry[]>('/countries').then((response) => {
      setCountries(response.data);
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
      </section>
    </main>
  );
}

export default App;
