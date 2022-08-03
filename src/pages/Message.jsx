import React,{useState} from 'react'
import {Link,Outlet,useNavigate} from 'react-router-dom'
export default function Message() {

    const [messages] = useState([
        {id:'001',title:'消息1',content:'楚河'},
        {id:'002',title:'消息2',content:'楚河'},
        {id:'003',title:'消息3',content:'楚河'},
        {id:'004',title:'消息4',content:'楚河'},
    ])

    //注册编程式跳转
    const navigate = useNavigate()

    //处理回调
    function showDetail(messageObj){
        // navigate('/about')
        navigate('detail',{
            replace:false,
            state:{
                id:messageObj.id,
                title:messageObj.title,
                content:messageObj.content
            }
        })
    }
    
    return (
        <div>
            <ul>
                {
                    messages.map((messageObj)=>{
                        return (
                            <li key={messageObj.id}>
                                {/* params发送参数方式 接收用useParams*/}
                                {/* <Link to={`detail/${messageObj.id}/${messageObj.title}/${messageObj.content}`}>{messageObj.title}</Link> */}

                                {/* query发送参数方式 接收用useSearchParams */}
                                {/* <Link to={`detail?id=${messageObj.id}&title=${messageObj.title}&content=${messageObj.content}`}>{messageObj.title}</Link> */}

                                {/* state传参 接收用useLocation */}
                                <Link 
                                    to="detail"
                                    state={{
                                        id:messageObj.id,
                                        title:messageObj.title,
                                        content:messageObj.content
                                    }}
                                >
                                    {messageObj.title}
                                </Link>

                                {/* 编程式跳转 */}
                                <button onClick={()=>showDetail(messageObj)}>查看详情</button>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            {/**指定路由组件的展现位置 */}
            <Outlet/>
        </div>
    )
}
