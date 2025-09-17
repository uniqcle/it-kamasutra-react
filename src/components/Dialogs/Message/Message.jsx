import classes from './Message.module.css'

const Message = (props) => {
	const { id, message } = props; 
	const { left, right } = classes; 
	
	const class_message = id % 2 === 0 ? left : right;
	
	return (
        <>
            <div className={classes.message + " " + class_message}>
                {message}
            </div>
        </>
    );
}

export default Message; 