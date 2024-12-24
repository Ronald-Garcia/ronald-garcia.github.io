import { getProjectById } from "@/lib/store";
import Page from "./shared/page";

const ProjectPage = () => {

    return <Page getById={getProjectById}></Page>
}

export default ProjectPage;