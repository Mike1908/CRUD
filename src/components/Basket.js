import React from 'react';
import '../Style/Basket.css';

const Basket = (props) => {
   
    const {basket, setBasket} = props;

    const somme = () => {
        let sommeV=0;
        basket.map((item)=>(
            sommeV = sommeV + parseInt(item.prix)
        ))
        return sommeV
    }

    const deleteArticle = (item) =>{
        let myIndex = basket.indexOf(item);
        const list = basket;
        if (myIndex !== -1) {
            list.splice(myIndex, 1);
        }
        setBasket(list);
    }



    return (
    
        <div className='Panie'>
            
            {   
                basket.map((item)=>(
                    
                    <div className='artPanie' key={item + "H" + Math.random()}>
                        <div className='miniature'></div>
                        <div className='infoSomaire'>
                            <div className='nomArtPan'>{item.articleNom}</div>
                            <div className='prixS'>{item.prix} $</div>
                            <div className='supArt' onClick={deleteArticle(item)}>supprimer</div>
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

export default Basket;