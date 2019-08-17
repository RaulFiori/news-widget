import React from 'react';
import { hot } from 'react-hot-loader';
import { getSources } from './api/news';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1> Hello, World! </h1>
//       </div>
//     );
//   }
// }

const App = () => {
  // getNews();
  getSources().then(result => console.log(result));
  return (
    <div>
      <h1> Hello, World! </h1>
    </div>
  );
};

export default hot(module)(App);
