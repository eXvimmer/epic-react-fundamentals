// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const username = e.target.elements.username.value
    if (!username) return
    onSubmitUsername(username)
  }

  function handleChange(e) {
    const val = e.target.value
    const isValid = val === val.toLowerCase()
    setError(isValid ? '' : 'username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={!!error}>
        Submit
      </button>
      {error && <div role="alert">{error}</div>}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
