import React, { createContext } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import useLocalStorage from './customHooks/useLocalStorage';
import Play from './pages/Play/Play';
import Stats from './pages/Stats';

export const StatsContext = createContext()

export default function App() {
    const [totalCount, setTotalCount] = useLocalStorage("totalCount", 0)
    const [correctCount, setCorrectCount] = useLocalStorage("correctCount", 0)

    return (
        <Router>
            <nav>
                <Link to="/">Play</Link>
                <Link to="/stats">Stats</Link>
            </nav>
            <StatsContext.Provider value={{ 
                totalCount, 
                correctCount, 
                setTotalCount, 
                setCorrectCount 
            }}>
                <Switch>
                    <Route path="/" exact>
                        <Play/>
                    </Route>
                    <Route path="/stats">
                        <Stats/>
                    </Route>
                </Switch>
            </StatsContext.Provider>
        </Router>
    )
}
