export class AppTab {
    constructor(public name: string, 
        public description: string,
        public icon: string,
        public menuItems?: MenuItem[]) {}
    get classes(): any {
        return {
            'slds-context-bar__item': true,
            'slds-context-bar__dropdown-trigger': this.hasItems,
            'slds-dropdown-trigger': this.hasItems,
            'slds-dropdown-trigger--hover': this.hasItems
        };
    }
    get hasItems(): boolean {
        return this.menuItems && this.menuItems.length > 0;
    }
}

export class MenuItem {
    constructor(public name: string,
        public description?: string) {}
}