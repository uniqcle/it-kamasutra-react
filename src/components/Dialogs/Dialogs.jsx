import classes from './Dialogs.module.css'

const Dialogs = (props) => {

	return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.dialog}>Andrey1</div>
                <div className={classes.dialog}>Andrey1</div>
                <div className={classes.dialog + " " + classes.active}>
                    Andrey1
                </div>
                <div className={classes.dialog}>Andrey1</div>
                <div className={classes.dialog}>Andrey1</div>
                <div className={classes.dialog}>Andrey1</div>
                <div className={classes.dialog}>Andrey1</div>
                <div className={classes.dialog}>Andrey1</div>
            </div>
            <div className={classes.dialogs_messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>I'm fine</div>
                <div className={classes.message}>thanks</div>
            </div>
        </div>
    );

}

export default Dialogs; 