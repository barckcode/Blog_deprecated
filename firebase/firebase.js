import firebase from 'firebase/app'
import 'firebase/firestore'

// Firebase config:
import { firebaseConfig } from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase


//######### Metodos de firestore:
// Añadir:
// firebase.firestore().collection('prueba').add({
//   title: 'Titulo de Prueba',
//   time_seconds: 45,
// })


// Leer:
// firebase.firestore().collection('posts').get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.data()}`)
//   })
// })