let btc = document.getElementById('bitcoin');
let eth = document.getElementById('ethereum');
let doge = document.getElementById('dogecoin');
let settings = {
    'async': true,
    'scrossDomain': true,
    'url': 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Centhereum%2Cdogecoin&vs_currencies=usd',
    'method': 'GET',
    'headers': {}
}
$.ajax(settings).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.bitcoin.usd;
    doge.innerHTML = response.bitcoin.usd;
});