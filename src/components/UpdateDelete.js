import React, {useState,useContext} from 'react';
import firebase, { storage } from '../utils/firebase';
import '../Style/UpdateDelete.css';
import { UidContext} from "./UidContext";

const UpdateDelete = (props) => {
    const [update, setUpdate] = useState(false);
    const [articleNomUpdate, setArticleNomUpdate] = useState(null);
    const [descriptionUpdate, setDescriptionUpdate] = useState(null);
    const [prixUpdate, setPrixUpdate] = useState(null);
    const [typeUpdate, setTypeUpdate] = useState(null);
    const [imageUrl, setimageUrl] = useState(null);

    const uid = useContext(UidContext);
    storage.ref("images").child(props.item.imgUrl).getDownloadURL().then(url => setimageUrl(url));

    const uCheck = () => {
        if (props.item.uid === uid) {
            return true;
        }else{
            return false;
        }
    };
    uCheck();

    const updateItem = () => {
        let article = firebase.database().ref("articleDB").child(props.item.id);


        if (articleNomUpdate !== null) {
            article.update({
                articleNom:articleNomUpdate
            });
        }

        if (descriptionUpdate !== null) {
            article.update({
                description:descriptionUpdate
            });
        }

        if (prixUpdate !== null) {
            article.update({
                prix:prixUpdate
            });
        }

        if (typeUpdate !== null) {
            article.update({
                type:typeUpdate
            });
        }

        setUpdate(false);
    }

    const deleteItem = ()=>{
        let article = firebase.database().ref('articleDB').child(props.item.id);
        article.remove();
        uCheck();
    }

    const handleCliquePanie = () =>{

        if(props.panie.length < 1){
            let list2 = [];
            list2.push(props.item);
            props.setPanie(list2);
        }else{
            let list2 = [];
            list2.push(props.item, ...props.panie);
            props.setPanie(list2);
        }
    }

    return (
        <div>
            { update === false && (
                <div className="articleItem" onClick={handleCliquePanie}>
                    <div className="imageArt">
                        <img className="image" alt="img-test" src={imageUrl} />
                    </div>

                    <div className="infoArt">
                        <div className="nomArt">{props.item.articleNom}</div>
                        <div className="descriptionArt">{props.item.description}</div>
                        <div className="prixArt" >{props.item.prix} $</div>
                    </div>
                    
                </div>
            )}

            { update && (
                <div className="articleItem">
                    <div className="imageArtUp">
                        <img className="image" alt="img-test" src={imageUrl} />
                    </div>

                    <div className="infoArt">
                        <div className="nomArt">
                            <input
                                type="text"
                                defaultValue={props.item.articleNom}
                                onChange={(e) => setArticleNomUpdate(e.target.value)}
                            />
                        </div>

                        <div className="descriptionArt">
                            <textarea
                                defaultValue={props.item.description}
                                onChange={(e) => setDescriptionUpdate(e.target.value)}
                            />
                        </div>

                        <div className="selectType">
                            <select defaultValue={props.item.type} onClick={(e) => setTypeUpdate(e.target.value)}>
                                <option value='Femme' >Femme</option>
                                <option value='Homme' >Homme</option>
                                <option value='Maison'>Maison</option>
                            </select>
                        </div>

                        <div className="prixArt" >
                            <input
                                type="number"
                                defaultValue={props.item.prix}
                                onChange={(e) => setPrixUpdate(e.target.value)}
                            />
                        </div>

                        <div className="Valide">
                            <button onClick={updateItem}>Valide</button>
                        </div>
                    </div>
                    
                </div>
            )}

            {props.affButon !== false && uCheck() && (
                <div className="upButton">
                    <button onClick={() => setUpdate(!update)}>Modiffier</button>
                    <button onClick={deleteItem}>Suprimer</button>
                </div>
            )}
        </div>
    );
};

export default UpdateDelete;
