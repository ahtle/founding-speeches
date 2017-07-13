import React from 'react';
import './card.css';
import './card-responsive.css';

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
        this.props.history.push(`/detail/${this.props.presId}`);
    };

    render() {
        const props = this.props;
        const { isMouseHovering } = this.state;

        return (
            <div className="card"
                 onMouseEnter={() => this.handleMouseEnter()}
                 onMouseLeave={() => this.handleMouseLeave()}
                 onClick={() => this.handleOnClick()}>
                <div className="card-img-container">
                    <img className={isMouseHovering ? "card-img-hover" : "card-img"} src={props.img} alt="thumbnail"/>
                    <span className={isMouseHovering ? "card-snippet-hover" : "card-snippet"} >"{props.snippet}"</span>
                    <p className={isMouseHovering ? "card-id-hover" : "card-id"}>{props.presId}</p>
                </div>
                <div className={isMouseHovering ? "card-info-hover" : "card-info"}>
                    <p className={isMouseHovering ? "hidden" : "card-date"}>{props.startYear} - {props.endYear}</p>
                    <p className={isMouseHovering ? "card-name-hover" : "card-name"}>{props.name}</p>
                </div>
            </div>
        );
    };
}