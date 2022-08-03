import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
//import { useState } from 'react'
//import {Navigate} from 'react-router-dom'


export default function Home() {

    //const [sum, setSum] = useState(1)

    return (
        //示范 Navigate跳转功能
        // <div>
        //     <h3>我是Home的内容</h3>
        //     {sum === 2 ? <Navigate to="/about" replace={true}/> : <h4>当前sum的值是:{sum}</h4>}
        //     <button onClick={()=>setSum(2)}>点击我将sum变成2</button>
        // </div>

        //正常练习
        <div>
            <h2>Home组件内容</h2>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink to="news" className="list-group-item">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="message" className="list-group-item">Message</NavLink>
                    </li>
                </ul>
            </div>

            {/**指定路由组件呈现的位置 */}
            <Outlet/>
        </div>

    )
}
