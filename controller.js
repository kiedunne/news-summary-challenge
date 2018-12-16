

var request = new XMLHttpRequest();
https://content.guardianapis.com/search?q=anime&from-date=2016-01-01&api-key=2553d835-b51a-408c-a57f-d1dc97a97fff

request.open('GET', 'https://content.guardianapis.com/search?q=anime&from-date=2016-01-01&api-key=test', true);

request.onload = function () {

}
}

request.send();
