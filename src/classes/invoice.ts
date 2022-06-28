 export class Invoice {
    constructor(
      readonly client: string,
      readonly details: string,
      public amount: number
    ) {}
  
    format() {
      return `${this.client} owes €${this.amount} for ${this.details}`;
    }
  }
  