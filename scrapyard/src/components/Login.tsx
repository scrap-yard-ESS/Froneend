import Icon from "./Icon";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // useNavigate 훅을 컴포넌트 내부에서 호출

  const handleLogin = () => {
    navigate("/unlock"); // 버튼 클릭 시 "/"로 이동
  };

  return (
    <div className="l-main">
      <div className="banner">
        <h1 className="txt">
          The most <br />
          <span className="blue">E</span>asy,
          <br />
          <span className="blue">S</span>ecurity,
          <br />
          <span className="blue">S</span>afe
        </h1>
      </div>
      <div className="form">
        <div className="cc">
          <Icon />
          <h1>Wellcome to ESS</h1>
          <h3>We will help you using our sevice.</h3>
          <input placeholder="Plz enter your id"></input>
          <input placeholder="Plz enter your PW"></input>
          <button onClick={handleLogin}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
