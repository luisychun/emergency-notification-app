importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Fill the required API key
firebase.initializeApp({
  'apiKey': '',
  'projectId': '',
  'appId': '',
  'messagingSenderId': ""
});

const messaging = firebase.messaging();
