import React, { Component } from 'react'
import { FormGroup, InputGroup, Button, Callout } from '@blueprintjs/core'
import firebase from '../firebase'

class Form extends Component {
  state = {
    email: '',
    password: '',
    canSubmit: false,
    hasError: false,
    errorMessage: '',
    isLoading: false,
  }

  onChangeEmail = event => {
    const email = event.target.value
    const password = this.state.password
    const canSubmit = email !== '' && password !== ''
    this.setState({ email, canSubmit })
  }

  onChangePassword = event => {
    const password = event.target.value
    const email = this.state.email
    const canSubmit = email !== '' && password !== ''
    this.setState({ password, canSubmit })
  }

  onSubmit = () => {
    const { email, password } = this.state
    this.setState({ isLoading: true })
    if (email !== '' && password !== '') {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(e => console.warn(e))
        .catch(e =>
          this.setState({
            hasError: true,
            errorMessage: e.message,
            isLoading: false,
          })
        )
    }
  }

  onEnter = event => {
    if (event.keyCode === 13) {
      this.onSubmit()
    }
  }

  render() {
    const {
      email,
      password,
      canSubmit,
      errorMessage,
      hasError,
      isLoading,
    } = this.state

    return (
      <div>
        {hasError && <Callout intent="danger">{errorMessage}</Callout>}

        <FormGroup label="Correo electrónico" labelFor="email-input">
          <InputGroup
            id="email-input"
            placeholder="yo@mail.com"
            value={email}
            autoFocus
            onChange={this.onChangeEmail}
            onKeyUp={this.onEnter}
            disabled={isLoading}
          />
        </FormGroup>

        <FormGroup label="Contraseña" labelFor="pass-input">
          <InputGroup
            id="pass-input"
            type="password"
            placeholder="********"
            value={password}
            onChange={this.onChangePassword}
            onKeyUp={this.onEnter}
            disabled={isLoading}
          />
        </FormGroup>

        <Button
          icon="confirm"
          text="Iniciar sesión"
          disabled={!canSubmit}
          onClick={this.onSubmit}
          loading={isLoading}
        />
      </div>
    )
  }
}

export default Form
