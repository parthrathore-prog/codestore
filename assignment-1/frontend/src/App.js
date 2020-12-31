import React, {Component} from 'react';
import axios from "axios";
// import moment from 'moment';

const sortTypes = {
  up: {
    class: 'sort-up',
    fn: (a, b) => a.numberOfSits - b.numberOfSits
  },
  down: {
    class: 'sort-down',
    fn: (a, b) => b.numberOfSits - a.numberOfSits
  },
  default: {
    class: 'sort',
    fn: (a, b) => a
  }
};

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      tables:[],
      currentSort: 'default',
      sortNOSClicked: false,
      sortTimeClicked:false,
    };
  }

  onSortChange = () => {
		const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'default';
		else if (currentSort === 'default') nextSort = 'down';

		this.setState({
			currentSort: nextSort
		});
	};

  componentDidMount(){
    this.refreshList();
  }

  refreshList=()=>{
    axios.get("http://localhost:8000/api/tables/").then(res=>this.setState({tables: res.data})).catch(err=>console.log(err));
  };

  render(){
    const { currentSort } = this.state;
    return(
      <React.Fragment>
        <button onClick={this.onSortChange}>
          Sort By Sits {(() => {
        switch (currentSort) {
          case "default":   return "Desc";
          case "up": return "Default";
          case "down":  return "Asce";
        }
      })()}
        </button>
        <table>
        {[...this.state.tables].sort(sortTypes[currentSort].fn).map(item=>(
          <tr>
            <td>{item.underName}</td>
            <td>{item.location}</td>
            <td>{item.numberOfSits}</td>
            <td>{item.reservationTime}</td>
          </tr>
        ))}
        </table>
      </React.Fragment>
    )
  }
}

export default App;