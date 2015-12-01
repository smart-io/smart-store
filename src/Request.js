import App from './index';
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
  static events = {};

  static on(event, callback) {
    if (!Request.events[event]) {
      Request.events[event] = [];
    }
    Request.events[event] = [...Request.events[event], callback];
  }

  static trigger(event, data) {
    if (!Request.events[event]) {
      Request.events[event] = [];
    }
    Request.events[event].forEach((callback) => { callback(data); });
  }

  constructor(request) {
    return new Promise(function(resolve, reject) {
      let { url, ...options } = request;
      if (options.data) {
        options.body = JSON.stringify(options.data);
        delete options.data;
      }
      if (App.session) {
        options.headers = {
          'X-Session': App.session
        };
      }
      Request.trigger('fetch', { url: url, ...options });
      return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON).then(function (data) {
          Request.trigger('success', { url: url, ...options, response: data });
          resolve(data);
        })
        .catch(function (data) {
          try {
            parseJSON(data).then(function (data) {
              Request.trigger('error', { url: url, ...options, response: data });
              reject(data);
            });
          } catch (err) {
            Request.trigger('error', { url: url, ...options, response: err });
            reject(err);
          }
        });
    });
  }
}
