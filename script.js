var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
  "async": true,
  "scrossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2C%20Ethereum%2C%20Dogecoin&vs_currencies=usd",
  "method": "GET",
  "headers": {}
};
$.ajax(settings).done(function (response) {
    
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecon.usd;

});
