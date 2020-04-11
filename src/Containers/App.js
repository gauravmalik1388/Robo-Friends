import React ,{Component}from 'react';
import Cardlist from '../Components/cardlist';
import  {robots} from  '../Components/robots';
import Searchbox from  '../Components/searchbox'
import Scroll from  '../Components/scroll'

class App extends Component{
constructor (){
super()
this.state = {

	robots :[],
searchfield :''



}


}



componentDidMount() {

fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=> this.setState({robots:users}));




}


onSearchChanges=(event)=>
{


this.setState({searchfield:event.target.value});


//robots.name.toLowerCase()







}








render () {
const {robots,searchfield} = this.state;
const filteredRobots = robots.filter(robots =>{

return robots.name.toLowerCase().includes(searchfield.toLowerCase());

})

if(robots.length === 0){
return <h1>Loading</h1>

}


else{
return (
 
<div className='tc'>
<h1>Robo Friends</h1>
<Searchbox  onSearchchange={this.onSearchChanges} />
<Scroll>
<Cardlist robots={filteredRobots}/>
</Scroll>


</div>

	);
}
}


	




}


export default App;