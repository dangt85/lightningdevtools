import { AppTab, MenuItem } from "../shared/app-tab";

export const tabs = [
    new AppTab('Metadata Diff', 'Select and compare metadata between two instances.', 'drafts'),
    new AppTab('Package Creator', 'Select metadata from one instance and export it.', 'product', [
        new MenuItem('Generate package.xml'),
        new MenuItem('Generate Force.com IDE Project'),
        new MenuItem('Generate SFDX Workspace')
    ]),
    new AppTab('Deploy Tools', 'Plan, validate or deploy code.', 'product_request', [
        new MenuItem('Simple Deploy'),
        new MenuItem('Validate Package'),
        new MenuItem('Deploy Package'),
        new MenuItem('Schedule Package Deploy'),
        new MenuItem('Create SF Deploy Button'),
        new MenuItem('Create Heroku Deploy Button')
    ])
];