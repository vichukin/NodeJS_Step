function MyDate() {
  let currDate = new Date();
  return <div>{currDate.toLocaleDateString()}</div>;
}
function Time() {
  let currentTime = new Date().toLocaleTimeString();
  let size = 14;
  let componentStyle = {
    fontFamily: "Segoe UI",
    fontSize: `${size}px`,
    color: "cadetblue",
  };
  
  let increaseSize = function(){
    size++;
    console.log(size);
  }

  return (
    <>
      <div style={componentStyle}>{currentTime}</div>
      <button onClick={increaseSize}>Increase</button>
    </>
  );
}
export { MyDate, Time };
