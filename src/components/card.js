import React from "react"

function Card(props) {
    return (
        <div className="card">
            <img width="200px" src={props.data.extraAssets.charaGraph.ascension[1]} alt="placeholder"/>
            <h3 className="sname">{props.data.name}</h3>
            <h2 className="sclass">{props.data.className}</h2>
        </div>
    )
}

export default Card