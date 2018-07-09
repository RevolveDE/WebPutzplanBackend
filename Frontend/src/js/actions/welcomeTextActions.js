import config from '../../config/main.config'

export function fetchWelcomeText() {  // --> ich mach jetzt in einen Request. Hier könnte man einen Ladebalken anzeigen --> jetzt sind wir ium Zustand fetching
    return {
        type: "FETCH_WELCOME_TEXT"
    }
}

export function setWelcomeText(welcomeText) {
    return {
        type: "FETCH_WELCOME_TEXT_FULFILLED",   // die Angabe des Type ist zwingend! --> Der Reducer braucht diese, damit er weiß, auf was er reagieren muss 
        payload: {   // JSON                    // jetzt ist der Request fertig --> nun wird der Reducer informiert und reagiert darauf
            welcomeText: welcomeText            // Die Daten - hier payload genannt - können auch anders benannt werden. 
        }
    }
}

export function welcomeTextRejected(error) {
    return {
        type: "FETCH_WELCOME_TEXT_REJECTED",
        payload: error
    }
}

export function welcomeTextSync(welcomeText) {
    return {
        type: "SET_WELCOME_TEXT",   // die Angabe des Type ist zwingend! --> Der Reducer braucht diese, damit er weiß, auf was er reagieren muss 
        payload: {   // JSON                    // Hier ist kein async Tast notwendig 
            welcomeText: welcomeText            // 
        }
    }
}

// Actions werden nacheinander getriggert
export function fetchText() {
    // Die Funtkion wird durch this.props.dispatch aufgerufen und ist daher in der Funktion enthalten
    return (dispatch) => {
        dispatch(fetchWelcomeText()); // Die Funktion fetchWelcomeText() setzt den Status auf FETCH_WELCOME_TEXT. Dies zeigt den Komponenten (die es interessiert), dass diese Daten gerade geholt werden, aber noch nicht da sind.  
        return fetch(config.BASE_URL + 'posts/2', {  // aus config.main.js in /config/ --> Befehle, BaseURL, Mit solchen Dateien lassen sich viele Parameter und Schnittstellen Specs sauber aufgeräumt verwalten. 
            method: 'GET',             // fetch ist eine Javascript Methode für REST calls 
            headers: {                 // Achtung: Internet Explorer unterstützt fetch von Haus aus nicht. Daher muss whatwg-fetch in der Package JSON eingebunden werden. Dann funktioniert es auch mit IE. Package.json "whatwg-fetch": "^2.0.2",
                'Accept': 'application/json',   // Die App ist nun im Zustand 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then(response => {   // response kommt zurück
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(json => {   // umwandeln zu json
                        dispatch(setWelcomeText(json.title));   // in der Funktion setWelcomeText wird die ACTION FETCH_WELCOME_TEXT_FULFILLED gesetzt. Alle Komponenten, die es interessiert, wissen nun dass die neuen Daten da sind und bekommen diese über die Props mit, da sich der State geändert hat. 
                    });

                } else {
                    // falls 400er kommt --> landet er in catch???
                    response.json().then(json => {
                        dispatch(welcomeTextRejected('Error on fetching')); // falls etwas schief ging, wird dies den Komponenten mitgeteilt (Beispielsweise könnte ein Log-Komponenten einen Fehler schreiben und eine View Komponente könnte den Fehler anzeigen).
                        throw error;
                    });
                }
            })
            .catch(
                error => {
                    error.json().then(json => {
                        dispatch(welcomeTextRejected('Error on fetching'));
                        throw error;
                    });
                }
            );
    };
}