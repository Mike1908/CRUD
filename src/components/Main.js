import React, {useState} from 'react';
import Create from './Create';
import NavBarre from './NavBarre';
import Read from './Read';
import Footer from './Footer';
import Popup from './Popup';
import Panie from './Panie';

const Main = () => {

    const [filtre, setFiltre] = useState("Nouveaute");
    const [affButon, setaffButon] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [panie,setPanie] = useState([]);
    const [isPanie, setIsPanie] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
    const togglePopupPanie = () => {
        setIsPanie(!isPanie);
      }
    return (
        <div className="main">
            <nav>
                <NavBarre 
                    setFiltre={setFiltre} 
                    setaffButon={setaffButon} 
                    affButon={affButon} 
                    setIsOpen={togglePopup}
                    panie={panie}
                    setIsPanie={togglePopupPanie}
                />
                <h1>{filtre}</h1>
            </nav>

            <Read 
                affButon={affButon} 
                filtre={filtre}
                panie={panie}
                setPanie={setPanie}
            />
            {isOpen && <Popup
                content={<Create/>}
                handleClose={togglePopup}
            />}

            {isPanie && <Popup
                content={<Panie/>}
                handleClose={togglePopupPanie}
            />}
            
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Main;