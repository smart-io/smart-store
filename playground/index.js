document.body.innerHTML = `
  <div id="main" style="margin-right: 280px"></div>
`;

let script = document.createElement('script');
script.src = '/webpack-dev-server.js';
document.getElementsByTagName('head')[0].appendChild(script);

document.body.style.padding = '30px 40px';
document.body.style.color = 'white';
document.body.style.fontFamily = 'monaco, Consolas, Lucida Console, monospace';
document.body.style.fontSize = '12px';
document.body.style.backgroundColor = '#141517';
