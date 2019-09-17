import React, {Component} from 'react'
import Spaceship from "../Spaceship/Spaceship";

class SpaceshipList extends Component {
    state = {
        anotherheader: 'Some value'
    }

    render() {
        return (
            <div>
                <h1>{this.props.myheader}</h1>
                <h2>{this.state.anotherheader}</h2>
                <Spaceship name='Hawk' crew='230'>Slightly damaged</Spaceship>
                <Spaceship name='Falcon' crew='430'>Brand new</Spaceship>
                <Spaceship name='Blackbird' crew='100'>Needs refueling</Spaceship>
                <Spaceship name='Stork' crew='50'/>
                <Spaceship name='Parakite' crew='1000'/>
                <Spaceship name='Parrot' crew='55'/>
            </div>
        )
    }

}

export default SpaceshipList;