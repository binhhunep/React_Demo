/*FORM TRONG REACT
1. action trong react nó sẽ đóng gói dữ liệu và gửi
vào API Cho backend lấy xuống từ API*/
import React from "react";
import Child from "./childComponent";
import SplitComponent from "./splitcomponent";
class Session3 extends React.Component {
  state = {
    firstName: "Bình",
    lastName: "Đoàn Thanh",
    infor: [{ id: "", title: "", salary: "" }],
  };

  addNewTitle = (changeInfor) => {
    console.log("check Job from parent:", changeInfor);
    /* THÊM DỮ LIỆU THUẦN JAVASCRIPT */
    let currentInfor = this.state.infor;
    currentInfor.push(changeInfor);
    this.setState({
      // firstName: this.state.firstName.push(changeInfor),
      // lastName: this.state.lastName.push(changeInfor),
      // infor: [...this.state.infor, changeInfor],
      //thêm dữ liệu rút gọn cho mảng nâng cao. Toán tử "...":copy lại 3 phần tử array
      //   infor: this.state.infor.push(job),
      infor: currentInfor,
    });
  };

  deleteTitle = (id) => {
    console.log("job on parent:", id);
    let currentId = this.state.infor;
    currentId = currentId.filter((item) => item.id == id);
    this.setState({
      infor: currentId,
    });
  };

  deleteList = (list) => {
    let currentList = this.state.infor;
    currentList = currentList.filter((item) => item.id != list.id);
    this.setState({
      infor: currentList,
    });
  };

  render() {
    return (
      <>
        <SplitComponent addNewTitle={this.addNewTitle} />
        <br />
        <Child
          infor={this.state.infor}
          deleteTitle={this.deleteTitle}
          deleteList={this.deleteList}
        />
      </>
    );
  }
}
export default Session3;
