var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

// app.js
// 'use strict';
// const e = React.createElement;
console.log('app.js'); // class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }
//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }b
//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }
// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);

export var app = {
  f: function f() {
    _newArrowCheck(this, _this);

    console.log('inside app.js!');
  }.bind(this)
};
export default 'hello world!';