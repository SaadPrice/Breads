const React = require('react');
const Default = require('../layouts/Default');

function Show({ place }) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    );

    if (place.comments.length) {
        comments = place.comments.map((comment, index) => {
            return (
                <div key={index}>
                    <h4 className={comment.rant ? 'rant' : 'rave'}>{comment.rant ? 'Rant' : 'Rave'}</h4>
                    <p>{comment.content}</p>
                    <small>By {comment.author}</small>
                    <br />
                    <small>Rating: {comment.stars} stars</small>
                    <form action={`/places/${place.id}/comments/${comment.id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete Comment" />
                    </form>
                </div>
            );
        });

        const sumRatings = place.comments.reduce((total, comment) => total + comment.stars, 0);
        const averageRating = Math.round(sumRatings / place.comments.length);
        const stars = '★'.repeat(averageRating);

        var ratingDisplay = (
            <h3>
                {stars}
            </h3>
        );
    } else {
        var ratingDisplay = (
            <h3 className="inactive">
                Not yet rated
            </h3>
        );
    }

    return (
        <Default>
            <h2>Show Page</h2>
            <a href={`/places/${place.id}/edit`}><button>Edit</button></a>
            <form action={`/places/${place.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE" />
            </form>
            <h3>{place.name}</h3>
            <p>{place.hasGluten ? 'Contains Gluten' : 'Gluten-Free'}</p>
            <img src={place.image} alt={place.name} />
            <h4>Cuisines</h4>
            <p>{place.cuisines}</p>
            <h4>Comments</h4>
            {comments}
            {ratingDisplay}
            <h4>Add a Comment</h4>
            <form action={`/places/${place.id}/comment`} method="POST">
                <label htmlFor="author">Author</label>
                <input type="text" name="author" id="author" />

                <label htmlFor="content">Content</label>
                <textarea name="content" id="content"></textarea>

                <label htmlFor="stars">Star Rating</label>
                <input type="number" name="stars" id="stars" step="0.5" min="1" max="5" />

                <label htmlFor="rant">Rant</label>
                <input type="checkbox" name="rant" id="rant" />

                <br />
                <input type="submit" value="Add Comment" />
            </form>

            <li><a href="/places">GO HOME</a></li>
        </Default>
    );
}

module.exports = Show;

