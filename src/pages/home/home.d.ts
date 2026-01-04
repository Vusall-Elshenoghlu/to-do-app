
// home.d.ts

import {ISidebarProject} from "../../core/layouts/public/components/left-menu/left-menu";

export interface IHomeState {
    projects: ISidebarProject[];
    activeProjectId?: string;
    loading: boolean;
}
