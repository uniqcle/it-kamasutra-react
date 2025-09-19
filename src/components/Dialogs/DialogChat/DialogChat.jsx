import React from "react";
import classes from "./DialogChat.module.css";
import { useParams } from "react-router-dom";
import Message from "../Message/Message";
import {
    updateMessageActionCreator,
    addMessageActionCreator,
} from "../../../redux/state";

const DialogChat = (props) => {
    const { dialogPage, dispatch } = props;
    const { dialogId } = useParams(); // ← получаем ID из URL
    const textAreaRef = React.createRef();

    const { messages } = props;

    let messageList = messages.map((m) => (
        <Message key={m.id} id={m.id} message={m.message} />
    ));

    const addMessage = () => {
        dispatch(addMessageActionCreator());
    };

    const updateMessage = () => {
        let areaText = textAreaRef.current.value;
        dispatch(updateMessageActionCreator(areaText));
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
                    <textarea
                        style={{ width: "843px", height: "163px" }}
                        ref={textAreaRef}
                        value={dialogPage.areaText}
                        onChange={updateMessage}
                    />
                    <button onClick={addMessage}>Написать</button>
                </div>
            </div>
        </>
    );
};

export default DialogChat;
