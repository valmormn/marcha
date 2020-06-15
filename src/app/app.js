// app.js

import { layout } from "./layout/layout.js"
import { user } from "./user/user"
import { shop } from "./shop/shop"

// const e = React.createElement;

// console.log("app.js")

// class LikeButton extends React.Component {
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

document.addEventListener("app", () => {
  // console.log("ah moleque!")
})

export let app = {
  id: "app",
  layout: layout,
  shop: shop,
  user: user,

  f: () => {
    console.log("inside app.js!")
  }
}

export default "hello world!"
