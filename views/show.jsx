// Show component
const React = require('react');
const Default = require('./layouts/Default');

function Show({ place }) {
    return (
        <Default>
            <h2>Show Page</h2>
            <a href={`/places/${place.id}/edit`}><button>Edit</button></a>
            <form action={`/places/${place.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
            <h3>{place.name}</h3>
            <p>{place.showEstablished()}</p>
            <img src={place.pic} alt={place.name} />
            <h4>Cuisines</h4>
            <p>{place.cuisines}</p>
            <li><a href="/places">GO HOME</a></li>
        </Default>
    )
}

module.exports = Show;
