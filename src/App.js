import React from 'react'
//import {Routes,Route} from 'react-router-dom'
import {NavLink,useRoutes} from 'react-router-dom'
import router from './routers'
import Header from './components/Header'

function App() {

  //根据是否点击得到 object {isActive：true or false}
  function computedClassName({isActive}){
    return isActive ? 'list-group-item atguigu' : 'list-group-item'
  }

  //注册路由表
  const element = useRoutes(router())

  return (
    <div>
      <div className="row">
        
          <Header/>
        
        <div className="row">
          <div className="col-xs-offset-2 col-xs-2">
            <div className="list-group">
              {/*路由跳转*/}
              <NavLink to="/about" className={(isActive)=>computedClassName(isActive)} >About</NavLink>
              <NavLink to="/home" className={(isActive)=>computedClassName(isActive)} end>Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*注册路由*/ }
                {/* <Routes>
                  <Route path="/about" element={<About/>} caseSensitive/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path='/' element={<Navigate to="/about"/>}/>
                </Routes>*/}

                {/*注册路由表*/ }
                {element}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
