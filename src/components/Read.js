import React, {useState,useEffect} from 'react';
import firebase from '../utils/firebase';
import '../Style/read.css'
import UpdateDelete from './UpdateDelete';


/**
 * Affiche les items qui provine de BD firebase
 * @param {*} props 
 * @returns 
 */
const Read = (props) => {

    //la list des items
    const [articleList, setArticleList] = useState([]);

    useEffect(() => {
        const articleDB = firebase.database().ref('articleDB');

        articleDB.on('value',(snapshot) => {
            let previousList = snapshot.val();
            let list = [];
            
            for(let id in previousList){
                list.push({id, ...previousList[id]})
            }
            setArticleList(list);
        })
    },[]);

    const filtreAff = (item,index) =>{
      
        if (props.filtre === "Nouveaute") {   
            return <UpdateDelete 
                        item={item} 
                        key={index} 
                        affButon={props.affButon}
                        panie={props.panie}
                        setPanie={props.setPanie}
                    />
        }
        if (props.filtre === item.type){
            return <UpdateDelete 
                        item={item} 
                        key={index} 
                        affButon={props.affButon}
                        panie={props.panie}
                        setPanie={props.setPanie}
                    />
        }
        
    }

    return (
        <div className="read">
            {
               articleList.reverse() && 
               articleList.reverse().map((item, index) =>(
                   filtreAff(item,index)
               ))
            }
        </div>
    );
};

export default Read;