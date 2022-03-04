import React from "react"
import { useState } from "react";
//css
import '../css/FormInput.css'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { values, name, onBlur, onSubmit, id, errorMessage, ...inputElse } = { ...props }

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label htmlFor={id}>{id}</label>
            <input
                id={id}
                {...inputElse}

                // {...props}
                // 위 코드처러 props 전체를 넣으면 input 태그 옵셔이 아닌 값도 들어가서 오류 발생, ex : errorMessage

                onChange={
                    (e) => {
                        //리렌더링 많이 발생
                        //onChange(e);
                    }
                }
                name={name}

                //비밀번호 확인 입력중에는 포커싱 상태에서 에러메세지 나타나도록
                onFocus={
                    () => {
                        if (name === "confirmPassword") {
                            setFocused(true);
                        };
                    }
                }

                //나머지 input은 포커싱이 풀렸을때 에러메세지 나타나도록
                onBlur={
                    (e) => {
                        handleFocus(e);
                        onBlur(e);
                    }
                }
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
}

export default FormInput;

