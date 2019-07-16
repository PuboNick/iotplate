exports.Response = class Response {
  constructor(res) {
    this.res = res;
  }
  redirect(url) {
    this.res.setHeader('Location', url);
    this.res.writeHeader(302)
    this.res.end();
  }
  send(data) {
    typeof data === 'object' ? this.sendJson(data) : this.sendStr(data);
  }
  view(data) {
    const html = `
    <!DOCTYPE html>
    <html lang="zh-cn">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="./css/app.css">
      <title>HTTPCLIENT</title>
    </head>
    <body>
      ${data}
    </body>
    </html>
    `;
    this.send(html);
  }
  sendStr(data) {
    this.res.end(data.toString());
  }
  sendJson(data) {
    this.res.setHeader('Content-Type', 'application/json');
    data = JSON.stringify(data);
    this.res.end(data);
  }
  sendError(code, msg = '') {
    msg && console.error(msg);
    this.res.writeHeader(code);
    this.res.end();
  }
  setHeader(name, value) {
    this.res.setHeader(name, value);
  }
};

exports.Request = class Request {
  constructor(req) {
    const reults = require('url').parse(req.url, true);
    this.url = reults.pathname;
    this.query = reults.query;
    this.search = reults.search;
  }
};