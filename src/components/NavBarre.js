import React from 'react';
import "../Style/NavBarre.css";
import firebase from '../utils/firebase';
import 'firebase/compat/auth';


const NavBarre = (props) => {

    //const nombreArt =0;
    const { basket, setIsBasket} = props;
    const {setFiltre} = props;
    const {setrenderButon} = props;
    const {renderButon} = props;
    const {setIsOpen} = props;
   
    return (
        <div className="NavBarre">

            <div className="Nav-1">
                <div className="Nav-1-Left">
                    <div className="deco" onClick={() => firebase.auth().signOut()}>
                        se déconnecter
                    </div>
             
                    <div onClick={setIsOpen}>Vendre</div>

                    <div onClick={() => setrenderButon(!renderButon)}>Modiffier</div>
                </div>
                <div className="Nav-1-Right">
                    <div>{firebase.auth().currentUser.displayName}</div>
                    <div>Souhaits</div>
                    <div className='panieSac' onClick={setIsBasket}>Mon sac({basket.length})</div>
                </div>
            </div>

            <div className="Nav-2">
                <div className="titre_page">
                   HAUTSTORE 
                </div>
            </div>

            <div className="Nav-3">
                <div onClick={() =>setFiltre("Nouveaute")}>Nouveau</div> 
                <div onClick={() =>setFiltre("Femme")}>Femme</div> 
                <div onClick={() =>setFiltre("Homme")}>Homme</div>
                <div onClick={() =>setFiltre("Maison")}>Maison</div>
                <div>Rechercher</div>
            </div>

        </div>
    );
};

export default NavBarre;