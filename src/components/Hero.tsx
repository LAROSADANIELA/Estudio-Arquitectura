import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="./01-int.jpg" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Proyectos a tu alcance.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        En ELLE Estudio, entendemos que tu hogar es más que cuatro paredes; 
                        es una extensión de tu personalidad y estilo de vida. Nuestro compromiso es transformar tus ideas en espacios con alma, 
                        reflejando tu visión y necesidades.
                        <br></br>

                        ¿Qué hacemos por ti?   <br></br>
                        Te ofrecemos un servicio de diseño de interiores que se adapta a tu presupuesto y tus sueños. 
                        Ofrecemos soluciones flexibles que van desde la reorganización de espacios y 
                        mobiliario hasta un diseño integral de interiorismo, e incluso remodelaciones y reformas completas de tu vivienda.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;