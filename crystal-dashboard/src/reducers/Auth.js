const defaultUserInfo = {
  name: 'Demo User',
  image: 'https://picsum.photos/seed/picsum/200/300'
};

export default function reducer(state = {  user: defaultUserInfo}, action) {
  return state;
}

// class App extends React.Component {
//   constructor(props) {
//      super(props);
     
//      this.state = {
//         data: 'Initial data...'
//      }
//      this.updateState = this.updateState.bind(this);
//   };
//   updateState(e) {
//      this.setState({data: e.target.value});
//   }
//   render() {
//      return (
//         <div>
//            <Content myDataProp = {this.state.data} 
//               updateStateProp = {this.updateState}></Content>
//         </div>
//      );
//   }
// }
// class Content extends React.Component {
//   render() {
//      return (
//         <div>
//            <input type = "text" value = {this.props.myDataProp} 
//               onChange = {this.props.updateStateProp} />
//            <h3>{this.props.myDataProp}</h3>
//         </div>
//      );
//   }
// }
// export default App;