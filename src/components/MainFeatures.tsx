import React from 'react';

const MainFeatures = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 flex items-center">
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">
                                    En ELLE Estudio, valoramos tu individualidad y tu presupuesto. Nuestra misión es crear diseños que te hagan sentir en casa y que se ajusten a tus necesidades financieras. Creemos que la belleza y el confort no tienen por qué estar reñidos con tu presupuesto
                                </p>
                            </div>
                        </div>
                        <div className="sm:w-1/3 text-center sm:py-8 flex items-center">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="feature" className="object-cover object-center h-full w-full" src="./03-int.jpg" />
                            </div>
                        </div>
                        <div className="sm:w-1/3 text-center sm:pl-8 sm:py-8 flex items-center">
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Tu visión.<br></br> Nuestro diseño.<br></br> Tu hogar ideal.</h2>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainFeatures;