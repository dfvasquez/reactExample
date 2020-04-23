import React from 'react';

function Header (props){

  return (
  <div>
  <header class="uc-header">
  <div class="uc-top-bar">
    <div class="container">
      <div class="top-bar_mobile-logo d-block d-lg-none">
      </div>
      <div class="top-bar_links justify-content-between d-none d-lg-flex">
        <ul class="top-bar_links">
          <li>
            <a href="http://uc.cl/" target="_blank" class="text-size--sm external">
              ir al sitio UC
            </a>
          </li>
        </ul>
        <ul class="top-bar_links">
          <li>
            <a href="http://bibliotecas.uc.cl/" target="_blank" class="text-size--sm external">
              Biblioteca
            </a>
          </li>
          <li>
            <a href="https://donaciones.uc.cl/" target="_blank" class="text-size--sm external">
              Donaciones
            </a>
          </li>
          <li>
            <a href="https://sso.uc.cl/cas/login" target="_blank" class="text-size--sm external">
              Mi Portal UC
            </a>
          </li>
          <li>
            <a href="https://correo.uc.cl" target="_blank" class="text-size--sm external">
              Correo
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <nav class="uc-navbar">
    <div class="container d-none d-lg-block">
      <div class="row align-items-center">

        <div class="col-lg-8 col-xl-9">
          <div class="h2 text-font--serif text-color--blue mt-24" align='left'>Rick and Morty</div>
          <div class="text-color--gray p-size--lg" align='left'>All the characters</div>
        </div>
      </div>
      <ul class="uc-navbar_nav">
      
      </ul>
    </div>
    <div class="uc-navbar_mobile d-block d-lg-none">
      <div class="uc-navbar_mobile-bar navbar-brand">
        <div class="uc-navbar_mobile-logo navbar-light">
          <div class="h2 text-font--serif text-color--blue">Título</div>
        </div>
        <a href="javascript:void(0);" class="uc-navbar_mobile-button" data-collapse="collapseMobileNav3">
          <span class="uc-icon"></span>
          Menú
        </a>
      </div>

    </div>
  </nav>
</header>
  </div>
  )
}

export default Header