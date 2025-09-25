import React from "react";
import classes from "./DialogChat.module.css";
import { useParams } from "react-router-dom";
import DialogsList from "../DialogsList/DialogsList";
import Message from "../Message/Message";

const DialogChat = (props) => {
    const { dialogs, messages, areaText } = props;
    const { dialogId } = useParams(); // ← получаем ID из URL
    const textAreaElement = React.createRef();

    const addMessage = () => {
        props.addMessage();
    };

    const updateMessage = () => {
        let text = textAreaElement.current.value;
        props.updateMessage(text);
    };

    let messageList = messages.map((m) => (
        <Message key={m.id} id={m.id} message={m.message} />
    ));

    // if (!dialogId) {
    //     return (
    //         <>
    //             <DialogsList dialogs={dialogs} />
    //             <div className={classes.dialogs}>
    //                 <div>Выбери с кем хочешь пообщаться</div>
    //             </div>
    //         </>
    //     );
    // }

    return (
        <>
            <DialogsList dialogs={dialogs} />

            <div>
                <h3>Чат с пользователем #{dialogId} </h3>
                <div className={classes.messages}>{messageList}</div>

                <div>
                    <textarea
                        style={{ width: "843px", height: "163px" }}
                        ref={textAreaElement}
                        value={areaText}
                        onChange={updateMessage}
                    />
                    <button onClick={addMessage}>Написать</button>
                </div>
            </div>
        </>
    );
};

export default DialogChat;
