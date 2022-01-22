import React,{useContext, useState} from 'react';
import firebase, { storage } from '../utils/firebase';
import 'firebase/compat/database';
import '../Style/Create.css';
import { UidContext } from "./UidContext";

const Create = () => {
    const [image, setimage] = useState(null);
    const [articleNom, setArticleNom] = useState('');
    const [description, setDescription] = useState('');
    const [prix, setPrix] = useState('');
    const [type, setType] = useState('Homme');
    const uid = useContext(UidContext);

    const createArticle = () => {

        
        if(image == null){
            return;
       }else{
           storage.ref(`/images/${image.name}`).put(image)
           .on("state_changed" , alert("success") , alert);
       }
        
        const articleDB = firebase.database().ref("articleDB");
        const article = {
            uid,
            articleNom,
            description,
            prix,
            type,
            imgUrl:image.name,
        };
        articleDB.push(article);

        //remetre a vide
        setArticleNom('');
        setDescription('');
        setPrix('');
    }

    
    const handeleImage = Event =>{
        if(Event.target.files[0]){
            setimage(Event.target.files[0]);
        }
    }

    const handleChange = Event =>{
        setArticleNom(Event.target.value);
    }

    const handleChangePrix = Event =>{
        setPrix(Event.target.value);
    }

    const handleChangeDes = Event =>{
        setDescription(Event.target.value);
    }

    const handleChangeType = Event =>{
        setType(Event.target.value);
    }

    return (
        <div className="Create">
        
            <div className="from">
                <div className="image-input">
                    <input type="file" className="file" onChange={handeleImage}/>
                </div>
                <div>
                    <input type="text"
                        placeholder="nom"
                        value={articleNom}
                        onChange={handleChange}
                    />
                </div>
               <div>
                    <textarea
                        placeholder="Descriptions"
                        value={description}
                        onChange={handleChangeDes}
                    />
               </div>

               <div className="select">
                    <select name="typeSelect" value={type} onClick={handleChangeType}>
                        <option value='Femme' >Femme</option>
                        <option value='Homme' >Homme</option>
                        <option value='Maison'>Maison</option>
                    </select>
                </div>

               <div>
                   <input type="number"
                        placeholder="prix"
                        value={prix}
                        onChange={handleChangePrix}
                    />
               </div>

                <div className="Ajouter">
                    <button onClick={createArticle}>Ajouter</button>
                </div>
                
            </div>
            
        </div>
    );
};
export default Create;