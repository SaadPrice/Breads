const React = require('react');
const Default = require('./layouts/Default');

function Show({ bread }) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    );
    if (bread.comments.length) {
        comments = bread.comments.map((comment, index) => {
            return (
                <div key={index}>
                    <h4 className={comment.rant ? 'rant' : 'rave'}>{comment.rant ? 'Rant' : 'Rave'}</h4>
                    <p>{comment.content}</p>
                    <small>By {comment.author}</small>
                    <br />
                    <small>Rating: {comment.stars} stars</small>
                </div>
            );
        });
    }

    return (
        <Default>
            <h2>Show Page</h2>
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
            <h3>{bread.name}</h3>
            <p>{bread.hasGluten ? 'Contains Gluten' : 'Gluten-Free'}</p>
            <img src={bread.image} alt={bread.name} />
            <h4>Cuisines</h4>
            <p>{bread.cuisines}</p>
            <h4>Comments</h4>
            {comments}

            <h4>Add a Comment</h4>
            <form action={`/breads/${bread.id}/comment`} method="POST">
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

            <li><a href="/breads">GO HOME</a></li>
        </Default>
    );
}

module.exports = Show;



