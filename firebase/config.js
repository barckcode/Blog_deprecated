import firebase from 'firebase/app'
import '@firebase/firestore'

const loadFirebase = () => {
  try {
    const firebaseConfig = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATA_BASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
    }

    firebase.initializeApp(firebaseConfig)
  } catch (error) {
    if (!/already exist/.test(error.message)) {
      console.log('Firebase initialization error', error.stack)
    }
  }

  return firebase
}

export default loadFirebase