// basic react component starting template
import React, { Component } from 'react';
import {connect} from "react-redux";

class SimpleComponent extends Component {
    render() {
        return (
            <div>
            <div>Simple Component </div>
            <p>{this.props.myName}</p>
            </div>

        );
    }
}
function mapStateToProps(state){
return {
    myName:state.login.name,
}
}

export default connect(mapStateToProps,{})(SimpleComponent);