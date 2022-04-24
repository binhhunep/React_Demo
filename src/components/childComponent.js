import React from "react";
import "../styles/childComponent.scss";
//có 2 loại khai báo component : Class/redux và function/hook
class Child extends React.Component {
  state = {
    showHide: false,
    id: "",
  };

  clickShowHide = () => {
    this.setState({
      showHide: !this.state.showHide,
    });
  };
  deleteClick = (id) => {
    const { infor } = this.props;
    id = infor.id;
    console.log("job:", id);
    this.props.deleteTitle(id);
  };

  deleteListClick = (list) => {
    this.props.deleteList(list);
  };

  render() {
    const { infor } = this.props;
    let showHide = this.state.showHide;
    return (
      <>
        <fieldset>
          <legend>Information</legend>
          {showHide === false ? (
            <button id="show" onClick={() => this.clickShowHide()}>
              Show
            </button>
          ) : (
            <>
              <div className="infor">
                {infor.map((item, liNumber) => {
                  console.log(item.id);
                  //chỉ dùng toán tử đk ?: trong trường hợp hàm trả về đơn giản
                  //với hàm trả về return nên dùng lệnh if
                  if (item.id === "" || item.salary === "") {
                    <></>;
                  } else {
                    return (
                      <div className="infor-content" key={liNumber}>
                        <div id="para">
                          {item.id} {item.title} {item.salary}
                        </div>
                        <span
                          id="x-btn"
                          onClick={() => this.deleteListClick(item)}
                        >
                          X
                        </span>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="btn">
                <button id="hide" onClick={() => this.clickShowHide()}>
                  Hide
                </button>
                <button id="hide" onClick={() => this.deleteClick()}>
                  delete
                </button>
              </div>
            </>
          )}
        </fieldset>
      </>
    );
  }
}

//Khai báo kiểu function (chỉ tối uu khi dùng với hook - chia cắt logic giúp code ngắn hơn một chút)
//Class/redux mới dùng this.props this chỉ đến tên class,
//còn tạo component dạng function thì chỉ cần gán đối số của hàm vào
//dùng classs sau này sửa lỗi trên component con dễ hơn
// const Child = (props) => {
//         const { firstName, lastName, infor } = props
//            return (
//             <>
//                 <fieldset>
//                     <legend>Information</legend>
//                     <div>{firstName}</div>
//                     <br/>
//                     <div>{lastName}</div>
//                     <br/>
//                     <div className="infor">
//                         {
//                             infor.map((item,index) => {
//                             return(
//                                 <>
//                                 <div key={item.id}>
//                                  {item.id} {item.title} {item.salary} {item.age}
//                                 </div>
//                                 </>
//                             )
//                         })
//                     }
//                     </div>
//                 </fieldset>
//             </>
//     )
// }
export default Child;
