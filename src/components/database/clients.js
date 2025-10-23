// src/database/clients.js
const clients = [
  { id: 1,  name: "John Smith",        contact: "+1 555-1234",        email: "john.smith@example.com",            country: "USA" },
  { id: 2,  name: "Emma Johnson",      contact: "+44 7700 123456",     email: "emma.johnson@example.co.uk",        country: "UK" },
  { id: 3,  name: "Liam Brown",        contact: "+61 400 111 222",     email: "liam.brown@example.com.au",         country: "Australia" },
  { id: 4,  name: "Sophia Davis",      contact: "+33 6 12 34 56 78",   email: "sophia.davis@example.fr",            country: "France" },
  { id: 5,  name: "Noah Wilson",       contact: "+49 151 1234567",     email: "noah.wilson@example.de",             country: "Germany" },
  { id: 6,  name: "Olivia Miller",     contact: "+34 612 345 678",     email: "olivia.miller@example.es",           country: "Spain" },
  { id: 7,  name: "James Taylor",      contact: "+39 333 1234567",     email: "james.taylor@example.it",            country: "Italy" },
  { id: 8,  name: "Ava Anderson",      contact: "+46 70 123 45 67",    email: "ava.anderson@example.se",            country: "Sweden" },
  { id: 9,  name: "Ethan Martinez",    contact: "+52 55 1234 5678",    email: "ethan.martinez@example.mx",          country: "Mexico" },
  { id: 10, name: "Mia Garcia",        contact: "+55 11 91234 5678",   email: "mia.garcia@example.br",              country: "Brazil" },
  { id: 11, name: "Alexander Lee",     contact: "+82 10-1234-5678",    email: "alexander.lee@example.kr",           country: "South Korea" },
  { id: 12, name: "Isabella Martinez", contact: "+34 699 123 456",     email: "isabella.martinez@example.es",       country: "Spain" },
  { id: 13, name: "Benjamin Kim",      contact: "+81 90-1234-5678",    email: "benjamin.kim@example.jp",            country: "Japan" },
  { id: 14, name: "Charlotte Thompson",contact: "+31 6 1234 5678",     email: "charlotte.thompson@example.nl",      country: "Netherlands" },
  { id: 15, name: "Daniel White",      contact: "+1 415-555-5678",     email: "daniel.white@example.com",           country: "USA" },
  { id: 16, name: "Amelia Harris",     contact: "+44 7911 123456",     email: "amelia.harris@example.co.uk",        country: "UK" },
  { id: 17, name: "William Clark",     contact: "+7 901 123 45 67",    email: "william.clark@example.ru",           country: "Russia" },
  { id: 18, name: "Evelyn Lewis",      contact: "+91 98765 43210",     email: "evelyn.lewis@example.in",            country: "India" },
  { id: 19, name: "Michael Walker",    contact: "+27 82 123 4567",     email: "michael.walker@example.za",          country: "South Africa" },
  { id: 20, name: "Harper Hall",       contact: "+64 21 123 4567",     email: "harper.hall@example.nz",             country: "New Zealand" }
];

export default clients;
// Если хочешь именованный экспорт — раскомментируй строку ниже и меняй импорт:
// export { clients };
