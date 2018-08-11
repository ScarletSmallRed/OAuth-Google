# OAuth-Google
## Using Passport.js in a web app behind a corporate firewall
oauth2.js does not take in consideration the proxy environment variables when it performed the requests. Blocking the web app to get authenticated (receive the access token and the github user info)

So I tried with this workarround that let know to the oauth2.js that uses the proxy to communicate.

You usually will find the oauth2.js code that needs to adapt at: your_project/node_modules/oauth/lib/oauth2.js

```JavaScript
var querystring= require('querystring'),
    crypto= require('crypto'),
    https= require('https'),
    http= require('http'),
    URL= require('url'),
    OAuthUtils= require('./_utils');

// line codes to add
var HttpsProxyAgent = require('https-proxy-agent');
let httpsProxyAgent = null

if (process.env['https_proxy']) {
    httpsProxyAgent = new HttpsProxyAgent("http://127.0.0.1:1087");
    // fill in your proxy agent ip and port
}

....
  // line codes to add
  options.agent = httpsProxyAgent;

  this._executeRequest( http_library, options, post_body, callback );
}

exports.OAuth2.prototype._request= function(method, url, headers, post_body, access_token, callback) {

...
```