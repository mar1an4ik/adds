import {PostAlone} from "./PostAlone";
import css from "./posts.module.css";
import {CreatePostForm} from "./CreatePostForm";
import React, {useState} from "react";
import style from "./PostAlone.module.css";

export const Postss=(props)=>{

    const [more, showMore] = useState(0);
    const setShowMore=(id)=>{
        showMore(id);
    };
    let posts=props.posts.map((post)=>{

        return (<PostAlone id={post.id} title={post.title} description={post.description}
                           date={post.date} deletePost={props.deletePost} changeTitle={props.changeTitle}
                            changeDescr={props.changeDescr} showMore={setShowMore}/>)
    })

    const findSimmiliars=()=>{
let mass=[];
        if (more-1<0) mass = props.posts[more].description.split(" ");
        else mass = props.posts[more-1].description.split(" ");
        let result=[];
result[0]=0;
        let top=[];
        for (let y=0;y<props.posts.length;y++){
            result[y+1]=0;
            for (let i=0;i<mass.length;i++){
                if (props.posts[y].description.includes(mass[i]) || props.posts[y].title.includes(mass[i]) ) result[y+1]++;
            }
        }
        for (let i=0;i<3;i++)
        {
            top[i] = result.indexOf(Math.max(...result));

            result[top[i]] = 0;
        }

        return top;

    };
const displaySimmiliars=()=>{
let top=findSimmiliars();

  let elems=props.posts.filter(element=>(element.id==top[0] || element.id==top[1] || element.id==top[2] ));

    let elem=elems.map((element=>{
        return (<PostAlone id={element.id} title={element.title} description={element.description} date={element.date}
                           deletePost={props.deletePost} changeTitle={props.changeTitle} changeDescr={props.changeDescr}
                           showMore={setShowMore}/>)
    }));
    return (<div>{elem}</div>);
}
    let similliars=<div>{displaySimmiliars()}</div>
    let ref=React.createRef()
    let elems;
    let elem;
    let elemNotFound=<div className={css.notFound}>Not found!</div>


    const searchTitle=()=>{
        props.searchTitle(ref.current.value);
    }

    const FindElems=()=>{

            elems  = props.posts.filter(elem=>elem.title.toUpperCase().includes(props.title.toUpperCase()));

        if (elems) {

            elem=elems.map((element=>{

                return (<PostAlone id={element.id} title={element.title} description={element.description} date={element.date}
                                   deletePost={props.deletePost} changeTitle={props.changeTitle} changeDescr={props.changeDescr}
                                    showMore={setShowMore}/>)
            }));


            return (<div>
                {(elem.length>0)?elem:elemNotFound}


            </div>)
        }

    };

    const showMoreStop=()=>{
        showMore(0);
    }

    return (<div className={css.main}>

        <CreatePostForm  addPost={props.addPost}/>

        <input type={"text"} onChange={searchTitle} ref={ref} placeholder={"Find title"}></input>
        <button  className={style.but} onClick={searchTitle}>SEARCH</button>
      {(more)
            ? <div> <div className={style.sim}>
        Перед вами ТОП-3 схожі оголошення,до даного:

            </div>
              <button className={style.but} onClick={showMoreStop}>Back</button>
              {similliars}
          </div>
            :(props.title)?FindElems():posts}



    </div>)

};
