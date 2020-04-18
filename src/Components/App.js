import React from 'react';
import Searchbar from './Searchbar';
import unsplash from '../apis/unsplash';
import ImageList from './ImageList';
class App extends React.Component{
    state={image:[]};
      value=async (e)=>{
        const res=await unsplash.get('/search/photos',{
            params:{query:e}
        });
        this.setState({image:res.data.results});
    };
    render(){
        return(
            <div style={{marginTop:'10px'}} className="ui container">
                <Searchbar fn={this.value}/>
                <ImageList images={this.state.image}/>
            </div>
        )
    };
};
export default App;