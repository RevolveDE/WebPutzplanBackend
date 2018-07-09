import React from"react";

export default class UserTable extends React.Component {
	constructor() {
		super();
		const someUsers = [{
		  name: "Müller",
		  age : 45,
		  id: "mu",
		  uuid : "U8383",
		}, {
		  name: "Maier",
		  age: 23,
		  id: "ma",
		  uuid: "U2343",
		}, {
		  name: "Huber",
		  age: 60,
		  id: "hu",
		  uuid: "U5353",
		}];

		// jeder "Reihe wird ein selected Element für die Tabellen hinzugefügt"
		for (let i=0; i<someUsers.length;i++) {
			i == 0 ? someUsers[i].selected = true : someUsers[i].selected = false;  
		}

 		this.state = 
 		{
  			users: someUsers
 		};
	}

    buttonClicked(e, uuid) {
        console.log(uuid);
    }

	filterStringChanged(e) {
        console.log(e.target.value);
        // Filter Data
    /*    this.setState({ users : this.state.users.find(usr => { 
        	usr.uuid == row.uuid ? usr.selected = true : usr.selected = false;
        	return usr
	        })
        }) */
    }

    rowClicked(e, row) {
        this.setState({ users : this.state.users.map(usr => { 
        	usr.uuid == row.uuid ? usr.selected = true : usr.selected = false;
        	return usr
	        })
        })
    }
         
    
    render() {
        return (
        		<div>
					<h2>Table</h2>
					  <div class="input-group">
    					<span class="input-group-addon"><i class="fa fa-search"></i></span>
    					<input id="searchTable" type="text" onChange={this.filterStringChanged} name="Suche" placeholder="Suche" />
  					  </div>     
					  <table class="table table-striped table-hover">
					    <thead>
					      <tr>
					        <th>ID</th>
					        <th>Name</th>
					        <th>Age</th>
					        <th>Btn</th>
					      </tr>
					    </thead>
					    <tbody> 
					      { this.state.users.map( row => 
								  <tr onClick={(e) => this.rowClicked(e, row)} class= { row.selected == true ? "table-success" : "table-default"} >
								    <td>{row.id}</td>
								    <td>{row.name}</td>
								    <td>{row.age}</td>
								    <td><button type="button" class="btn btn-xs btn-primary" onClick={(e) => this.buttonClicked(e, row.uuid)}>Click</button> </td>
								  </tr>
								) 
					      }
					    </tbody>
					  </table>                
			  </div>
        );
    }
}