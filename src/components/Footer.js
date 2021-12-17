import React from 'react';
import '../Style/Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="FooterTop">
                <div>SERVICE A LA CLIENTELE</div>
                <div>LIVRAISON GRATUITE</div>
                <div>RETOURS GRATUITS</div>
                <div>MAGASINS</div>
            </div>
            <div className="FooterMid">
                <div>
                    <div className="petitTitre">Contactez-nous</div>
                    <div>Service à la clientèle</div>
                    <div>Assistant virtuel 24h/24</div>
                </div>
                <div>
                    <div className="petitTitre">Informations</div>
                    <div>Suivre ma commande</div>
                    <div>FAQ</div>
                </div>
                <div>
                    <div className="petitTitre">À propos</div>
                    <div>Notre histoire</div>
                    <div>Vision</div>
                </div>
                <div>
                    <div className="petitTitre">Trucs et astuces</div>
                    <div>Femme</div>
                    <div>Homme</div>
                    <div>Maison</div>
                </div>
            </div>
            <div className="FooterBottom">
                <div>©2021 La Maison HAUTSTORE. Tous droits réservés.</div>
            </div>
        </div>
    );
};

export default Footer;