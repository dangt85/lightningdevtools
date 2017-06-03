import { AppTab, MenuItem } from "../shared/app-tab";

export const tabs = [
    new AppTab('Metadata Diff'),
    new AppTab('Package Creator', [
        new MenuItem('Generate package.xml'),
        new MenuItem('Generate Force.com IDE Project'),
        new MenuItem('Generate SFDX Workspace')
    ]),
    new AppTab('Deploy Tools', [
        new MenuItem('Simple Deploy'),
        new MenuItem('Validate Package'),
        new MenuItem('Deploy Package'),
        new MenuItem('Schedule Package Deploy'),
        new MenuItem('Create SF Deploy Button'),
        new MenuItem('Create Heroku Deploy Button')
    ])
];