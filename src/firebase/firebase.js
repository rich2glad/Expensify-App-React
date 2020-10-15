import * as firebase from 'firebase';
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(config);
  const database= firebase.database();

  export { firebase, database as default} ;

//   database.ref('expenses').on('child_removed',(snapshot)=>{
//       console.log(snapshot.key,snapshot.val())
//   })

//   database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })

// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })

//   database.ref('expenses').once('value').then((snapshot)=>{
//       const expenes=[]
//     snapshot.forEach((snap)=>{
//         expenes.push({
//             id:snap.key,
//             ...snap.val()
//         })
//     })
//     console.log(expenes)
//   })

//   database.ref('expenses').on('value',((snapshot)=>{
//     const expenes=[]
//   snapshot.forEach((snap)=>{
//       expenes.push({
//           id:snap.key,
//           ...snap.val()
//       })
//   })
//   console.log(expenes)
// }))

//    database.ref('expenses').push( {id:'1',description:'gum',note:'',amount:195,createdAt:0})





//   database.ref('notes/-MJZhP7bx15nQQC33VGf').remove()
  
//   database.ref('notes').push({
//       title:'Course topics',
//       body:'React Angular'
//   })

  

//   const notes =[
//       {
//         title:'First Note',
//         body:'First Body'
//       },
//       {
//         title:'Second Note',
//         body:'Second Body'
//       }
//     ]

//     database.ref('notes').set(notes)

//   database.ref().on('value',(snapshot)=>{console.log(snapshot.val())})

//   setTimeout(()=>{
//       database.ref('age').set(36)
//     },3500)

//   database.ref().once('value').then((snapshot)=>{
//     console.log(snapshot.val())
//   }).catch((e)=>{
//     console.error(e)
//   })

//   database.ref().set({
//       name:'richerd',
//       age:37,
//       isSingle: false,
//       stressLevel:6,
//       job: {
//           title:"s/w engineer",
//           company:'Google'
//       },
//       location:{
//           city:'Boston',
//           country:'US'
//       }
//     }).then(()=>{
//         console.log('Data is saved')
//     }).catch((e)=>{
//         console.log('Data is error',e)
//     });

// database.ref().remove().then(()=>{
//             console.log('Data is removed')
//         }).catch((e)=>{
//             console.log('Data is error',e)
//         });

// database.ref().update({
//    stressLevel:9,
//    'job/company': 'Amazon',
//    'location/city':'Seattle'
// })
