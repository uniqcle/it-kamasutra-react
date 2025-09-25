import classes from "./Dialogs.module.css";
import DialogChatContainer from "./DialogChatContainer/DialogChatContainer";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <DialogChatContainer />
        </div>
    );
};

export default Dialogs;
