import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Analysis.module.css'


class Analysis extends Component {
    render() {
        return(
            <div className={classes.Analysis}>
                <div className={classes.settingBtn}>
                    Settings
                    <FontAwesomeIcon icon="cog" style={{marginLeft: 4}}/>
                </div>
                <div className={classes.dropZone}>
                    <input type="file">

                    </input>
                </div>
            </div>
        )
    }
}

export default Analysis