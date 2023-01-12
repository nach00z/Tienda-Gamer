import React from 'react';
import img1 from '../components/cards/logoAmd.jpg'
import img2 from '../components/cards/logoNvidia.png'
import Nav from 'react-bootstrap/Nav';

function Inicio() {
    return (

        <body className='body-inicio'>
            <div >
                <h1 className='letras'>Historia de las Marcas</h1>
                <Nav.Link href='/' className='letras'> Ir a la Tienda </Nav.Link>

                <h2 className="titulos">AMD</h2>

                <section>
                    <div className="padre">
                        <img src={img1} />
                        <div className="segundoParrafo">
                            <h4>AMD fue fundada el 1 de mayo de 1969 por un grupo de ejecutivos de Fairchild Semiconductor, entre ellos se encontraban Jerry Sanders III,
                                Edwin Turney, John Carey, Steven Simonsen, Jack Gifford, Frank Botte, Jim Giles y Larry Stenger.
                                AMD se estrenó en el mercado de los circuitos integrados lógicos, para dar el salto a las memorias RAM en 1975.
                                AMD siempre ha destacado por ser el eterno rival de Intel, actualmente son las dos únicas compañías que venden procesadores x86,
                                aunque VIA está empezando a meter la patita de nuevo en esta arquitectura.
                            </h4>
                        </div>
                    </div>
                </section>

                <h2 className="titulos">NVIDIA</h2>

                <section>
                    <div className="padre">
                        <img src={img2} />
                        <div className="segundoParrafo">
                            <h4>Jen-Hsun Huang, Chris Malachowsky, y Curtis Priem fundaron la compañía en enero de 1993 y situaron la sede en California en abril de 1993.5

                                En 1995 NVIDIA lanza al mercado su primer producto, NVIDIA NV1. Esta es una tarjeta PCI la cual se comercializó con el nombre de Diamond Edge 3D basado en mapas de texturas de superficies cuadráticas.
                                El nombre GeForce que utilizó para sus modelos gráficos fue creada mediante un concurso en California para nombrar a la siguiente generación de tarjetas gráficas NV20.-
                                En 2012 aparecen en el mercado tabletas y teléfonos inteligentes con el procesador Tegra 3, creado por NVIDIA.
                                En 2013 Nvidia decidió licenciar su tecnología gráfica para que fabricantes de todo tipo de dispositivos puedan aprovechar sus catálogo de patentes, siguiendo el mismo modelo que ARM Holdings.6
                                El 11 de julio de 2020 se dio a conocer que la empresa registro ante la oficina de patentes de Estados Unidos las marcas 3080, 4080 y 5080, confirmando de esta forma el esquema que busca seguir perseguir para su nueva generación de tarjetas gráficas.
                            </h4>
                        </div>
                    </div>
                </section>
            </div>
        </body>
    )
}

export default Inicio;