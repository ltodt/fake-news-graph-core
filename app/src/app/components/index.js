import React, {Component} from "react";
import * as d3 from "d3";
import {connect} from "react-redux";

import H1 from '../styled/H1';


class Index extends Component{
    render(){
        return(
            <div>
                <H1>Fake News Graph</H1>
            </div>
        );
    }
}

export default Index;