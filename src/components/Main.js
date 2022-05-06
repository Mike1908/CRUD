import React, {useState} from 'react';
import Create from './Create';
import NavBarre from './NavBarre';
import Read from './Read';
import Footer from './Footer';
import Popup from './Popup';
import Basket from './Basket';

const Main = () => {

    const [filtre, setFiltre] = useState("Nouveaute");
    const [renderButon, setrenderButon] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [basket,setBasket] = useState([]);
    const [isBasket, setIsBasket] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
    const togglePopupBasket = () => {
        setIsBasket(!isBasket);
      }
    return (
        <div className="main">
            <nav>
                <NavBarre 
                    setFiltre={setFiltre} 
                    setrenderButon={setrenderButon} 
                    renderButon={renderButon} 
                    setIsOpen={togglePopup}
                    basket={basket}
                    setIsBasket={togglePopupBasket}
                />
                <h1>{filtre}</h1>
            </nav>

            <Read 
                renderButon={renderButon} 
                filtre={filtre}
                basket={basket}
                setBasket={setBasket}
            />
            {isOpen && <Popup
                content={<Create/>}
                handleClose={togglePopup}
            />}

            {isBasket && <Popup
                content={<Basket basket={basket} setBasket={setBasket}/>}
                handleClose={togglePopupBasket}
            />}
            
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Main;