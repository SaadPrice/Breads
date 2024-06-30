const React = require('react');
const Default = require('../layouts/Default');

function Edit({ place }) {
    return (
        <Default>
            <h2>Edit place</h2>
            <form action={`/places/${place.id}?_method=PUT`} method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required defaultValue={place.name} />

                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" required defaultValue={place.city} />

                <label htmlFor="state">State</label>
                <input type="text" name="state" id="state" required defaultValue={place.state} />

                <label htmlFor="cuisines">Cuisines</label>
                <input type="text" name="cuisines" id="cuisines" required defaultValue={place.cuisines} />

                <label htmlFor="image">Picture URL</label>
                <input type="text" name="image" id="image" defaultValue={place.image} />

                <br />
                <input type="submit" />
            </form>
            <div className="backButton">
                <a href="/places"><button>Go Back To The Index</button></a>
            </div>
        </Default>
    );
}

module.exports = Edit;

