import React, { Component } from "react";
import './Video.css';

export default class Button extends Component
{
    render(){
        return <div>
            <label>Hello, YT</label>
            <video width="320" height="240" controls>
            <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4"></source>
            

            </video>
        </div>
        

    }

}