import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getDefaultMSW, useGetTodos } from './api/default';

import { setupWorker } from 'msw';
import React from 'react';
import { getCustomMSW } from './customMock';

const worker = setupWorker(...getCustomMSW(), ...getDefaultMSW());
worker.start();

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Todo />
    </QueryClientProvider>
  );
}

const Todo: React.FC = () => {
  const { data: response } = useGetTodos({
    query: {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: () => {
        console.log('success');
      },
    },
  });
  return (
    <>
      {response?.data.map((item) => {
        return (
          <div>
            ID: {item.id}, Title: {item.title} , Description: {item.description}
          </div>
        );
      })}
    </>
  );
};

export default App;
