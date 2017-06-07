import React from 'react';
import './styles/card.css';

export default class Card extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            isMouseHovering: false,
        };

    }

    handleMouseEnter() {
        this.setState({
            isMouseHovering: true
        });
    };

    handleMouseLeave() {
        this.setState({
            isMouseHovering: false
        });
    };

    handleOnClick() {
        this.props.history.push(`/detail/${this.props.id}`);
    };

    render() {
        const { isMouseHovering } = this.state;

        return (
            <div className="card"
                 onMouseEnter={() => this.handleMouseEnter()}
                 onMouseLeave={() => this.handleMouseLeave()}
                 onClick={() => this.handleOnClick()}>
                <div className="card-img-container">
                    <img className={isMouseHovering ? "card-img-hover" : "card-img"} src={`https://raw.githubusercontent.com/anhhtle/Founding-Speeches/master/public/img/thumbnails/${this.props.img}`} alt="thumbnail"/>
                    <span className={isMouseHovering ? "card-snippet-hover" : "card-snippet"} >"{this.props.snippet}"</span>
                    <p className={isMouseHovering ? "hidden" : "card-id"}>{this.props.id}</p>
                </div>
                <div className={isMouseHovering ? "card-info-hover" : "card-info"}>
                    <p className={isMouseHovering ? "hidden" : "card-date"}>{this.props.date}</p>
                    <p className={isMouseHovering ? "card-name-hover" : "card-name"}>{this.props.name}</p>
                </div>
            </div>
        );
    };
}