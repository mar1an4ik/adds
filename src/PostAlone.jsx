import React, { useState } from 'react';
import  css from "./PostAlone.module.css"
import {Info} from "./Info";





export const PostAlone=(props)=>{

    const [showInfo, setInfo] = useState(0);



    const Posts=(props)=>{
        const [editTitle, setTitle] = useState(0);
        const [editDescr, setDescr] = useState(0);
        const [readyTitle,setNewTitle]=useState(props.title)
        const [readyDescr,setNewDescr]=useState(props.description)
        const ref=React.createRef()
        const ref2=React.createRef()
        const deletePost=()=>{
            props.deletePost(props.id)
        }

        const showDetails=()=>{
            props.setInfo(1);

        }
        const updateTitle=()=>{
            props.changeTitle(props.id,readyTitle);

        }
        const updateDescr=()=>{
            props.changeDescr(props.id,readyDescr);

        }
        const editTitleFunc=()=>{

                setTitle(!editTitle);
            if (!editTitle) return 0; else updateTitle();
        }
        const editDescrFunc=()=>{
                setDescr(!editTitle);
            if (!editDescr) return 0; else updateDescr();
        }
        const newTitle=()=>{
                setNewTitle(ref.current.value);
        }
        const newDescr=()=>{
                setNewDescr(ref2.current.value);
        }
        const showMore2=()=>{

            props.showMore(props.id)

        }

        const buttonEdit=    <button onClick={()=>{editTitleFunc();editDescrFunc()}} >Edit</button>
        const buttonConfirmEdit=<button onClick={()=>{editTitleFunc();editDescrFunc()}}>Confirm</button>



        const editTitleDiv=<div><textarea  className={css.textareaTitle} cols={40}  ref={ref} value={readyTitle} onChange={newTitle} /></div>;
        const editDescrDiv=<div><textarea  className={css.textareaDescr} cols={90} rows={10} ref={ref2} value={readyDescr} onChange={newDescr}  /></div>;
        const [shortDescr,setNewShortDescr]=useState(props.description)



        return (<div className={css.main} >
            <div>#{props.id}</div>

            {editTitle?editTitleDiv:<div className={css.title} >    {props.title}  </div>}
            {editDescr?editDescrDiv:<div className={css.descr} >    {props.description.substring(0,230)+"..."}  </div>}

            <button onClick={deletePost}>Delete</button>
            {editTitle?buttonConfirmEdit:buttonEdit}

            <button onClick={showDetails}>Details</button>
            <button onClick={showMore2}>Show similiar</button>

        </div>)

    };


    return(<div>
        {showInfo?<Info id={props.id} title={props.title}
                        description={props.description} date={props.date} setInfo={setInfo}/>

                        : <Posts id={props.id} title={props.title}
                                  description={props.description} date={props.date}
                                  setInfo={setInfo} deletePost={props.deletePost} changeTitle={props.changeTitle}
                                 changeDescr={props.changeDescr} showMore={props.showMore}/>}

        </div>)






};