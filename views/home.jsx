const React = require('react');
const Def = require('./default');

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="images\roads.jpg" width="700" height="500" alt="road to nowhere"></img>
              <div>
                Photo by <a href="https://unsplash.com/@jplenio">Johannes Plenio</a> on <a href="https://unsplash.com/photos/2TQwrtZnl08">Unsplash</a>
                </div>
                </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
        </main>
      </Def>
    )
  };
  
  module.exports = home;