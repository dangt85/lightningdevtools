import { AppTab, MenuItem } from "../shared/app-tab";

export const tabs = [
    new AppTab('Data Diff', 'Select sObjects and compare data between two instances.', 'relationship'),
    new AppTab('Copy Data', 'Select sObjects and copy data from a source instance into a target instance.', 'product_item_transaction'),
    new AppTab('Mock Data Generator', 'Select an sObject from an org and generate mock data for this sObject. Then choose to export as .csv or load the data into the org.', 'process'),
    new AppTab('Test Data Generator', 'Select an sObject from an org and generate a static resource with a .csv file with the data for this sObject to be used in an Apex Test class.', 'poll'),
];