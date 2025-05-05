import { useEffect, useRef } from 'react';

const PayPalButton = ({ total }) => {
  const paypalRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=Ae4tapXdMHyxEt-rPzjXpxQThz8PZ-v7nt1HbU2kdz36xe4dgtgrZ1OJrI9ccFIIWddRlc85h_-1FvPk&currency=USD";
    script.addEventListener('load', () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: total.toFixed(2)
                }
              }]
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Pago completado por ${details.payer.name.given_name}`);
            });
          }
        }).render(paypalRef.current);
      }
    });
    document.body.appendChild(script);
  }, [total]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
      <div ref={paypalRef}></div>
    </div>
  );
};

export default PayPalButton;