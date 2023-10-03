import React from 'react'
import ReactDOM from 'react-dom/client'
import { Err404 } from '.'

ReactDOM.createRoot(document.getElementById('404')!).render(
  <React.StrictMode>
    <Err404 />
  </React.StrictMode>,
)
