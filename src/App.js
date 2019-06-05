import React, { Component } from 'react';
//import Header from './components/Header';
import About from './components/About';
//import Services from './components/Services';
//import Portfolio from './components/Portfolio';
import Feature from './components/Feature';
import Contacts from './components/Contacts';
//import Footer from './components/Footer';
import Greet from './components/Greet';
import Example from './components/Example';
import Nojsx from './components/Nojsx';
import Classcomponent from './components/Classcomponent';
import Statetest from './components/Statetest';
import Destructuringprops from './components/Destructuringprops';
import Destructuringpropclasscomponent from './components/Destructuringpropclasscomponent';
import Eventhandle from './components/Eventhandle';
import ClassEventhandle from './components/EventhandlClassComponent';
import ClassEventbind from './components/BindEventClass';
import Parentcomponent from './components/Parentcomponent';
import Conditional from './components/conditional.js';
import Listrendering from './components/Listrendering.js';
import Form from './components/Form.js';
import Parentpurecomponent from './components/Purecomponent.js';
import UsingAjax from './components/usingAjax.js'


class App extends Component {

  constructor(){
    super();
    this.state = {
      data : 
      [
      {
       "id" : 1 ,
       "name":'ravi',
       "age": 10

     },
     {

      "id" :2,
      "name" : 'Akash',
      "age":10

    },

    {
     "id" :3,
     "name": 'hasan',
     "age" :20

   }

   ]
 }
}

render() {
  return (
    <div className="App">
   

     <Parentpurecomponent></Parentpurecomponent>
    
    <Form></Form>
    <Listrendering></Listrendering>
            <Conditional></Conditional>
            <Parentcomponent></Parentcomponent>
            <ClassEventbind></ClassEventbind>
            <ClassEventhandle></ClassEventhandle>
            <Eventhandle></Eventhandle>
            <Destructuringprops   name="Props can be destuructured  in functional component as removing the this.props from jsx and passing props as the parameter or addersing as constant in components  "></Destructuringprops>
            <Destructuringpropclasscomponent   name = "Destructuringprop in class component "></Destructuringpropclasscomponent>
            <Classcomponent   name = "you have learnt "></Classcomponent>
            <Nojsx></Nojsx>
            <Example></Example>
            <Statetest></Statetest>
            <Greet name = "Vijay learn functional coponent props" heroname ="saktimaan">
                <h2>This is children props.</h2>
             </Greet>
            <Greet name = "Ravi learns props reuseability" heroname ="hanumaan">
                <button name =" press this child and get using props.children">press this child and get using props.children</button>
            </Greet>
            <Greet name = "props are immutable" heroname ="and its value cannot be changed."></Greet>

<UsingAjax></UsingAjax>


   {/* <Header></Header>
       //<About></About>
       //<Services></Services>
       //<Portfolio></Portfolio> 
       //<Feature></Feature>
       //<Contacts></Contacts>
       //<Footer></Footer>*/}
    </div>
    );
}
}

export default App;
