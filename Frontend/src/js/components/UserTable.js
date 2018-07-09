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

    rowClicked(e, row) {
        this.setState({ users : this.state.users.map(usr => { 
        	usr.uuid == row.uuid ? usr.selected = true : usr.selected = false;
        	return usr
	        })
        })
    }
         


    /*  wichtige Tabellen Classes: siehe https://getbootstrap.com/docs/4.0/content/tables/
    	Alle diese Angaben kommen aus Bootstrap.css. GGf. können Tabellen auch an eigenes Design angepasst 
    	werden, Bootstrap.css kann auch als Vorlage dienen, wie es für die jeweiligen Optionen funktioniert.  

    	Header: verschiedene Optionen, z.B. thead-dark (schwarzer Hintergrund im Header)
    	table-dark: Schwarze Tabelle
    	table-striped : grau/weiß abwechselnd
    	table-bordered : dünne Linien zwischen den Zellen
    	table-hover: zeigt jene Zeile dunkler an, über der die Maus sich bewegt, kam bei Usertests gut an. 

    	Komprimierte Darstellung mit table-condensed oder table-sm

    	Verschiedene Zeilen-Hintergründe je nach Fall:
    	<tr class="table-primary">...</tr> table-secondary, table-success, table-danger, table-warning, table-info, table-light, table-dark

		<caption>Tabellenbeschreibung</caption> erzeugt einen beschreibenden Text unter der Tabelle (gut für lange Seiten mit Verweisen)

		table-responsive{-sm|-md|-lg|-xl} fügt bei Bedarf Scrollbalken hinzu. 

		Es lohnt sich, die CSS-Klassen anzuschauen, bevor unnötigerweise Funktionen ausprogrammiert werden, die in CSS schon enthalten sind. 
    */

    // { row.selected == true ? "success" : "default" }
    
    render() {
        return (
        		<div>
					<h2>Table</h2>            
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