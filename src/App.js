import {useState} from 'react'
import './App.css'
import {v4 as uuidv4} from 'uuid'

const starImage = (
  <img
    src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
    alt="star"
  />
)

const App = () => {
  const [website, setWebsite] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [passwords, setPasswords] = useState([])

  const handleAddPassword = () => {
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    setPasswords(prevPasswords => [...prevPasswords, newPassword])
    setWebsite('')
    setUsername('')
    setPassword('')
  }

  const handleDeletePassword = id => {
    setPasswords(prevPasswords => prevPasswords.filter(item => item.id !== id))
  }

  const filteredPasswords = passwords.filter(item =>
    item.website.toLowerCase().includes(searchValue.toLowerCase()),
  )

  const onFormSubmit = event => {
    event.preventDefault()
  }

  return (
    <div className="bg-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
          alt="app logo"
          className="lock-image"
        />
        <div>
          <h1>PASSWORD</h1>
          <h1>MANAGER</h1>
        </div>
      </div>
      <form onClick={() => onFormSubmit}>
        <div className="input-bg-container">
          <div className="input-background">
            <h1>Add New Password</h1>
            <div>
              <label htmlFor="website">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                  alt="website"
                  className="image-logo"
                />
              </label>
              <input
                type="text"
                id="website"
                placeholder="Enter Website"
                value={website}
                onChange={e => setWebsite(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="website">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="image-logo"
                />
              </label>
              <input
                type="text"
                id="website"
                placeholder="Enter Website"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="website">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="image-logo"
                />
              </label>
              <input
                type="password"
                id="website"
                placeholder="Enter Website"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="button-container">
              <button
                type="button"
                className="add-button"
                onClick={handleAddPassword}
              >
                Add
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-image"
          />
        </div>
      </form>

      <div>
        <div>
          <div>
            <h1>Your Password</h1>
            <p>{passwords.length}</p>
          </div>

          <div>
            <label htmlFor="search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="image-logo"
              />
            </label>
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              id="search"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
          </div>
        </div>
        <hr />

        <div>
          <input
            type="checkBox"
            id="check"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="check">Show Password</label>
        </div>

        <div>
          {filteredPasswords.length > 0 ? (
            filteredPasswords.map(item => (
              <div key={item.id}>
                <p>{item.website}</p>
                <p>{item.username}</p>
                <p>{showPassword ? item.password : starImage}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                  alt="delete"
                  onClick={() => handleDeletePassword(item.id)}
                  data-testid="delete"
                />
              </div>
            ))
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no password"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
