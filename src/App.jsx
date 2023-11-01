import {Fragment, useState} from "react";
import './index.css'
import Header from "./components/Header/Header";
import CoreConcepts from "./components/Core-concepts/CoreConcepts";
import Examples from "./components/Example/Examples";


function App() {



    return (
        <>
            <Header/>
            <main>
                <CoreConcepts />
                <Examples/>
                <h2>Time to get started!</h2>
            </main>
        </>
    );
}

export default App;
