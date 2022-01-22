import React from 'react';
import '../Style/panie.css';

const Panie = (props) => {
    //console.log(props.panie.map((item)=>{return item.articleNom}));

    const somme = () => {
        let sommeV=0;
        props.panie.map((item)=>(
            sommeV = sommeV + parseInt(item.prix)
        ))
        return sommeV
    }



    return (
    
        <div className='Panie'>
            
            {   
                props.panie.map((item)=>(
                    
                    <div className='artPanie' key={item + "H" + Math.random()}>
                        <div className='miniature'></div>
                        <div className='infoSomaire'>
                            <div className='nomArtPan'>{item.articleNom}</div>
                            <div className='prixS'>{item.prix} $</div>
                            <div className='supArt'>supprimer</div>
                        </div>
                        <div className='colorArt'></div>
                    </div>
                ))
            }
            <div className='somme'>
                TOTAL : {somme()} $
            </div>
            
        </div>
    );
};

export default Panie;