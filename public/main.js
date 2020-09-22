
// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: 'AIzaSyBJGEIF9xvjY3QB_rSaonzZjqGgbjBenow',
  authDomain: 'my-restaurant-9871c.firebaseapp.com',
  databaseURL: 'https://my-restaurant-9871c.firebaseio.com',
  projectId: 'my-restaurant-9871c',
  storageBucket: 'my-restaurant-9871c.appspot.com',
  messagingSenderId: '10303859761',
  appId: '1:10303859761:web:912d1c2eaf6d5fac16b910'
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let citiesRef = db.collection('site');
    
citiesRef.doc('Red').set({
  color: 'Red',
  votes: '13'
});
citiesRef.doc('Yellow').set({
  color: 'Yellow',
  votes: '5'
});
citiesRef.doc('Green').set({
  color: 'Green',
  votes: '25'
});
citiesRef.doc('Purple').set({
  color: 'Purple',
  votes: '19'
});
citiesRef.doc('Orange').set({
  color: 'Orange',
  votes: '39'
});
citiesRef.doc('Red').set({
  color: 'Red',
  votes: '50'
});
// 'Yellow', 'Green', 'Purple', 'Orange'
    
    
citiesRef.get().then(doc => {
  if (doc.exists) {
    console.log('Document data:', doc.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
}).catch(error => {
  console.log('Error getting document:', error);
});
    
db.collection('site').get().then(querySnapshot => {
  let plots = [], labels = [], arr = [];
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    let data = doc.data();
    arr.push(data);
    labels.push(data.color);
    plots.push(parseInt(data.votes));
  });
    
  console.log(arr, plots, labels);
  let source = $('#document-template').html();
  let template = Handlebars.compile(source);
  let html = template(arr);
  $('#table').html(html);
    
    
  // Line
  let ctx = document.getElementById('myChart').getContext('2d');
      
  // eslint-disable-next-line no-undef
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Votes',
        data: plots,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
});
    
// Initialize maps
/* eslint-disable no-undef */
/* eslint-disable no-var */
    
    
let mymap = L.map('map', {
  scrollWheelZoom: false
}).setView([13.0464517, 80.2196773], 15);
L.marker([13.0464517, 80.2196773]).addTo(mymap);
      
      
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 20,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoicmFqZXNoc2F0aHlha3VtYXIiLCJhIjoiY2tkMzMycnd3MHY5NjJ6cnlodWxtb2Q5dCJ9.5fz4AFXj_YCjqSqAzC8wQg'
}).addTo(mymap);
      
    