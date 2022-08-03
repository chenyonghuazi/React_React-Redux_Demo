import React from 'react'
import {Navigate} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home' 
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

//路由表
export default function exportRouter(){
    
    return [
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/home',
            element:<Home/>,
            children:[
                {
                    path:'news',
                    element:<News/>
                },
                {
                    path:'message',
                    element:<Message/>,
                    children:[
                        {
                            //useParams接收和 detail/id/title/content发送时的路径
                            // path:'detail/:id/:title/:content',

                            //useSearchParams接收和 detail?id=xx&title=xx&content=xx发送时的路径
                            path:'detail',
                            element:<Detail/>
                        }
                    ]
                }
            ]
        },
        {
            path:'/',
            element:<Navigate to="/about"/>
        }
    ]
}