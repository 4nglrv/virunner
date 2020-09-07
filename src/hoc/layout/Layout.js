import React, {Component} from "react"
import classes from "./Layout.module.css"
import Button from "../../components/UI/button/Button";


class Layout extends Component {
    render() {
        return(
            <div className={classes.Layout}>
                <nav>

                </nav>
                <main>
                    <nav className={classes.viRunnerNav}>
                        <div className={classes.viRunner}>
                            <div className={classes.viRunnerLogo} />
                            <div className={classes.viRunnerDesc}>
                                <p><div>Vi</div>Runner</p>
                                <div className={classes.desc}>dynamic file analysis</div>
                            </div>
                        </div>
                        <div className={classes.reg}>
                            <Button type="primary">Sign in</Button>
                            <Button type="secondary">Sign up</Button>
                        </div>
                    </nav>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout