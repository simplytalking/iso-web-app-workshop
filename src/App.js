import React from 'react';
import Products from "./components/Products/Products";

import './App.css';

class App extends React.Component {

    render() {
        return (
            <div>
                <div className="app-header ui fixed inverted menu">
                </div>
                <div style={{marginTop: '100px'}}
                    className="app-content ui main text container">
                    Hello! Your app is running!
                </div>
            </div>
        );
    }
}

export default App;
