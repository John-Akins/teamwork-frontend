import React, {Component} from 'react';

class Welcome extends Component {
    constructor(props){
        super(props);
        this.M = this.props.M
    }

    componentDidMount() {    
        const elem = document.querySelector('.carousel');
        const instance = this.M.Carousel.init(elem, { fullWidth: false });
        this.intervalID = setInterval(()=>{
            instance.next()
        },3000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <div className="carousel carousel-slider  center">
                 <div className="carousel-item grey darken-3 white-text" href="#one!">
                    <h2>Teamwork</h2>
                    <h4 className="white-text"> Collaborate with co-workers</h4>
                    <h5 className="white-text"> Foster team progress</h5>
                </div>
                <div className="carousel-item  blue-grey darken-1 white-text" href="#two!">
                    <h2>Teamwork</h2>
                    <h4 className="white-text">Communicate with co-workers</h4>
                    <h5 className="white-text">Be in the know</h5>
                </div>
                <div className="carousel-item teal darken-1 white-text" href="#three!">
                    <h2>Teamwork</h2>
                    <h4 className="white-text">Together Everyone Achieves More</h4>
                </div>
            </div>
        )
    }
}

export default Welcome;
