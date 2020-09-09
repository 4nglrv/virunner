import classes from "./MainNav.module.css";
import Button from "../UI/button/Button";
import React, {Component} from "react";

export default class MainNav extends Component {
    render() {
        return(
            <nav className={classes.viRunnerNav}>
                <div className={classes.viRunner}>
                    <div className={classes.viRunnerLogo} />
                    <div className={classes.viRunnerDesc}>
                        <div><div>Vi</div>Runner</div>
                        <div className={classes.desc}>dynamic file analysis</div>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.reg}>
                        <Button type="primary">Sign in</Button>
                        <Button type="secondary">Sign up</Button>
                    </div>
                    <div className={classes.circle}>
                        <div className={classes.burger}/>
                    </div>
                </div>
            </nav>
        )
    }
}