import React, {Component} from "react"
import classes from "./Layout.module.css"
import ContentLink from "../../components/UI/ContentLink/ContentLink";
import MainNav from "../../components/mainNav/MainNav";


export default class Layout extends Component {
    render() {
        return(
            <div className={classes.Layout}>
                <nav>

                </nav>
                <main>
                    <MainNav />
                    <div className={classes.content}>
                        <div className={classes.leftContent}>
                            <ContentLink />
                        </div>
                        <div className={classes.rightContent}>
                            <div className={classes.blockContent}>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
