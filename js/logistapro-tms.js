
function switchTab(tabId) {
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
}

// Shipment Form Logic
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('shipmentForm');
  const table = document.getElementById('shipmentTable').querySelector('tbody');

  function loadShipments() {
    table.innerHTML = '';
    const shipments = JSON.parse(localStorage.getItem('shipments') || '[]');
    shipments.forEach((s, i) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${s.origin}</td>
        <td>${s.destination}</td>
        <td>${s.weight}</td>
        <td>${s.type}</td>
        <td>${s.pickupDate}</td>
        <td><button onclick="removeShipment(${i})">Remove</button></td>
      `;
      table.appendChild(row);
    });
  }

  window.removeShipment = function(index) {
    const shipments = JSON.parse(localStorage.getItem('shipments') || '[]');
    shipments.splice(index, 1);
    localStorage.setItem('shipments', JSON.stringify(shipments));
    loadShipments();
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const newShipment = {
      origin: document.getElementById('origin').value,
      destination: document.getElementById('destination').value,
      weight: document.getElementById('weight').value,
      type: document.getElementById('type').value,
      pickupDate: document.getElementById('pickupDate').value
    };
    const shipments = JSON.parse(localStorage.getItem('shipments') || '[]');
    shipments.push(newShipment);
    localStorage.setItem('shipments', JSON.stringify(shipments));
    form.reset();
    loadShipments();
  });

  loadShipments();
});
