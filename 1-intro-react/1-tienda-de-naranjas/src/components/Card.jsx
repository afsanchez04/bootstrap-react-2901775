<<<<<<< HEAD


export default function Card({tituloCard, descriptionCard, urlCard}) {
    return (
        <div className="card">
            <img src={urlCard} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{tituloCard}</h5>
                <p className="card-text">{descriptionCard}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
=======


export default function Card({tituloCard, descriptionCard, urlCard}) {
    return (
        <div className="card">
            <img src={urlCard} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{tituloCard}</h5>
                <p className="card-text">{descriptionCard}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
>>>>>>> ebb8c365cdc2c08671f7a8f06da0a4aabba3dd43
