import React from 'react';
import Radium from "radium";

const planetDetails = Radium((props) => {
    console.log(props)

    const mysearch = new URLSearchParams(props.location.search);
    let mysearchoutput = ''
    for (let param of mysearch.entries()) {
        mysearchoutput += '.... key is ' + param[0] + ' and the value is ' + param[1]
    }
    return (
        <div>
            <h1>PLANET DETAILS!!!!</h1>
            <h2>Search: {props.location.search}</h2>
            <h2>Search HR: {mysearchoutput}</h2>
            <h2>Hash: {props.location.hash}</h2>
            <div>
                This is the Details for planet with id: {props.match.params.planetid}
            </div>
        </div>
    )
})
export default planetDetails;