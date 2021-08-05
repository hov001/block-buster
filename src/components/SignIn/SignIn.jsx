import React from 'react'
import './SignIn.css'
import Button from '../Button/Button'
import Title from '../Title/Title'
import InputField from '../InputField/InputField'
import CheckboxField from '../CheckboxField/CheckboxField'

export default function SignIn() {
  return (
    <div className="overlay openform">
      <div className="login-wrapper" id="login-content">
        <div className="login-content">
          <Button text={'x'} classes={'close'} />
          <Title text={'sign in'} color={'#222222'} />
          <form method="post" action="#">
            <div className="row">
              <InputField
                name={'email'}
                type={'email'}
                label={'Email'}
                placeholder={'user@gmail.com'}
                required
              />
            </div>

            <div className="row">
              <InputField
                name={'password'}
                type={'password'}
                label={'Password'}
                placeholder={'**********'}
                required
              />
            </div>
            <div className="row">
              <div className="remember">
                <CheckboxField name={'remember'} value={'Remember me'} />
              </div>
            </div>
            <div className="row">
              <Button text={'Login'} classes={'full-btn'} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
