// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

class ParkingGarage {
  private tickets: number[];
  private spaces: number[];
  private currentTicket: { ticketNumber: number; paid: boolean } | null;

  constructor(totalTickets: number, totalSpaces: number) {
      this.tickets = Array.from({ length: totalTickets }, (_, index) => index + 1);
      this.spaces = Array.from({ length: totalSpaces }, (_, index) => index + 1);
      this.currentTicket = null;
  }

  takeTickets(): void {
      if (this.tickets.length > 0 && this.spaces.length > 0) {
          const ticketNumber = this.tickets.shift()!;
          const parkingSpace = this.spaces.shift()!;
          this.currentTicket = { ticketNumber, paid: false };
          console.log(`Ticket ${ticketNumber} issued, please park in space ${parkingSpace}.`);
      } else {
          console.log('Sorry, the parking garage is full.');
      }
  }

  payForParking(): void {
      if (this.currentTicket) {
          const payment = prompt('Please enter the amount you want to pay');
          if (payment !== '') {
              this.currentTicket.paid = true;
              console.log('Your ticket has been paid, please exit within 15 minutes.');
          } else {
              console.log('Payment is required to move forward.');
          }
      } else {
          console.log('Please purchase a ticket before paying.');
      }
  }

  leaveGarage(): void {
      if (this.currentTicket) {
          if (this.currentTicket.paid) {
              console.log('Thank you and have a great day!');
          } else {
              const payment = prompt('Please pay for your ticket prior to leaving');
              if (payment !== '') {
                  console.log('Thank you and have an amazing day!');
                  this.spaces.push(this.currentTicket.ticketNumber);
                  this.tickets.push(this.currentTicket.ticketNumber);
                  this.currentTicket = null;
              } else {
                  console.log('Payment is required to move forward.');
              }
          }
      } else {
          console.log('No current ticket found, please purchase first.');
      }
  }
}

// Example usage:
const parkingGarage = new ParkingGarage(10, 10);

// Simulate a car taking a ticket
parkingGarage.takeTickets();

// Simulate a car paying for parking
parkingGarage.payForParking();

// Simulate a car leaving the garage
parkingGarage.leaveGarage();
