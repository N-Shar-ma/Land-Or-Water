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
                <main className={styles.main}>
                    <Switch>
                        <Route path="/play" component={Play}/>
                        <Route path="/stats" component={Stats}/>
                        <Route path="/">
                            <Redirect to="/play"/>
                        </Route>
                    </Switch>
                </main>
            </StatsContext.Provider>
            <footer className={styles.footer}>
                <span>Thanks to the <a className={styles.apiLink} href="https://onwater.io" target="_blank" rel="noreferrer noopener">OnWater API</a> for all the geographical data</span>
            </footer>
        </Router>
    )
}
