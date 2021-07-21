enum Role {
  Doctor,
  Anestesista,
  Asistente,
  Administrativo,
}

interface Staff {
  name: string;
  email: string;
  role: Role;
}

interface Billable {
    total: number,
    currentBill(): string,
}

const medico = {
  name: "Martin",
  email: "martin@email.com",
  role: Role.Doctor,
  total: 25,
  currentBill() {
      return `Valor actual de la factura es de ${this.total}`;
  }
};

const printStaff = (staff: Staff) => {
  console.log(staff);
};

const printCurrentBill = (bill: Billable) => {
    console.log(bill.currentBill())
}

printStaff(medico);
printCurrentBill(medico);
