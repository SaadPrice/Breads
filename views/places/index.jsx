const React = require('react');
const Default = require('../layouts/Default');

function Index({ places }) {
    return (
        <Default>
            <h2>Index Page</h2>
            <ul>
                {
                    places.map((place, index) => {
                        return (
                            <li key={index}>
                                <a href={`/places/${place.id}`}>
                                    {place.name}
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
            <div className="newButton">
                <a href="/places/new"><button>Add A New Place</button></a>
            </div>
        </Default>
    );
}

module.exports = Index;


