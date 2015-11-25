import fetch from 'isomorphic-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error
  }
}

function parseJSON(response) {
  if (response instanceof Error) {
    if (!response.response) {
      throw new Error('Unable to connect to server.');
    }
    return response.response.json()
  }
  return response.json()
}

export default class Request {
  constructor(request) {
    return new Promise(function(resolve, reject) {
      let { url, ...options } = request;
      if (options.data) {
        options.body = JSON.stringify(options.data);
        delete options.data;
      }
      return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON).then(function (data) {
          resolve(data);
        })
        .catch(function (data) {
          try {
            parseJSON(data).then(function (data) {
              reject(data);
            });
          } catch (err) {
            reject(err);
          }
        });
    });
  }
}
