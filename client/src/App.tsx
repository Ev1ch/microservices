import { useState, useCallback } from 'react';

import Form from './Form';
import Data from './Data';

export default function App() {
  const [response, setResponse] = useState<unknown>();

  const handleReset = useCallback(() => {
    setResponse(null);
  }, []);

  const handleSuccess = useCallback((data: unknown) => {
    setResponse(data);
  }, []);

  const handleError = useCallback((error: unknown) => {
    setResponse(error);
  }, []);

  return (
    <main
      style={{
        display: 'flex',
      }}
    >
      <section>
        <Form
          onReset={handleReset}
          onRequest={handleReset}
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </section>
      <section style={{ flexGrow: 1 }}>
        <Data data={response} />
      </section>
    </main>
  );
}
