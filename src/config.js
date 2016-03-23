let _config = {
  url: null,
  session: null
};

export function config(...args) {
  let config = {};
  if (args.length > 1) {
    config[args[0]] = args[1];
  } else {
    config = args[0];
  }
  _config = { ..._config, ...config };
}

export function getConfig() {
  return _config;
}
