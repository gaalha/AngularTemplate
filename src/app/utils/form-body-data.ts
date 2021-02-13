export class FormBodyData {

  data: any;

  constructor() {
    this.data = new Map();
  }

  public set(key: string, value: string): void {
    this.data.set(key, value);
  }

  public get(key: string): string {
    if (!this.data.has(key)) { return null; }
    return this.data.get(key);
  }

  public toString(): string {
    const builder = [];

    for (const entry of this.data.entries()) {
      builder.push(entry[0] + '=' + entry[1]);
    }

    return builder.join('&');
  }

}
