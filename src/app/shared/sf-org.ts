export class SFOrg {
  constructor(public name: string, 
    public type: string = 'production', 
    public oauth?: any,
    public customURL?: string) {}
    
  get loginURL(): string {
    switch (this.type) {
      case 'production':
        return 'https://login.salesforce.com';
      
      case 'sandbox':
        return 'https://test.salesforce.com';
      
      case 'custom':
        return this.customURL;
    
      default:
        'https://login.salesforce.com';
    }
  }
}