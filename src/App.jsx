import './css/App.css';

//component
import FormInput from './component/FormInput';

//hooks
import { useState } from 'react';

function App() {
  console.log('rerendering in App Component');

  //입력값이 담기는 객체 state, 틀 안잡아주면 ,<input=value[] />과정에서 오류 발생
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  console.log(values);

  //생성할 input component의 정보가 담긴 배열, 정보는 배열 내부 객체로 저장되어있다
  const inputs = [
    {
      id: 'username',
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username의 길이는 최소 3, 최대 16이며 특수문자 사용이 불가능합니다.",
      label: "Username",
      pattern: "^[가-힣A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "이메일 형식의 주소만 가능합니다.",
      label: "Email",
      required: true,
    },
    {
      id: "birthday",
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password의 길이는 최소 8, 최대 20이며 최소 문자 1개, 숫자 1개, 특수문자[!*@#$%^&] 1개가 포함되어야 합니다.",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#%&])[a-zA-Z0-9!@#%&]{8,20}$`,
      required: true,
    },
    {
      id: "confirmPassword",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "비밀번호가 일치하지 않습니다",
      pattern: values.password,
      label: "Confirm Password",
      required: true,
    },
  ];

  //input 값입력으로 변화가 발생할때 values state 업데이트 
  //객체 state를 사용하기 때문에 onchange 함수 하나만 있어도 된다
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const onBlur = (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    // console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <span>회원가입</span>
        {/* obj.map()사용해서 컴포넌트를 다수의 input component를 렌더 */}

        {inputs.map((input) => (
          <FormInput
            {...input}
            key={input.id}
            values={values}
            // value={values[input.name]}
            onChange={onChange}
            onBlur={onBlur}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );

}

export default App;
