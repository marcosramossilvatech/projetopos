import React from 'react';
import Main from '../../components/Main';
import HomeForm from './HomeForm';
import api from "../../services/api";
const headerProps = {
    icon: 'home',
    title: 'Home',
    subtitle: 'Home'
}
var base = '/home';
const initialState = {   
    os: []
}
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = { ...initialState }
        this.load = this.load.bind(this)
    }
    render() {
        return (
            <Main {...headerProps}>
                <HomeForm os={this.state.os}
                    load={this.load}
                />
            </Main>
            
        )
    }
    componentWillMount() {
        api
        .get(base)
        .then((response) => this.setState({ os: response.data }))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });  
    }
    load(home) {
        this.setState({ home })
    }
}