import React, {Component} from "react"
import classes from "./ContentLink.module.css"
import { Link, withRouter } from "react-router-dom";

const links = [
    {to: '/analysis', icon: 'analysis'},
    {to: '/public', icon: 'public'},
    {to: '/history', icon: 'history'}
]

export class ContentLink extends Component {
    renderLinks() {
        return links.map((link, index) => {
            let cls = [classes[link.icon]]
            if(this.props.location.pathname === link.to)
                cls.push(classes.true)
            return (
                <li key={index} className={classes.navLink}>
                    <Link to={link.to} className={cls.join(' ')}/>
                </li>
            )
        })
    }

    render() {
        return (
            <>
                {this.renderLinks()}
            </>
        )
    }
}
export default withRouter(ContentLink)