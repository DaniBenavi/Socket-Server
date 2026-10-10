const currentTicketlbl = document.querySelector('#lbl-new-ticket');
const createTicketbtn = document.querySelector('#btn-new-ticket');

async function getLastTicket() {
  const lastTicket = await fetch('/api/ticket/last').then(resp => resp.json());
  currentTicketlbl.innerHTML = lastTicket;
}

async function createTicket() {
  const newTicket = await fetch('/api/ticket', {
    method: 'POST',
  }).then(resp => resp.json());

  currentTicketlbl.innerText = newTicket.number;
}

createTicketbtn.addEventListener('click', createTicket);

getLastTicket();
console.log('Nuevo Ticket HTML');
