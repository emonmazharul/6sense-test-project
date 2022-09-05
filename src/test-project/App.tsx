import React from 'react'
import Main from './component/main'
import ContextParent from './context/context';

const App:React.FC = () => {
  return (
    <ContextParent>
      <Main/>
    </ContextParent>
  )
}

export default App;