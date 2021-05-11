import React from 'react'

import $ from 'jquery'


class UserGithub extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    username: '',
    githubtUrl: '',
    avatarUrl: '',
    name:'',
    location:'',
    bio:'',
    public_repos:'',
    }
    }
    componentDidMount() {
    $.get(this.props.source, (result) => {
    console.log(result);
    const data = result;
    if (data) {
    this.setState({
    username: data.name,
    githubtUrl: data.html_url,
    avatarUrl: data.avatar_url,
    name:data.name,
    location:data.location,
    bio:data.bio,
    public_repos:data.public_repos
    });
    }
    });
    }
    render() {
    return (
    <div >
    <h3>{this.state.username}</h3>
    <img src={this.state.avatarUrl} />
    <a href={this.state.githubtUrl}>Github Link</a>.
    <h4>名字:{this.state.name}</h4>
    <h4>城市:{this.state.location} &nbsp; 個人簡介:{this.state.bio} &nbsp; 我的repositories:{this.state.public_repos}</h4>
    
    </div>
    );
    }
   }
   
   export default UserGithub