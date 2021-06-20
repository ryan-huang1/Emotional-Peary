console.log('background.js has been loaded: ryanhuang');

chrome.webNavigation.onCompleted.addListener(function() {
  //gets the url
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
         var url = tabs[0].url;
         //mesage sender -> content.js
         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
           chrome.tabs.sendMessage(tabs[0].id, {greeting: url}, function(response) {
             console.log(response.farewell);
           });
         });
         console.log(url);
         //alert(url)
     });
}, {url: [{urlMatches : 'https://app.peardeck.com/'}]});
