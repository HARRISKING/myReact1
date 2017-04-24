import React from 'react';
//定义Welcome作为React.Component的子类，因此要引用react。

// 方法一：
class Welcome extends React.Component{
  // 定义一个类名叫Welcome,这个类作为React.Component的子类
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
    setInterval(()=>{
      this.setState({
        date:new Date()
      })
    })
  }
  render(){
    // return <h1>Hello,Component</h1>;
    // return <h1>Hello,{this.props.name}</h1>;

    return (
      <div>
        <h1>Hello,{this.props.name}</h1>
        <h2>{this.state.date.toString()}</h2>
      </div>
    )

  }
}

// // 方法二：
// function Welcome(props){
//   return <h1>Hello,{props.name}</h1>;
// }

export default Welcome
// export default 用来导出一个值或者需要模型的一个返回值，这里导出Welcome的返回值；
// 这里是将子类Welcome导出给index.js引用
