import '../styles/header.css'

export const mountHeader = () => elementhtml => {
  return ( 
   elementhtml.innerHTML = 
      `<div class="header__container">
        <h1 class="header__title">
          <a href="#" title="Creditas">
            <img class="logo" src="https://staging.creditas.com.br/static/images/logo-creditas-white-3cd22a2808.svg" alt="Creditas">
          </a>
        </h1>
        <a class="help" href="#ajuda">Ajuda</a>
      </div>`
  )
}