import { styles, classes } from "./Siidebar.Styles";
import imgx from '../../static/images/logo.png';

function Sidebar() {
    return (
        <div className={classes.card}>
            Sidebar
            <img src={imgx} />
        </div>
    )
}

export {Sidebar};