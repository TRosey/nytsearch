//Include React
var React = require("react");

//Here we include all of the sub-components
var Search = require("./panels/Search");
var Results = require("./panels/Results");
// var Saved = require("./panels/Saved");

//This is the main component, Main.
var Main = React.createClass({

  render: function(){
    return(
    
      <div>
        <div className="jumbotron" >
      		<h1 className="text-center"><strong>New York Times Search</strong></h1>
      	</div>
        {/*will give function that I will be writing for the main.*/}
          <Search />
          <Results />
      </div>
    );
  }

});
module.exports = Main;
