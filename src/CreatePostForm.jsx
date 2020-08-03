import React from 'react';
import style from "./PostAlone.module.css"

export const CreatePostForm=(props)=>{
    let refTitle=React.createRef();
    let refDescr=React.createRef();

    const submit=()=>{
        let nowDate = new Date();
        let nowDateString=""+nowDate;
        nowDateString=nowDateString.substring(0, 21);
        props.addPost(refTitle.current.value,refDescr.current.value,nowDateString)
        refDescr.current.value="";
        refTitle.current.value="";
    };



    return (<div>



    <div className={style.mainForm} >

        <br/>
        <div className={style.header2}>Create your add free!</div>
        <div>
        <textarea  ref={refTitle} className={style.textAreaTitle} rows={1} cols={50} placeholder={"Enter title"}/>
        </div>
        <div>
        <textarea  ref={refDescr} className={style.textArea} placeholder={"Enter Description"} />
        </div>
        <div>
        <button className={style.but}  onClick={submit}>Post</button>
        </div>



    </div>


    </div>)

};