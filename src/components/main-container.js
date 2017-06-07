import React from 'react';
import Card from './card';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import * as actions from '../actions/';

//const mainActions = bindActionCreators(main);

class MainContainer extends React.Component{
    constructor(props, context){
        super(props);

        //context.store.dispatch;
        //this.mainActions = bindActionCreators(actions, context.store.dispatch);
    }

    componentDidMount(){
        //this.props.actions.loadPresidents()
        //https://guarded-peak-56596.herokuapp.com/presidents
        fetch('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1', {mode: 'no-cors'})
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            });

        console.log('main-container did mount');
    };

    render(){
        const props = this.props;
        let cards;
        cards = props.presidents.map((president) => {
            return <Card history={props.history} img={president.img} date={president.date}
                name={president.name} snippet={president.snippet} key={president.id} id={president.id} />
        });

        return (
            <section className="main-container">
                <div className="main-grid">
                    {cards}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        //...state.main,
        history: props.history,
        presidents: state.presidents 
    }
}

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         actions: bindActionCreators(actions, dispatch),
//         dispatch
//     };
// };

export default connect(mapStateToProps)(MainContainer);