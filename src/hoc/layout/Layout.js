import React, {Component} from "react"
import classes from "./Layout.module.css"
import ContentLink from "../../components/UI/contentLink/ContentLink";
import MainNav from "../../components/mainNav/MainNav";

const dataBase = [
    {
        uuid: '12345678-1234-5678-1234-567812345678',
        hash: 'EF83C724ADE5A48B1970BE15B94379FD',
        fileName: 'hentai.exe',
        state: '5',
        start: '21.08.2020 17:19:02.24',
        end: '21.08.2020 17:19:46.01',
        logs:
            [
                {
                    id: 1,
                    message: 'start file'
                },

                {
                    id: 2,
                    message: 'analysis started'
                }
            ]
    }
]


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
