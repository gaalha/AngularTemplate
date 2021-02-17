export abstract class BaseForm {

  protected serializeObject(object: any): string {
    return Object.entries(object).map(([key, val]) => `${key}=${val}`).join('&');
  }

  protected serializeJSON(object: any): string {
    return JSON.stringify(object);
  }

}
