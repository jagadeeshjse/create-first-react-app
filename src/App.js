import Name from './Name';
import Data from './Data';
import './App.css';

const App = () => {
  const styled = {
    color: 'blue',
  };
  return (
    <>
      <h1 style={styled} className="head">
        This is react js
      </h1>
      <h2>this is heading 2</h2>
      <div>
        <h4>Lorem, ipsum dolor.</h4>
        <p>8+ 10{8 + 10}</p>
        {89 * 10}
      </div>
      <Name />
      <Name />
      <Name />
      <Name />
      <Data />
    </>
  );
};
export default App;
