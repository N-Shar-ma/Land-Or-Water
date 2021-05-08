import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import useLocalStorage from './customHooks/useLocalStorage';
import Play from './pages/Play/Play';
import Stats from './pages/Stats';

export default function App() {
    const [totalCount, setTotalCount] = useLocalStorage("totalCount", 0)
    const [correctCount, setCorrectCount] = useLocalStorage("correctCount", 0)

    return (
        <Router>
            <nav>
                <Link to="/">Play</Link>
                <Link to="/stats">Stats</Link>
            </nav>
            <Switch>
                <Route path="/" exact>
                    <Play setCorrectCount={setCorrectCount} setTotalCount={setTotalCount} />
                </Route>
                <Route path="/stats">
                    <Stats correctCount={correctCount} totalCount={totalCount}/>
                </Route>
            </Switch>
        </Router>
    )
}
