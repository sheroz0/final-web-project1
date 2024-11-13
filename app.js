// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsws6--tTt059NBUIT_YEN1m_Bwf6K7M4",
  authDomain: "al-amin-p.firebaseapp.com",
  databaseURL: "https://al-amin-p-default-rtdb.firebaseio.com",
  projectId: "al-amin-p",
  storageBucket: "al-amin-p.appspot.com",
  messagingSenderId: "994503206730",
  appId: "1:994503206730:web:959af5a0fa1acb41a443b3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
const database = firebase.database();

// Submit event listener
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const location = document.getElementById('location').value;
  const message = document.getElementById('message').value;

  // Saving data to Firebase Realtime Database
  const newContactRef = database.ref('contacts').push();
  newContactRef.set({
    name: name,
    email: email,
    phone: phone,
    location: location,
    message: message
  })
  .then(() => {
    document.getElementById('response').innerHTML = '<p class="text-success">Message sent successfully!</p>';
    document.getElementById('contactForm').reset();
  })
  .catch(error => {
    document.getElementById('response').innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
  });
});
