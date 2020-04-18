import React from 'react';
class Searchbar extends React.Component{
    state={
        searchterm:''
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.fn(this.state.searchterm)
        
    }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form " onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label>Image Search</label>
                    <input type="text" 
                     value={this.state.searchterm}
                     onChange={(event)=>{this.setState({searchterm:event.target.value})}}/>
                    </div>
                </form> 
            </div>
        )
    }

};
export default Searchbar;