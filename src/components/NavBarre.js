import React from 'react';
import "../Style/NavBarre.css";
import firebase from '../utils/firebase';
import 'firebase/compat/auth';


const NavBarre = (props) => {

    //const nombreArt =0;
   
    return (
        <div className="NavBarre">

            <div className="Nav-1">
                <div className="Nav-1-Left">
                    <div className="deco" onClick={() => firebase.auth().signOut()}>
                        se deconnecter
                    </div>
             
                    <div onClick={props.setIsOpen}>Vendre</div>

                    <div onClick={() => props.setaffButon(!props.affButon)}>Modiffier</div>
                </div>
                <div className="Nav-1-Right">
                    <div>{firebase.auth().currentUser.displayName}</div>
                    <div>Souhaits</div>
                    <div className='panieSac' onClick={props.setIsPanie}>Mon sac({props.panie.length})</div>
                </div>
            </div>

            <div className="Nav-2">
                <div className="titre_page">
                   HAUTSTORE 
                </div>
            </div>

            <div className="Nav-3">
                <div onClick={() => props.setFiltre("Nouveaute")}>Nouveaute</div> 
                <div onClick={() => props.setFiltre("Femme")}>Femme</div> 
                <div onClick={() =>props.setFiltre("Homme")}>Homme</div>
                <div onClick={() =>props.setFiltre("Maison")}>Maison</div>
                <div>Rechercher</div>
            </div>

        </div>
    );
};

export default NavBarre;