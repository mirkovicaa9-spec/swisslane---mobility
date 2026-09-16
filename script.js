const form = document.querySelector('#quote-form');
const dateInput = form.querySelector('input[name="date"]');
dateInput.min = new Date().toISOString().split('T')[0];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const lines = [
    'Hello Swisslane Mobility, I would like to request a journey.',
    '',
    `Name: ${data.get('name')}`,
    `Service: ${data.get('service')}`,
    `Pickup: ${data.get('pickup')}`,
    `Destination: ${data.get('destination')}`,
    `Date: ${data.get('date')}`,
    `Time: ${data.get('time')}`,
    `Details: ${data.get('details') || 'None'}`
  ];
  window.open(`https://wa.me/41789369620?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
});
