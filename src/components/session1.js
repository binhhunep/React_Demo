/* cú pháp JSX cho phép viết HTML bên trong JS 
chú ý: 1. Cú pháp của JSX phải return một div duy nhất
       2. state dùng để khai đối tượng (object) bên ngoài rende
       3. dùng <>...</> thay khóa div tổng bên ngoài mà không bị lỗi*/

import React from "react";
class Session1 extends React.Component {
  state = {
    name: "Đoàn Thanh Thuận",
    address: "66CMT8",
    tel: "0879806806",
  };
  // user = document.getElementById("name");
  // diachi = document.getElementById("address");
  // dienthoai = document.getElementById("tel");
  inputChangeName = () => {
    this.setState({
      name: document.getElementById("name").value,
      address: document.getElementById("address").value,

      tel: document.getElementById("tel").value,
    });
  };
  loginClick = () => {
    this.inputChangeName();
  };
  render() {
    return (
      <>
        <div className="first">
          <label for="name">Name:</label>
          <input id="name" name="name" type="text" placeholder="Name"></input>
          <label for="address">Address:</label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Address"
            onChange={() => this.inputChangeAddress()}
          ></input>
          <label for="tel">Tel:</label>
          <input
            id="tel"
            name="tel"
            type="text"
            placeholder="Tel"
            onChange={() => this.inputChangeTel()}
          ></input>
          <input
            type="submit"
            value="Login"
            onClick={() => this.loginClick()}
          ></input>
        </div>
        <fieldset className="third">
          <legend>Your information</legend>
          <p>My name is {this.state.name}</p>
          <p>Address: {this.state.address}</p>
          <p>Tel: {this.state.tel}</p>
        </fieldset>
        <div className="second"></div>
      </>
    );
  }
}
export default Session1;
