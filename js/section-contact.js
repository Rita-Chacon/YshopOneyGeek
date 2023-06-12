const contenedorContacto = document.querySelector("[data-contact]");

const contenido = `<div class="contact__subcontainer">
                    <div class="contact__container__logo">
                        <img src="assets/img/logo_yso.png" alt="" class="contact__logo">
                    </div>
                    <div class="contact__container__links">
                        <a href="" class="contact__link">Quiénes somos</a>
                        <a href="" class="contact__link">Política de privacidad</a>
                        <a href="" class="contact__link">Promosiones</a>
                        <a href="" class="contact__link">Nuestras tiendas</a>
                        
                        <!--REDES-->
                        <div class="redes">
                            <a href="#facebook"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#Instagram"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#Twitter"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#Github"><i class="fa-brands fa-github"></i></a>
                            <a href="#Linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
                            
                            
                        </div>

                    </div>
                    </div>
                    <div class="contact__container__form">
                    <form action="" class="contact__form" data-contact>
                        <h4 for="" class="contact__form__label">
                            Contacto
                        </h4>
                        <input type="text" class="contact__form__name" name="name" id="contact-name" placeholder="Nombre y apellido">
                        <textarea class="contact__form__textarea" name="message" id="contact-message" cols="30" rows="10" placeholder="Cualquier duda o comentario por favor, Deje su mensaje"></textarea>
                        <button class="contact__form__button" id="contact-btn">Enviar</button>
                    </form>
                    </div>`;

contenedorContacto.innerHTML = contenido;

