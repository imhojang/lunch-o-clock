import { SERVER_URL } from './constant';

const baseURL = `${SERVER_URL}/api/people`;

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

export function fetchPeople() {
  const options = {
    method: 'GET',
  };
  return fetch(baseURL, options).then(handleErrors);
}

export function addPerson(name) {
  const url = new URL(baseURL);
  const params = { name };
  url.search = new URLSearchParams(params).toString();
  const options = {
    method: 'POST',
  };
  return fetch(url, options).then(handleErrors);
}
