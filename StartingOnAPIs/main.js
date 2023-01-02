var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://postman-library-api.glitch.me/books", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));