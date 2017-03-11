//Include React

var React = require("react");

var Search = React.createClass({

  //add methods here:
  render: function(){
    return(
      <div className="container">

          <div className="row">
              <div className="col-sm-12">
                  <br />
                {/* First panel is for handling the search parameters*/}
                  <div className="panel panel-primary">
                      <div className="panel-heading">
                          <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
                      </div>
                      <div className="panel-body">

                          {/* Here we create an HTML Form for handling the inputs*/}
                          <form role="form">

                              {/* Here we create the text box for capturing the search term*/}
                              <div className="form-group">
                                  <label for="search">Search Term:</label>
                                  <input type="text" className="form-control" id="searchTerm"/>
                              </div>

                              {/* Here we capture the number of records that the user wants to retrieve */}
                              <div className="form-group">
                                  <label for="pwd">Number of Records to Retrieve:</label>
                                  <select className="form-control" id="numRecordsSelect">
                 <option value={1}>1</option>
                   {/* Setting the option for 5 as default */}
                 <option value={5} selected>5</option>
                 <option value={10}>10</option>
               </select>
                              </div>

                              {/* Here we capture the Start Year Parameter*/}
                              <div className="form-group">
                                  <label for="startYear">Start Year (Optional):</label>
                                  <input type="text" className="form-control" id="startYear"/>
                              </div>

                            {/* Here we capture the End Year Parameter*/}
                              <div className="form-group">
                                  <label for="endYear">End Year (Optional):</label>
                                  <input type="text" className="form-control" id="endYear"/>
                              </div>

                              {/* Here we have our final submit button */}
                              <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
                              <button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>

                          </form>
                     </div>
                  </div>
              </div>
          </div>
      </div>

    );
  }






});
module.exports = Search;
