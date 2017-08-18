export class Http{
  static fetchData(url){
    return new Promise((resolve,reject) => {
      const HTTP = new XMLHttpRequest();
      HTTP.open('GET',url);
      HTTP.onreadystatechange = function(){
        if(HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200){
          const ResponseData = JSON.parse(HTTP.responseText);
          resolve(ResponseData);
        }
        else if(HTTP.readyState == XMLHttpRequest.DONE){
          console.log('no');
          reject('Something went wrong');
        }
      };
      HTTP.send();
    })
  }
}
