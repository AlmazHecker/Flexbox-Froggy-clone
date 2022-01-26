

import View from "./components/View/View";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {

  const styles = {
    display: 'flex',
    minWidth: '600px',
    margin: '0',
    backgroundColor: '#43A047',
    color: 'white'
}


  return (
  <div style={styles}>
    <Sidebar />
    <View />
  </div>
    );
}

export default App;
