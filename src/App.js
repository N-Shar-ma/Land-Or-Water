import React, { createContext } from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from 'react-router-dom'
import useLocalStorage from './customHooks/useLocalStorage';
import Play from './pages/Play/Play';
import Stats from './pages/Stats/Stats';
import styles from "./app.module.css"
import "./index.css"

export const StatsContext = createContext()

export default function App() {
    const [totalCount, setTotalCount] = useLocalStorage("totalCount", 0)
    const [correctCount, setCorrectCount] = useLocalStorage("correctCount", 0)

    return (
        <Router>
            <header className={styles.header}>
                <h1 className={styles.title}>Water Or Land?</h1>
                <nav className={styles.navBar}>
                    <NavLink className={styles.link} activeClassName={styles.currentLink} to="/play">Play</NavLink>
                    <NavLink className={styles.link} activeClassName={styles.currentLink} to="/stats">Stats</NavLink>
                </nav>
            </header>
            <StatsContext.Provider value={{ 
                totalCount, 
                correctCount, 
                setTotalCount, 
                setCorrectCount 
            }}>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/play"/>
                    </Route>
                    <Route path="/play">
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
