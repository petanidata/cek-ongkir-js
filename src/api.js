// Config Defaults Axios dengan Detail Akun Rajaongkir
axios.defaults.baseURL = 'https://api.rajaongkir.com/starter'
axios.defaults.headers.common['key'] = 'a7cba2f9daff975e75ecd38578009930'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


var request = require("request");

var options = {
  method: 'GET',
  url: 'https://api.rajaongkir.com/starter/city',
  qs: {id: '39', province: '5'},
  headers: {key: 'your-api-key'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});