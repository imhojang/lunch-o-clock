import { SERVER_URL } from './constant';

const baseURL = `${SERVER_URL}/api/people`;

const addQueryStringToURL = (params, url) => {
  const urlObj = new URL(url);
  urlObj.search =  new URLSearchParams(params).toString();
  return urlObj
}

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

export const fetchPeople = () => {
  const options = {
    method: 'GET',
  };
  return fetch(baseURL, options).then(handleErrors);
}

export const addPerson = name => {
  const url = addQueryStringToURL({ name }, baseURL);
  const options = {
    method: 'POST',
  };
  return fetch(url, options).then(handleErrors);
}

export const deletePerson = name => {
  const url = addQueryStringToURL({ name }, baseURL);
  const options = {
    method: 'DELETE',
  };
  return fetch(url, options).then(handleErrors);
}
