import React from 'react';
import "./Slides.scss";
import Carousel from 'react-material-ui-carousel'
import TestPic1 from '../../images/nature-scene-with-tent_1308-23330.jpg'
import { Paper } from '@material-ui/core';


// Top slide show
export default function Slides() : JSX.Element
{
    // Items for the slideshow
    var items = [
        {
            title: "Senior Show",
            description: "Take a look at my Senior Project!",
            imageURL: '../../images/nature-scene-with-tent_1308-23330.jpg',
            imageTEXT: "Test picture",
            icon: <Icon icon={TestPic1} className="icon"/>,
        },
        {
            title: "Photography",
            description: "Check out my photography work",
            imageURL: {TestPic1},
            imageTEXT: "Test picture",
            icon: <Icon icon={TestPic1} className="icon"/>,
        }
    ]
 
    return (
        <Carousel className="slide">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props : any) : JSX.Element {
    return (
        <Paper className="root">
            <div className="details">
                <div className="content">
                    <h2>{props.item.title}</h2>
                    <p>{props.item.description}</p>
                </div>
            </div>
            <div className="cover">
                {props.item.icon}
            </div>
        </Paper>
    )
}

const Icon = (props : any) => (
    <div>
        <img src={props.icon} alt="" className={props.className}/>
    </div>
);