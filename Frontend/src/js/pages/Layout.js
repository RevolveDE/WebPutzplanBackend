import React from "react"
import {connect} from "react-redux"
import {HashRouter, Route, Link} from 'react-router-dom';

import {setWelcomeText, fetchText} from "../actions/welcomeTextActions"
import NavigationBar from "../components/NavigationBar"
import Header  from "../components/Header"

import Index from "../pages/Index"
import Initial from "../pages/Initial"


// Require scss files
require('../../stylesheets/_all.scss');

// so kann die Komponente auf die Reducer hören und injiziert this.props.dispatch(ACTION)
@connect((store) => {  // @connect (mit Annotation) : Wenn sich irgendwas in diesem Store ändert, was für dieses Komponente relevant ist, wird dies mit dieser Methode behandelt. Für alle, die mit store connected sind, werden die reducer aufgerufen 
    return {
        welcomeText: store.welcomeText.welcomeText // welcome 2x, da reducers in welcomeText enthalten. Dann von dort aus Zugriff auf /recusers/welcomeTextReducer.js
    };
})

export default class Layout extends React.Component {
    // Hinweis zum Lebenszyklus einer Komponente
    // Constructor-->componentWillMount-->render()-->componentDidMount
    // Update, wenn neue Storeänderungen da sind: componentWillReceiceProps --> Props vom jetzigen Schirtt und  vom nächsten Zustand (ein Vergleich von altem und neuem Zustand wird ermöglicht). 
    // shouldComponentsUpdate --> wenn false zurückgegeben wird, dann wird die Komponenten nicht upgedated. Beispiel: REST Call bei dem was zurück kommt, mit dem die Komponente nichts anfangen kann oder Daten ungültig sind.  
    // componentWillUpdate --> wird aufgerufen, bevor der Render Prozess anfängt. Hier können Daten vor der Anzeige manipuliert werden.
    // render --> neu Zeichnen der Komponententeile, die die Änderung betrifft (oder beim Initialisieren der Komponenten komplettes Neuzeichnen)
    // componentDidUpdate --> wird nach dem Rendern aufgerufen 
    // componentWillUnmount --> wenn Komponente vom DOM entfernt wird oder freigegeben wird. 

    // OnCreate bei Android
    componentWillMount() {
        console.log("Layout: componentWillMount...");
        // mit @connect steht this.props.dispatch zur Verfügung gestellt. 
        // kommt aus der Redux Library 
        this.props.dispatch(setWelcomeText('Hello World!'));   // --> Funktion importiert oben setWelcomeText aus welcomeTextActions. --> beim Aufruf von dispatch wird diese Actiona ausgeführt
    }

    // wird aufgerufen, bevor es updated wird 
    // componentWillUpdate() {
    //    console.log("Layout: Will update")
    // }

    fetchTextFromServer() {
        this.props.dispatch(fetchText()); // ruft eine Funktion in den Actions auf, Funktion ist oben eingebunden fetchText} from "../actions/welcomeTextActions". Die Action wird ausgelöst, wenn der Button geklickt wurde (siehe JSX unten). Diese Action löst ein asynchronen Task auf.
    }

    setTextFromEditField() {
         this.props.dispatch(fetchText()); 
    }

    // view Did Load
    render() {
        const {welcomeText} = this.props;   // Kurzform: Javascript statt "const welcomeText = this.pros.welcomeText". Nimmt die Bezeichnung welcomeText aus this.props und erzeugt eine const mit dem Namen welcomeText 
        const {location} = this.props; // this.props ist ein Attribut der React.Component  --> Von außen werden die Daten überschrieben. 

        const containerStyle = {
            marginTop: "60px"
        };

        return (  
            <HashRouter>  
                <div>
                    <NavigationBar location={location}/>
                    <div class="container" style={containerStyle}>
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <h1>{welcomeText.welcomeText}</h1>       {/* reducer (Store).welcomeText Rendern der neuen Info*/}
                                <button onClick={this.fetchTextFromServer.bind(this)}> {/* Aufruf der Funktion oben --> bind(this) --> binden an diese Komponenten, sonst ist es global --> unbedingt notwendig! */}
                                    Fetch another text
                                </button>
                                <Header />  

                                <Route exact path="/index" component={Index}/>   {/* Neuer UI Router */}
                                <Route exact path="/initial" component={Initial}/>
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}