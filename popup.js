//happy peary
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('happyButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "HAPPY"+url}, function(response) {
        });
      });
    }
}, false)

//mad peary
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('madButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "MAD"+url}, function(response) {
        });
      });
    }
}, false)

//sad peary
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('sadButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "SAD"+url}, function(response) {
        });
      });
    }
}, false)

//kinda sad peary
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('kindaSadButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "KINDASAD"+url}, function(response) {
        });
      });
    }
}, false)

//random peary
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('randomButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "RANDOM"+url}, function(response) {
        });
      });
    }
}, false)
