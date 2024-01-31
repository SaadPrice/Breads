const React =  require('react')
const Default = require('./layouts/Default')

function Index ({breads})  {
    return (
      <Default>
        <h2>Index Page</h2>
        {/*This is a JSX comment. */}
        {/*<p>I have {breads[0].name} bread!</p> */}
        <ul>
            {
               breads.map((bread, index)=> {
                return (
                    <li key={index}>
                    <a href={`/breads/${bread.id}`}>
                        {bread.name}
                    </a>
                </li>
                )
               }) 
            }
        </ul>
        <div className="newButton">
          <a href="/breads/new"><button>Add A New Bread</button></a>
        </div>
      </Default>
    )
}


module.exports = Index