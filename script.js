const loginForm = document.getElementById('login-form')
const emailInput = document.getElementById('email-input')
const errorIcon = document.getElementById('error-icon')
const errorMessage = document.getElementById('error-message')

const handleSubmit = e => {
  e.preventDefault()
  if (!emailInput.checkValidity()) {
    console.log('invalid email')
    errorIcon.classList.remove('hidden')
    errorMessage.classList.remove('hidden')
    emailInput.classList.add('border-[#F96464]', 'border-2')
  } else {
    console.log('valid email')
    errorIcon.classList.add('hidden')
    errorMessage.classList.add('hidden')
    emailInput.classList.remove('border-[#F96464]', 'border-2')
  }
}

loginForm.addEventListener('submit', handleSubmit)
