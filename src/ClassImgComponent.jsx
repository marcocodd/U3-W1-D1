import { Component } from "react";

class ClassImgComponent extends Component {
 render() {
  return <img src={this.props.url} alt={this.props.desc} />;
 }
}

export default ClassImgComponent;
