const React = require('react');
const Default = require('./layouts/Default');

function New({ message }) {
    const currentYear = new Date().getFullYear();
    return (
        <Default>
            <h2>Add a new place</h2>
            {message && <p style={{color: 'red'}}>{message}</p>}
            <form action="/breads" method="POST">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                />
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    required
                />
                <label htmlFor="state">State</label>
                <input
                    type="text"
                    name="state"
                    id="state"
                    required
                />
                <label htmlFor="cuisines">Cuisines</label>
                <input
                    type="text"
                    name="cuisines"
                    id="cuisines"
                    required
                />
                <label htmlFor="image">Picture URL</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue="http://placekitten.com/250/250"
                />
                <br />
                <input type="submit"/>
            </form>
            <div className="backButton">
                <a href="/breads"><button>Go Back To The Index</button></a>
            </div>
        </Default>
    );
}

module.exports = New;





