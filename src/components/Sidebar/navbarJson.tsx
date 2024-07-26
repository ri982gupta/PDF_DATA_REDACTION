import { IconNames } from "@blueprintjs/icons";

export const iconMapping = {
  person: IconNames.Person,
  applications: IconNames.Applications,
  labTest: IconNames.LabTest,
  database: IconNames.Database,
  automaticUpdates: IconNames.AutomaticUpdates,
  dataconnection: IconNames.DataConnection,
  build: IconNames.Build,
  schedule : IconNames.TimelineEvents,
  jobs: IconNames.Form,
  history: IconNames.History,
  home: IconNames.HOME,
  audit: IconNames.Saved,
  dashboard: IconNames.Dashboard,
  panelStats: IconNames.PanelStats,
};



export const sidebarJson = [
  {
    path: "/upload-document",
    name: "Upload Document",
    icon: iconMapping.jobs,
    roleId: [1, 2, 3, 5],
    subMenu: [],
  },
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: iconMapping.dashboard,
    roleId: [1, 2, 3],
    subMenu: [],
  },
 
];
