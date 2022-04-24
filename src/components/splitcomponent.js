import React from "react";
class SplitComponent extends React.Component {
  state = {
    id: 1,
    title: "",
    salary: "",
  };

  changeInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    // console.log("e.tagert s3 :", name)
  };

  loginClick = (login) => {
    login.preventDefault();
    //gọi hàm từ component cha
    console.log("loginclick Value:", this.state.title);

    if (this.state.title == "" || this.state.salary == "") {
      alert("Missing Title and Salary");
    } else {
      this.props.addNewTitle({
        title: this.state.title,
        salary: "- lương: " + this.state.salary + " $",
        id: this.state.id++ + ": ",
      });
      this.setState({
        title: "",
        salary: "",
      });
    }
    //gọi hàm event.preventDefault() nay giúp cho page không refresh lại khi ấn submit
    // console.log("check data import:", this.state);
    //sau khi ấn submit sẽ đẩy data lên API để backend lên đó lấy dữ liệu xử lý
  };

  render() {
    return (
      <fieldset className={"session3-fieldset"} readOnly>
        <legend>LOGIN</legend>
        <form className={"fieldset-form"} readOnly>
          <div className={"form-firstname"}>
            <input
              name="title"
              className={"input"}
              id={"firstName"}
              type={"text"}
              placeholder={"Title"}
              autoComplete={"none"}
              value={this.state.title}
              onChange={(e) => this.changeInput(e)}
            />
          </div>
          <div className={"form-lastname"} readOnly>
            <input
              name="salary"
              className={"input"}
              id={"lastName"}
              type={"text"}
              placeholder={"Salary"}
              autoComplete={"none"}
              value={this.state.salary}
              onChange={(e) => this.changeInput(e)}
            />
          </div>
          <input
            id={"login"}
            className={"login"}
            type={"submit"}
            value={"Đăng Nhập"}
            onClick={(login) => this.loginClick(login)}
          />
          <a className={"form-reset"}>Quên mật khẩu</a>
          <hr color={"lightgray"} />
          <a className={"newlogin"}>
            <input
              id={"newlogin"}
              type={"button"}
              defaultValue={"Tạo tài khoản mới"}
            />
          </a>
        </form>
      </fieldset>
    );
  }
}
export default SplitComponent;
