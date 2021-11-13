document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('happyButton').addEventListener('click',
    onclick, false)

    function onclick () {
      console.log("buttonpressed")
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: url+"happy-pear"}, function(response) {
        });
      });
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('sadButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: url+"sad-pear"}, function(response) {
        });
      });
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('blushButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: url+"blush-pear"}, function(response) {
        });
      });
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('madButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: url+"mad-pear"}, function(response) {
        });
      });
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('confusedButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: url+"confused-pear"}, function(response) {
        });
      });
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contentButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: url+"content-pear"}, function(response) {
        });
      });
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('cryingButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: url+"crying-pear"}, function(response) {
        });
      });
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('sleepingButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: url+"sleeping-pear"}, function(response) {
        });
      });
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('sunglassButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: url+"sunglass-pear"}, function(response) {
        });
      });
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('tongueButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: url+"tongue-pear"}, function(response) {
        });
      });
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('veryConfusedButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: url+"very-confused-pear"}, function(response) {
        });
      });
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('diceButton').addEventListener('click',
    onclick, false)

    function onclick () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {greeting: url+"dice"}, function(response) {
        });
      });
    }
}, false)
