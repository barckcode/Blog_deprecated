import React from 'react'

//Components:
import Layout from '../components/Layout/Layout'
import Bio from '../components/Layout/Bio'
import Projects from '../components/Projects'

//DataBase
import loadFirebase from '../firebase/config'

const Home = () => {

  return (
    <Layout>
      <Bio />
      <Projects />
    </Layout>
  )
}

// Get Data
// Home.getInitialProps = async () => {
//   const firebase = await loadFirebase();
//   const db = firebase.firestore();
//   let result = await new Promise((resolve, reject) => {
//     db.collection('posts')
//       .get()
//       .then(snapshot => {
//         let data = [];
//         snapshot.forEach(doc => {
//           data.push(
//             Object.assign(
//               {
//                 id: doc.id
//               },
//               doc.data()
//             )
//           );
//         });
//         resolve(data);
//       })
//       .catch(error => {
//         reject([]);
//       });
//   });
//   return { posts: result };
// }

export default Home