import React, { Fragment } from 'react'
import {connect} from 'react-redux'


//交互组件
function App(props) {
  return (
    <Fragment>
      <div>{props.msg}</div>
      <button onClick={props.changeMsg}>修改</button>
    </Fragment>
  )
}

//容器组件
const mapStateToProps = (state) =>{
  return {
    msg: state.msg
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    changeMsg: ()=>{
      dispatch( {type:'changeMsgFn',value:'hallo world'} )
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App) 
