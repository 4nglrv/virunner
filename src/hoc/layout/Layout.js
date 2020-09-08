import React, {Component} from "react"
import classes from "./Layout.module.css"
import Button from "../../components/UI/button/Button";
import ContentNavLink from "../../components/UI/navLink/ContentNavLink";


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
                    <div className={classes.content}>
                        <div className={classes.leftContent}>
                            <ContentNavLink link="/analysis" active="false" icon="analysis" />
                        </div>
                        <div className={classes.rightContent}>
                            {this.props.children}
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Layout