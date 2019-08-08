import React, { Component } from 'react';
import Wrapper from "./Wrap";
import axios from 'axios'

export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }

    onclick() {
        const navs = document.querySelectorAll('.navbar__wrapper');
        navs.forEach(nav => nav.classList.toggle('navbar__toggle--show'));
    }

    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        const response = await axios('http://team-green.local/api/v1/navbar', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = response.data.navbar;

        this.setState({
            data
        })
    }

    render() {
        const { data } = this.state;

        return (
            <div className="nav">
            <Wrapper>
                <nav className="navbar">
                    
                    <div className="navbar__link--toggle">
                        <button className="navbar__menu btn__cta" onClick={this.onclick}> MENU</button>
                    </div>
                    <div className="navbar__wrapper">
                            {data ? data.map((item, index) =>
                                <a href={item.link.url} className="navbar__link" key={index}>{item.title}</a>
                                ): <p>...</p>
                            }
                    </div>
                            <div><button className="navbar__donate btn__cta">Donate Now ></button></div>
                </nav>
            </Wrapper>
            </div>
        )
    }
}

