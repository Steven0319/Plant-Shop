import { useEffect, useRef } from 'react';

const PayPalButton = ({ total }) => {
  const paypalRef = useRef();
  //uso useRef para tener una referencia directa al div donde se va a renderizar el boton
  useEffect(() => {
    //creo el script de paypal dinamicamente
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=Ae4tapXdMHyxEt-rPzjXpxQThz8PZ-v7nt1HbU2kdz36xe4dgtgrZ1OJrI9ccFIIWddRlc85h_-1FvPk&currency=USD";
    //cuando el script se carga, configuro los botones
    script.addEventListener('load', () => {
      if (window.paypal) {
        //configuro los botones de paypal
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            //creo una orden con el total del carrito
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: total.toFixed(2) //aseguro que el total tenga 2 decimales
                }
              }]
            });
          },
          onApprove: (data, actions) => {
            //si el pago se aprueba, capturo la orden y muestro el mensaje
            return actions.order.capture().then((details) => {
              alert(`Pago completado por ${details.payer.name.given_name}`);
            });
          }
        }).render(paypalRef.current); //renderizo los botones en el div referenciado
      }
    });
    //agrego el script al body
    document.body.appendChild(script);
  }, [total]); //este efecto se vuelve a ejecutar si cambia el total

 //retorno el contenedor con estilos para centrar los botones
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
      <div ref={paypalRef}></div>
    </div> //aqui se renderiza el boton
  );
};

export default PayPalButton;