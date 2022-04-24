//Chú ý: Khi dùng function trong react thì phải dùng arrow function =>()
/*setState and event.target (API globle)*/
import React from "react";
class Session2 extends React.Component {
  state = {
    user: "Đoàn Thanh Bình",
    company: "Quatest 2",
    vision: "K10",
  };
  handleClick = () => {
    alert("click me!");
    this.preventDefault();
  };
  nameChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    // console.log("e:", e)
    // console.log("e.target",e.target)
  };
  //Hàm setstate là hàm của react phải để trong dấu ngoặc(objet)
  //bên trong hàm setstate là một object nên phải dùng dấu {}
  render() {
    const { name, age, address, abc } = this.props; //detructuring assigment
    console.log("check props:", this.props);
    return (
      <>
        <div>{name}</div>
        <div>{age}</div>
        <div>{address}</div>
        <div className="job-lists">
          {abc.map((item) => {
            return (
              <div key={item.job}>
                {item.title} - {item.salary}
              </div>
            );
          })}
        </div>
        <div className="first">
          <input type="submit" onClick={() => this.handleClick()}></input>
        </div>
        <div>
          <input
            name={"user"}
            type="text"
            onChange={(e) => this.nameChange(e)}
          ></input>
          <input
            name={"company"}
            type="text"
            onChange={(e) => this.nameChange(e)}
          ></input>
          <input
            name={"vision"}
            type="text"
            onChange={(e) => this.nameChange(e)}
          ></input>
        </div>
        <div>
          <p>My name:{this.state.user}</p>
          <p>My company:{this.state.company}</p>
          <p>My vision:{this.state.vision}</p>
        </div>
      </>
    );
  }
}
export default Session2;
