//include react
var React = require("react");

var Results = React.createClass({
  //add methods here:
  render: function(){
    return(

          <div className="container">

              <div className="row">
                  <div className="col-sm-12">
                      <br /> {/*This panel will initially be made up of a panel and wells for each of the articles retrieved*/}
                      <div className="panel panel-primary">

                          {/*Panel Heading for the retrieved articles box*/}
                          <div className="panel-heading">
                              <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
                          </div>

                          {/*This main panel will hold each of the resulting articles*/}
                          <div className="panel-body" id="wellSection">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
  }

});
module.exports = Results;
