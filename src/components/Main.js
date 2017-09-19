import React from 'react';
import TopBar from 'components/TopBar';
import TodoComponent from 'components/Todos/TodoComponent'
import Footer from 'components/Footer';
class AppComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="main grey lighten-3">
        <TopBar />
        <TodoComponent />
        <Footer />
      </div>
    );
  }
}

export default AppComponent;
