export default class ValuePair {
  constructor(public key: any = key, public value: any = value) {}

  toString(): string {
    return `[#${this.key}]: ${this.value}`;
  }
}
