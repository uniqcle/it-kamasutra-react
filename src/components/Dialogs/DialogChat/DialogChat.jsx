import classes from './DialogChat.module.css'
import { useParams } from "react-router-dom";
 
const DialogChat = (props) => {
	const { dialogId } = useParams(); // ← получаем ID из URL

	if (!dialogId) {
		return(
            <div className={classes.dialogs}>
                <div>Выбери с кем хочешь пообщаться</div>
            </div>
        );
	}
	
    return (
		<>
		 
            <div className={classes.dialogs_messages}>
				<h3>Чат с пользователем #{dialogId}</h3>
				
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>I'm fine</div>
                <div className={classes.message}>thanks</div>
            </div>
        </>
    );
}

export default DialogChat; 