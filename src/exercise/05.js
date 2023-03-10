// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({children, styles, size = 'small'}) {
  size = size.toLowerCase()
  if (size !== 'small' && size !== 'medium' && size !== 'large') {
    console.warn('size should be small|medium|large. set to small')
    size = 'small'
  }
  return (
    <div
      className={`box box--${size}`}
      style={{
        fontStyle: 'italic',
        ...styles,
      }}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box
        size="small"
        styles={{
          backgroundColor: 'lightblue',
        }}
      >
        small lightblue box
      </Box>
      <Box
        styles={{
          backgroundColor: 'pink',
        }}
        size="midium"
      >
        medium pink box
      </Box>
      <Box
        styles={{
          backgroundColor: 'orange',
        }}
        size="large"
      >
        medium orange box
      </Box>
    </div>
  )
}

export default App
