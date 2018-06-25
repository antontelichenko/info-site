import * as firebase from 'firebase';
// Initialize Firebase
const config = {
    apiKey: "AIzaSyAC1SAlNZZcqW2kGT3ekdLFXz7ZWqb3ApI",
    authDomain: "react-info-site.firebaseapp.com",
    databaseURL: "https://react-info-site.firebaseio.com",
    projectId: "react-info-site",
    storageBucket: "react-info-site.appspot.com",
    messagingSenderId: "360330678101"
};

firebase.initializeApp(config);

const firebaseDB=firebase.database();
const firebaseArticles=firebaseDB.ref('articles');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper =(snapshot)=>{
    const data=[];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    console.log("data "+ data);

    return data;
}

export{
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseLooper
}