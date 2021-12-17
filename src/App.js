import './App.css';
import firebase from './utils/firebase'
import React, {useState, useEffect} from 'react';
import Main from './components/Main';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebase/compat/auth';
import { UidContext} from './components/UidContext';


const App =() =>{
  //verifie si on est connecte
  const [isSignedIn, setSignedIn] = useState(false);
  const [uid, setUid] = useState(null); 

  
  const uiConfig = {
    signInFlow: "popup",
    signInOptions:[
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks:{
      signInSuccess:() => false,
    },
  };

  /**
   * modifiet le user 'false' en 'true' et charge la page
   */
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setSignedIn(!!user);
      console.log(user);

      if (!!user) {
        setUid(user.uid);
      }
      
    });
  },[]);

  /**
   * si on est pas connecte
   * @returns html : affiche les type d authe
   */
  const nonConnextion =() =>{

    return (
      <div className="login-page">
        <h1>React Crud</h1>
        <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }

  // il y a un if cache (:)
  return (
    <UidContext.Provider value={uid}>
      <div className="App" style={{textAlign: 'center'}}>
      
        {isSignedIn ? (
          <Main />
        ):(
          nonConnextion()
        )}

      </div>
    </UidContext.Provider>
  );
};

export default App;
