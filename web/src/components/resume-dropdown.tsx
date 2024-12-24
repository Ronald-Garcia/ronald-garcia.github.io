import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const ResumeDropdown = () => {
    return (<DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="link">Resumes</Button>    
        </DropdownMenuTrigger>

        <DropdownMenuContent>
            <DropdownMenuItem>
                <p className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline p-4" 
                onClick={() => {
                    window.open("../../public/Ronald_Garcia___Resume_EduMent.pdf");
                }}>Computer Science</p>        
            </DropdownMenuItem>
            <DropdownMenuItem>
                <p className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline p-4" 
                onClick={() => {
                    window.open("../../public/Ronald_Garcia___Resume_EduMent.pdf");
                }}>Mechanical Engineering</p>        
            </DropdownMenuItem>
            <DropdownMenuItem>
                <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline p-4" 
                href="../../public/Ronald_Garcia___Resume_EduMent.pdf" download>Education/Mentoring</a>        
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    );
}

export default ResumeDropdown;