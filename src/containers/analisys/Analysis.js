import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Analysis.module.css'


export default class Analysis extends Component {
    render() {
        return(
            <div className={classes.Analysis}>
                <div className={classes.settingBtn}>
                    Settings
                    <FontAwesomeIcon icon="cog" style={{marginLeft: 4}}/>
                </div>
                <div className={classes.dropZone}>
                    <div className={classes.fileImage}>
                        <div className={classes.inputTitle}>
                            Choose or drag files for analysis
                        </div>
                        <div className={classes.inputDesc}>
                            By submitting data below, you are
                            agreeing to our Terms of Service and
                            Privacy Policy, and to the sharing of
                            your Sample submission with the
                            security community. Please do not
                            submit any personal information;
                            Bloom is not responsible for the
                            contents of your submission.
                            Learn more.
                        </div>
                    </div>
                    <div className={classes.mediaInput}>
                        <input type="file" />
                    </div>
                </div>
            </div>
        )
    }
}