import { $router } from "@/lib/router";
import { FileType, ImageType, ProjectType, RoleType, SectionType } from "@/lib/store";
import { useStore } from "@nanostores/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "@/components/ui/separator";
import { FileTextIcon } from "@radix-ui/react-icons";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";



const Page = ({getById}: {getById: (id: number) => RoleType | ProjectType | undefined}) => {

    const page = useStore($router);

    const [skillsList, setSkillsList] = useState<string[]>([]);
    const [filesList, setFilesList] = useState<FileType[]>([]);
    const [sectionList, setSectionList] = useState<SectionType[]>([]);
    const [thumbnail, setThumbnail] = useState<ImageType>({ url: "", caption: ""});

    if (!page || (page.route !== "project" && page.route !== "role") ) {
        return null;
    }
    const project = getById(parseInt(page.params.id));

    if (!project) {
        return (
            <>
                Project not found!
            </>
        )
    }
    useEffect(() => {
        if (project.files) {
            setFilesList(project.files)
        } 

        setSkillsList(project.skills);
        setSectionList(project.sections);
        setThumbnail(project.thumbnail);
    }, [project])


    return (
        <>
            <Card>
                <CardContent>
                    <CardHeader className="flex-row space-x-[100px]">
                        <div>
                        <CardTitle className="text-lg">
                            {project.name}
                        </CardTitle>
                        <CardDescription>
                            {project.description}
                        </CardDescription>
                        <p className="text-xs font-light">
                            {project.dateEnded !== "Now" ? project.dateStarted.toLocaleDateString("en-US", {
                                day: project.dateStarted.getMonth() === project.dateEnded.getMonth() ? 'numeric' : undefined,
                                month: 'short',
                                year: 'numeric',
                            }) : project.dateStarted.toLocaleDateString("en-US", {
                                month: 'short',
                                year: 'numeric',
                            })} - {project.dateEnded !== "Now" ? project.dateEnded.toLocaleDateString("en-US",{
                                day: project.dateStarted.getMonth() === project.dateEnded.getMonth() ? 'numeric' : undefined,
                                month: "short",
                                year: "numeric"
                            }) : "now"}
                        </p>

                        </div>
                        <div className="w-[200px] rounded-lg">
                            <img
                            className="rounded-[25px]"
                            src={thumbnail.url}>
                            </img>
                            <p className="font-light text-[8pt]">
                                {thumbnail.caption}
                            </p>
                        </div>
                    </CardHeader>

                    <Separator></Separator>
                    <div className="p-10 flex-col space-y-5">
                        {sectionList.map(s => {
                            return (
                                <div key={s.title + s.content}>
                                    <p 
                                        key={s.title}
                                        className="text-left text-md font-medium">
                                        {s.title}
                                    </p>
                                    <p  
                                        className="text-left text-sm font-light"
                                        key={s.content}>
                                        {s.content}
                                    </p>
                                    { s.images && <div key={s.title + s.content}
                                    className="flex justify-center gap-2">
                                            {s.images.map(i => {
                                            
                                            return (
                                                <div className="w-[200px] rounded-lg">
                                                <img
                                                    className="rounded-[25px]"
                                                    src={i.url}>
                                                </img>
                                                <p className="font-light text-[8pt]">
                                                    {i.caption}
                                                </p>
                                                </div>
                                            );
                                        })}
                                    
                                    </div>}

                                </div>                                
                            );
                        })}
                        <Separator></Separator>
                        <div>
                            <p className="text-md font-bold">
                                Skills
                            </p>
                            <ul
                                className="list-disc">
                                {skillsList.map(s => {
                                    return (
                                        <li key={`${project.id} skills ${s}`}>
                                            <p className="text-sm font-thin">
                                                {s}
                                            </p>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                        {project.files && <div>
                            <p 
                                key={project.id}
                                className="text-md font-bold">
                                Files/Links
                            </p>
                            <ul>
                                {filesList.map(f => {
                                    return (
                                        <li key={`${project.id} files ${f.title}`}>

                                            <Button
                                                variant="link"
                                                className="text-sm font-thin w-fit"
                                                onClick={() => {
                                                    window.open(f.url);
                                                }}>
                                            <div className="flex w-fit">
                                                <FileTextIcon>
                                                </FileTextIcon>        
                                                {f.title}
                                            </div>
                                            </Button>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>}
                    </div>

                </CardContent>
            </Card>
        </>
    );
}

export default Page;