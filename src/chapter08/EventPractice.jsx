import React, { useState } from "react";

function EventPractice(props) {
    const [form, setForm] = useState({
        username:'',
        message:''
    });
    const {username, message} = form;

    // const [message, setMessage]=useState('');
    // const [username, setUsername]=useState('');
    // const onChangeMessage= e => setMessage(e.target.value);
    // const onChangeUsername= e => setUsername(e.target.value);

    const onChange = e =>{
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm)
    };

    const onClick = () =>{
        alert(message);
        // setMessage('');
        // setUsername('');
        setForm({username:'', message: ''});
    }

    return(
        <div>
            <h1>이벤트 실습</h1>
            <input
            type="text"
            name="username"
            placeholder="사용자명을 입력해보세요"
            onChange={onChange}
            value={username} />
            <input
            type="text"
            name="message"
            placeholder="아무거나 입력해보세요"
            onChange={onChange}
            value={message} />
            <h1><b>사용자명 : </b>{username}</h1>
            <h1><b>메시지 : </b>{message}</h1>
            <button onClick={onClick}>확인</button>
        </div>
    )
}
export default EventPractice;