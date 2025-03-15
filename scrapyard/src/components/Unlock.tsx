import Icon from "./Icon";

const Unlock = () => {
  const handleUnlock = () => {
    alert("Try to open your safe"); // 알림 표시 (예시)
  };

  return (
    <div>
      <div className="cc">
        <Icon />
        <h1>Try to open your safe</h1>
        <h3>Like it came, it will be easy. Maybe.</h3>
        <button onClick={handleUnlock}>Unlock</button>
      </div>
    </div>
  );
};

export default Unlock;
