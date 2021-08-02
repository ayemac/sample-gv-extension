/*global chrome*/
import logo from './logo.svg';
import './App.css';
import { Frame } from 'chrome-sidebar'
import { url } from './setting'


function App() {
  return (
    <Frame url={url} />
  );
}

export default App;
