import React, {useState} from 'react';
import Create from './Create';
import NavBarre from './NavBarre';
import Read from './Read';
import Footer from './Footer';
import Popup from './Popup';

const Main = () => {

    const [filtre, setFiltre] = useState("Nouveaute");
    const [affButon, setaffButon] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
      }

    return (
        <div className="main">
            <nav>
                <NavBarre setFiltre={setFiltre} setaffButon={setaffButon} affButon={affButon} setIsOpen={togglePopup}/>
                <h1>{filtre}</h1>
            </nav>

            <Read affButon={affButon} filtre={filtre}/>
            {isOpen && <Popup
                content={<Create/>}
                handleClose={togglePopup}
            />}
            
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Main;