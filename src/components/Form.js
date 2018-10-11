import React, { Component } from 'react'
import { FormGroup, InputGroup, Button } from '@blueprintjs/core'

class Form extends Component {
  state = {
    email: '',
    password: '',
    canSubmit: false,
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
    if (this.state.email !== '' && this.state.password !== '') {

    }
  }

  onEnter = event => {
    if (event.keyCode === 13) {
      this.onSubmit()
    }
  }

  render() {
    const { email, password, canSubmit } = this.state
    return (
      <div>
        <FormGroup label="Correo electrónico" labelFor="email-input">
          <InputGroup
            id="email-input"
            placeholder="yo@mail.com"
            value={email}
            autoFocus
            onChange={this.onChangeEmail}
            onKeyUp={this.onEnter}
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
          />
        </FormGroup>

        <Button
          icon="confirm"
          text="Iniciar sesión"
          disabled={!canSubmit}
          onClick={this.onSubmit}
        />
      </div>
    )
  }
}

export default Form
