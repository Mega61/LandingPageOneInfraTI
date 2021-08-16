import React, { Component } from 'react'
import './BannerPrincipal.css'
import img1 from './img/icono_kuma.png'

export default class BannerPrincipal extends Component {
    render() {
        return (
            <div id="complete_banner">
                <svg class="banner_rectangle">
                    <rect id="banner_rectangle" rx="0" ry="0" x="0" y="0" width="1920" height="110">
                    </rect>
                </svg>
                <img id="icono_kuma" src={img1} alt="KumaICON"></img>
                <div id="titulo_kuma">
                    <span>KUMA FORCE</span>
                </div>
                <div id="home_div">
                    <svg class="home_container">
                        <rect id="home_container" rx="16" ry="16" x="0" y="-20" width="122" height="120">
                        </rect>
                    </svg>
                    <div id="Home">
                        <span>Home</span>
                    </div>
                </div>
                <div id="about_div">
                    <svg class="about_container">
                        <rect id="about_container" rx="16" ry="16" x="0" y="-20" width="122" height="120">
                        </rect>
                    </svg>
                    <div id="About">
                        <span>About</span>
                    </div>
                </div>
                <div id="contact_div">
                    <svg class="contact_container">
                        <rect id="contact_container" rx="16" ry="16" x="0" y="-20" width="122" height="120">
                        </rect>
                    </svg>
                    <div id="Contact">
                        <span>Contact</span>
                    </div>
                </div>
            </div>
        )
    }
}
