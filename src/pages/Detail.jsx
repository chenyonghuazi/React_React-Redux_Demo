import React from 'react'
//import { useParams, useMatch } from 'react-router-dom' //接收params
//import {useSearchParams,useLocation} from 'react-router-dom' //接收query
import {useLocation} from 'react-router-dom'

export default function Detail() {

    //接收params
    // const {id,title,content} = useParams()

    // 这个hook也可以返回params
    // const x = useMatch('/home/message/detail/:id/:title/:content')
    // console.log(x)


    //接收query 这个写法就很像useState()
    // const [search,setSearch] = useSearchParams()
    // const id = search.get('id')
    // const title= search.get('title')
    // const content = search.get('content')

    //这个hook也可以返回query
    // const x = useLocation()
    // console.log(x)

    //接收state
    const {state:{id,title,content}} = useLocation()
    
    return (
        <ul>
            
            <li>消息编号：{id}</li>
            <li>消息编号：{title}</li>
            <li>消息编号：{content}</li>
            {/* <li>
                <button onClick={()=>{setSearch('id=008&title=哈哈&content=嘻嘻')}}>点我更新query传参 url地址</button>
            </li> */}
        </ul>
    )
}
