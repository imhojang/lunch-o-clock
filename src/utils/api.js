import { SERVER_URL } from './constant';

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

export function fetchPeople() {
  const url = `${SERVER_URL}/api/people`;
  const options = {
    method: 'GET',
  };

  return fetch(url, options).then(handleErrors);
}
