import React, {Component} from 'react'
import Spaceship from "../Spaceship/Spaceship";

class SpaceshipList extends Component {
    state = {
        anotherheader: 'Some value',
        spaceships: [
            {id: 0, name: 'Spaceship1', crew: 150},
            {id: 1, name: 'Spaceship2', crew: 220},
            {id: 2, name: 'Spaceship3', crew: 30},
            {id: 3, name: 'Spaceship4', crew: 40},
            {id: 4, name: 'Spaceship5', crew: 50},
            {id: 5, name: 'Spaceship6', crew: 330},
            {id: 6, name: 'Spaceship7', crew: 120},
        ]
    };

    deleteAShip = (id) => {
        const copyofships = [...this.state.spaceships];
        console.log("Before deletion: " + JSON.stringify(copyofships))
        const indexofship = copyofships.findIndex(ship => ship.id === id)
        copyofships.splice(indexofship,1);
        console.log("After deletion: " + JSON.stringify(copyofships))
        this.setState({anotherheader: 'State has been set!!!',
        spaceships: [...copyofships]});
    }

    render() {
        const ships = this.state.spaceships.map(spaceship => (
            <Spaceship name={spaceship.name}
                       myclickhandler={this.deleteAShip.bind(this, spaceship.id)}
                       crew={spaceship.crew}  key={spaceship.id} id={spaceship.id} />
            )
        );

        return (
            <div>
                <h1>{this.props.myheader}</h1>
                <h2>{this.state.anotherheader}</h2>
                {ships}
            </div>
        )
    }

}

export default SpaceshipList;