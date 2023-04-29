import { ChangeEvent, FormEvent, useState } from 'react';

import {
  HTTP_METHODS_WITHOUT_BODY,
  HTTP_METHOD_TO_API_METHOD_MAP,
  HttpMethod,
} from '@/api/http';
import { Route, SERVICE_TO_ENDPOINT_MAP, Service } from '@/common/services';
import { isJson } from '@/common/json';
import { EMPTY_STRING } from '@/common/primitives';

enum State {
  DEFAULT,
  LOADING,
  SUCCESS,
  ERROR,
}

interface Request {
  method: HttpMethod;
  service: Service;
  route: Route;
  id: string | null;
  body: string | null;
}

const initialRequest: Request = {
  method: HttpMethod.GET,
  service: Service.CAFE,
  route: Route.ROOT,
  id: null,
  body: null,
};

interface FormProps {
  onRequest?: () => void;
  onReset?: () => void;
  onSuccess?: (data: unknown) => void;
  onError?: (error: unknown) => void;
}

export default function Form({
  onReset,
  onRequest,
  onSuccess,
  onError,
}: FormProps) {
  const [state, setState] = useState(State.DEFAULT);
  const [request, setRequest] = useState(initialRequest);
  const withBody = !HTTP_METHODS_WITHOUT_BODY.includes(request.method);
  const withId = request.route === Route.ONE;
  const isLoading = state === State.LOADING;

  const getChangeHandler =
    (key: keyof typeof request) =>
    (
      event: ChangeEvent<
        HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
      >
    ) => {
      setRequest((prevState) => ({ ...prevState, [key]: event.target.value }));
      setState(State.DEFAULT);
    };

  const handleReset = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRequest(initialRequest);
    setState(State.DEFAULT);
    onReset?.();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState(State.LOADING);

    try {
      const url = `${SERVICE_TO_ENDPOINT_MAP[request.service]}${
        withId ? `/${request.id}` : EMPTY_STRING
      }`;
      console.log('url', url);
      const method = HTTP_METHOD_TO_API_METHOD_MAP[request.method];

      onRequest?.();

      let response;
      if (withBody && request.body) {
        const body = isJson(request.body)
          ? JSON.parse(request.body)
          : request.body;
        response = await method(url, body);
      } else {
        response = await method(url);
      }

      onSuccess?.(response.data);

      setState(State.SUCCESS);
    } catch (error) {
      console.log('error', error);
      onError?.(error);

      setState(State.ERROR);
    }
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column' }}
      onReset={handleReset}
      onSubmit={handleSubmit}
    >
      <fieldset disabled={isLoading}>
        <label>
          <p>Service</p>
          <select
            onChange={getChangeHandler('service')}
            value={request.service}
          >
            {Object.keys(Service).map((key) => {
              const service = Service[key as keyof typeof Service];

              return (
                <option key={key} value={service}>
                  {service}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <p>Route</p>
          <select onChange={getChangeHandler('route')} value={request.route}>
            {Object.keys(Route).map((key) => {
              const route = Route[key as keyof typeof Route];

              return (
                <option key={key} value={route}>
                  {route}
                </option>
              );
            })}
          </select>
        </label>
        {withId && (
          <label>
            <p>Id</p>
            <input
              onChange={getChangeHandler('id')}
              value={request.id || EMPTY_STRING}
            />
          </label>
        )}
        <label>
          <p>Method</p>
          <select onChange={getChangeHandler('method')} value={request.method}>
            {Object.keys(HttpMethod).map((key) => {
              const method = HttpMethod[key as keyof typeof HttpMethod];

              return (
                <option key={key} value={method}>
                  {method}
                </option>
              );
            })}
          </select>
        </label>
        {withBody && (
          <label>
            <p>Body</p>
            <textarea
              onChange={getChangeHandler('body')}
              value={request.body || EMPTY_STRING}
            />
          </label>
        )}
      </fieldset>
      <div style={{ textAlign: 'center' }}>
        <button type="reset" disabled={isLoading}>
          Reset
        </button>
        <button type="submit" disabled={isLoading}>
          Submit
        </button>
      </div>
    </form>
  );
}
