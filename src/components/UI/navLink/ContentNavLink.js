import React from "react"
import classes from "./ContentNavLink.module.css"
import Link from "react-router-dom/modules/Link";

const ContentNavLink = props => {
    const cls = [
        classes.navLink,
        classes[props.active]
    ]
    const icon = [
        classes[props.icon]
    ]

    return(
        <Link to={props.link} className={cls.join(' ')}>
            <div className={icon.join(' ')} />
        </Link>
    )
}

export default ContentNavLink