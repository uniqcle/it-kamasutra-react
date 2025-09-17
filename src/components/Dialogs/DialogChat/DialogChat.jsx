import React from "react";
import classes from "./DialogChat.module.css";
import { useParams } from "react-router-dom";
import Message from "../Message/Message";

const DialogChat = (props) => {
    const { dialogId } = useParams(); // ← получаем ID из URL
    const textAreaRef = React.createRef();

    const { messages } = props;

    let messageList = messages.map((m) => (
        <Message key={m.id} id={m.id} message={m.message} />
    ));

    const writeMessage = () => {
        let text = textAreaRef.current.value;
        alert(text);
    };

    if (!dialogId) {
        return (
            <div className={classes.dialogs}>
                <div>Выбери с кем хочешь пообщаться</div>
            </div>
        );
    }

    return (
        <>
            <div>
                <h3>Чат с пользователем #{dialogId} </h3>
                <div className={classes.messages}>{messageList}</div>

                <div>
                    <textarea ref={textAreaRef}></textarea>
                    <button onClick={writeMessage}>Написать</button>
                </div>
            </div>
        </>
    );
};

export default DialogChat;
