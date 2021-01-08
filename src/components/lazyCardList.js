import React, { Suspense } from "react";

function CardList(props) {

    const Card = React.lazy(() => import("./card"))

    const cards = props.data.map(item => item.extraAssets.charaGraph.ascension[1] !== undefined ?
        <Card key={item.collectionNo} data={item}/>: 
        null
    );

    return (
        <div className="CardList">
            {cards.map(card => {
                
                return (
                <Suspense fallback={<div className="card">loading...</div>}>
                    {card}
                </Suspense>
                )
            })}
        </div>
    )
}

export default CardList