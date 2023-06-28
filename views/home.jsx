const React = require('react');
const Def = require('./default');

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="images\stripPic.jpeg" width="90%" height="60%" alt="stuck in traffic in Las Vegas"></img>
              <div>
                Photo by <a href="https://www.facebook.com/edward.james.manansala">E.Manansala</a>
                </div>
                </div>
                <br></br>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
        </main>
      </Def>
    )
  };
  
  module.exports = home;