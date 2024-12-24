import { atom } from "nanostores";
import ECG_active_filter from "../components/data/active_filter.jpg"
import ECG_complete from "../components/data/complete_circuit.jpg";
import ECG_start_instrumentation from "../components/data/start_of_instrumentation.jpg";
import ECG_instrumentation from "../components/data/instrumentation_amp.jpg";
import DSF_complete from "../components/data/completed_circuit.jpg";
import ENGINE_complete from "../components/data/completed_engine.jpg";
import CRANE_struct from "../components/data/crane_structural.jpg";
import CRANE_transmission from "../components/data/crane_transmission.jpg";
import CAR_final from "../components/data/final_car (1).jpg";
import CAR_proto1 from "../components/data/prototype_car_1 (1).jpg";
import CAR_proto2 from "../components/data/prototype_car_2 (1).jpg";
import PIANO_final from "../components/data/piano_final.jpg";
import RA_shot from "../components/data/RonaldGarcia_RA.jpg";
import MANU_TA_thumbnail from "../components/data/ToolLight.gif";

import WEBSITE_final from "../components/data/website.png";

let pid = 1;
// let aid = 1;
let rid = 1;


export type RoleType = {
    id: number,
    name: string,
    description: string,
    dateStarted: Date,
    dateEnded: Date | "Now",
    sections: SectionType[],
    thumbnail: ImageType,
    skills: string[],
    files?: FileType[]
}
// type AboutMeType = {
//     id: number,
//     name: string,
//     description: string,
//     dateStarted: Date,
//     dateEnded: Date,
//     image: ImageType,
// }

export type ProjectType = {
    id: number,
    name: string,
    description: string,
    dateStarted: Date,
    dateEnded: Date | "Now",
    sections: SectionType[],
    thumbnail: ImageType,
    skills: string[],
    files?: FileType[]
}

// type WorkType = {
//     id: number,
//     name: string,
//     description: string,
//     dateStarted: Date,
//     dateEnded: Date | "Now",
//     sections: SectionType[],
//     sthumbnail: ImageType,
//     skills: string[],
//     files?: FileType[]
// }

export type SectionType = {
    title: string,
    content: string,
    images?: ImageType[]
}

export type ImageType = {
    url: string,
    caption: string
}

export type FileType = {
    url: string,
    title: string
}

const createSection = (title: string, content: string, images: ImageType[] = []) => {
    const newSection: SectionType = {
        title,
        content,
        images: images || null,
    }
    return newSection;
}

const createProject = (
    {
        name,
        description,
        dateStarted = new Date(),
        dateEnded = new Date(),
        sections = [],
        thumbnail = {
            url: "",
            caption: ""
        },
        skills = [],
        files = undefined
    } : {
        name: string,
        description: string,
        dateStarted?: Date,
        dateEnded?: Date | "Now",
        sections?: SectionType[]
        thumbnail?: ImageType,
        skills?: string[],
        files?: FileType[] | undefined
    }
) => {
    const newProject: ProjectType = {
        id: pid,
        name,
        description,
        dateStarted,
        dateEnded,
        sections,
        thumbnail,
        skills,
        files
    }
    pid = pid + 1;

    return newProject;
}


const createRole = (
    {
        name,
        description,
        dateStarted = new Date(),
        dateEnded = new Date(),
        sections = [],
        thumbnail = {
            url: "",
            caption: ""
        },
        skills = [],
        files = undefined
    } : {
        name: string,
        description: string,
        dateStarted?: Date,
        dateEnded?: Date | "Now",
        sections?: SectionType[]
        thumbnail?: ImageType,
        skills?: string[],
        files?: FileType[] | undefined
    }
) => {
    const newRole: RoleType = {
        id: rid,
        name,
        description,
        dateStarted,
        dateEnded,
        sections,
        thumbnail,
        skills,
        files
    }
    rid = rid + 1;

    return newRole;
}
/** 
 * --- TODO ---
 * Description of all the parts manufactured.
 * Accompanying image.
 */
const stirling_engine = createProject({
    name: "Stirling Engine",
    description: "Designing and manufacturing a Stirling Engine from scratch!",
    sections: [
        createSection("Overview",
            `Using partially completed engineering drawings and a machine shop, we had a spring semester to
            manufacture a stirling engine from scratch. The goal was to be able to run the engine for a minute
            using a Bunsen burner.`
        ),
        createSection("Design",
            `Each part of the stirling engine is built with a unique manufacturing method. 
            The base plate (1) is manufactured using the Waterjet.`
        )
    ],
    dateStarted: new Date(2024, 0),
    dateEnded: new Date(2024, 5),
    thumbnail: 
        {
            url: ENGINE_complete,
            caption: "The completed stirling engine."
        },
    skills: [
        "Manufacturing and design of a complex assembly.",
        "Usage of a Lathe, Mill, Bandsaw, Waterjet, and Welding.",
        "Experience in sheet metal processes.",
        "Interpreting and creating Solidworks Engineering Drawings"
    ]
});

// COMPLETED!
const crane_project = createProject({
    name: "Acrylic Crane",
    description: "WSE Mechanical Engineering competition! Designing and manufacturing a crane from scratch with design restrictions!",
    dateStarted: new Date(2024, 0),
    dateEnded: new Date(2024, 5),
    thumbnail: 
        {
            url: CRANE_struct,
            caption: "The structure of the crane."
        },
    sections: [
        createSection("Overview",
            `Teams of students are challenged to design a crane with certain design restrictions to meet certain specifications by the end of the Spring semester.
            Our team was PGH Inc. (the initials of our last names).`
        ),
        createSection("Design Restrictions",
            `The crane must be constructed from a plastic material (no 3D printer or other rapid-prototyping method) purchased from McMaster-Carr. 
            Without a lever-based design, the parts used in the crane must not surpass $25.00.`,
        ),
        createSection("Design Specifications", 
            `The crane must be able to lift a 10lb weight off the ground by one inch within two minutes
            without deflecting more than half an inch. The power source of the crane must be the ROB-12125 gearmotor.
            To learn more about the specifications and restrictions, see the files below.`
        ),  
        createSection("Results and Reactions",
            `Initially, we had thought the crane boom stability would have been the main obstacle to overcome. After manufacturing all the parts, we realized the
            stability of the gearbox was the biggest issue; there was not enough supports between the baseplate and the gearbox to prevent it from displacing a 
            significant amount. This displacement caused our gears to misalign, preventing efficient transmission of power. To solve this, we used a pulley to halve
            the effective weight being pulled by the gearbox. We tested the old design with a five pound weight and confirmed that the gearbox was able to lift five pounds without
            displacing a significant amount. With this addition, we were the fastest group in our competition bracket.`,
            [
                {
                    url: CRANE_transmission,
                    caption: "The power transmission system of the crane. It has a gear ratio of 9."    
                }
            ]
        )
    ],
    skills: [
        "Following the Engineering Design Process in a team.",
        "Designing assemblies and moving parts in SolidWorks.",
        "Machining with acrylic and aluminum on the mill and lathe.",
        "Professionally communicating using Typst/Latex.",
        "Designing transmission systems using gears and pulleys.",
        "Systematically deciding design factors and implementing them into calculations."
    ],
    files: [
        {
            url: "../../MBD Lab Design Project assignment handout 2024.pdf",
            title: "Competition specifications and restrictions."
        },
        {
            url: "../../Crane Design Report.pdf",
            title: "PGH Inc.'s report."
        }
    ]
    
});

/**
 * --- TODO ---
 * Sections describing how I worked with Harry.
 * Images of old and new systems, once they are installed.
 */
const gatekeeper_project = createProject({
    name: "Gatekeeper Redesign.",
    description: "Identification system for the machine shop redesigned! The previously implemented identification system used a finger print for authorization. ",
    dateStarted: new Date(2023, 7),
    dateEnded: "Now",
    sections: [
        createSection("Overview",
            `The WSE student shop provided by the mechanical engineering department had a safety concern with their machines. Without proper training, these machines are dangerous and accident-prone.
            To prevent possible accidents, the shop wanted an identification system where students would only be allow to use the machines
            if they have received proper training. The initial solution was to use a finger print system
            that would save finger prints of those who have been trained. After some time, this solution's technology became
            too difficult to maintain, and another solution was needed.`

        ),
        createSection("New Solution",
            `To overcome the maintenance of the fingerprint sensors, we are taking advantage of the fact that all students
            and staff of The Johns Hopkins University have a JCard, which has a unique JCard ID (shortened to JID). With this number, each account could be uniquely associated
            by this JID. With this idea in mind, I recreated the software and application that allows students to interact
            with the gatekeeper system.`
        )
        
    ],
    skills: [
        "Implementing a full-stack React.TS application scaffolded with Vite and using shad-cn components.",
        "Experience with drizzle and bettersqlite3 to store many-to-many and one-to-many relationships between tables.",
        "Ability to compromise with clients about features that are ideal and features that are feasible.",
        "Experience with implementing a system on a Raspberry Pi that sends signals through gpio signals.",
        "Bug tested a previously individually made PCB to replace it."
    ],
    files: [
        {
            url: "https://github.com/Ronald-Garcia/gatekeeper",
            title: "Github Repository"
        }
    ]
})

// COMPLETED!
const website_project = createProject({
    name: "This Website!",
    description: "Scaffolded with vite and implemented using the React framework and shadcn-ui components.",
    dateStarted: new Date(2024, 5),
    dateEnded: "Now",
    thumbnail: 
    {
        url: WEBSITE_final,
        caption: "The Projects page of my website."
    },
    sections: [
        createSection("Overview",
            `After having experienced and learned so many things, I found it difficult to keep track of it all.
            To quench my creative thirst, I thought of starting to develop my own website, as this would not only
            help me keep track of what I've done, but also make it easy to showcase it to others who are interested.`
        )
    ],
    skills: [
        "Experience developing a React.ts application with shadcn components.",
        "Wrote about my experiences and designed a website.",
    ],
    files: [
        {
            url: "https://github.com/Ronald-Garcia/Ronald-Garcia.github.io.git",
            title: "Github Repository"    
        }        
    ]
})

// COMPLETED!
const piano_project = createProject({
    name: "Arduino-Powered Piano!",
    description: "WSE Mechanical Engineering exhibition! An exhibit displaying the cultures of different through a series of games.",
    dateStarted: new Date(2023, 0),
    dateEnded: new Date(2023, 5),
    thumbnail: {
            url: PIANO_final,
            caption: "The final piano structure, with arduino circuits on the inside."
        },
    sections: [
        createSection("Overview",
            `Teams of students are challenged to design an arduino circuit-integrated exhibit to be displayed for Johns Hopkins University.`
        ),
        createSection("Design Specifications",
            `As part of the design, there were certain specifications our design had to fulfill. 
            The design should fit through a doorway with minimal disassembly. The exhibit itself
            must be able to be controlled by any audience member with at least one sensor and one
            control device. The exhibit must react by moving, making lights or sounds, and be continuous.
            The budget of the exhibit is 50 dollars.`
        ),
        createSection("Results and Reactions",
            `Initially, we had thought the programming and circuitry of the game would have been the biggest obstacle to overcome. After completing the code, however, we realized that the
            most difficult aspect is the physical design of the piano, as well as implementing the controlling mechanism (the piano keys). 
            With most of our limited budget already spent on arduino components to make the game function, we had very little money to figure out
            the best way to create realistic feeling piano keys. To solve this, we used a rubberband in tension to imitate the button "springing back" to place.
            This solution does not survive fatigue, however, which was something to be improved in further iterations. The arduino itself worked phenominally, but
            the physical interface had some aspects that could be improvd. This is where I learned that it is important to factor in physical interface
            into account when implementing the software interface. If we had considered that the piano keys had to spring back, we would have sought out for 
            arduino buttons that have this feature built in.`,
        )
    ],
    skills: [
        "Working in a team",
        "Working with an Arduino to develop a reactive control system.",
        "Programming with C++ to program an Arduino.",
        "Woodworking with a jigsaw and drill to create a wooden piano.",
        "Budgeting 50 dollars to develop an exhibit.",
        "Used SolidWORKS to create assembly drawings of each of the manufactured parts.",
    ],
    files: [
        {
            url: "../../MechE Final Design Report (2).pdf",
            title: "Final Report"
        }
    ]
    
})

// COMPLETED!
const car_project = createProject({
    name: "Mechanically Powered Car",
    description: "WSE Mechanical Engineering competition! A race to see which design places first in the Mechanical Engineering class of 2026.",
    dateStarted: new Date(2022, 7),
    dateEnded: new Date(2022, 11),
    thumbnail: 
        {
            url: CAR_proto1,
            caption: "The structural prototype of the car."
        },
    sections: [
        createSection("Overview",
            `Teams of students are challenged to design a mechanically powered car and a mechanical charging device with certain design restrictions to meet certain specifications by the end of the Fall semester. The energy that the charging device receives must be from a falling 5lb weight`
        ),
        createSection("Design Restrictions",
            `The vehicle constructed must remain on the floor at all times using wheels. There must be no electronic components, the energy stored from the falling weight must be mechanically stored.
            The car must be constructed out of wood. The budget is $25.00.`,
        ),
        createSection("Results and Reactions",
            `Initially, we had thought the mechanical car design would have been the main obstacle to overcome. After prototyping and manufacturing the car, we realized we had not
            put enough consideration into the charging device. Our actual mechanical car design worked very well. We used a freewheel mechanism 
            to allow rotation in one direction, but not the other. This would allow the charging device to wind up the rubber band attached
            to the freewheel mechanism (this would not rotate the wheels). When released, the tension of the rubber band pulls the wheel to the other side that actually
            rotates the wheels, propelling it forward. This was very effective, the only issue being fatigue (the rubber bands would break after some iterations). A way to 
            fix this would be to calculate the exact specifications of the rubber band, as we used spare rubber bands.`,
            [
                {
                    url: CAR_proto2,
                    caption: "The freewheel mechanism of our car, allowing it to rotate it one direction but not the other."    
                },
                {
                    url: CAR_final,
                    caption: "Our final design, with a weight to prevent the car from misaligning from a straight line."
                }
            ]
        ),
    ],
    skills: [
        "Woodworking with a laser cutter and a saw.",
        "Using Solidworks to design and put together an assembly.",
        "Using physics to design a mechanical system.",
        "Working in a team to design a mechanical system."
    ]
})

// COMPLETED!
const dsf_project = createProject({
    name: "Digital Security!",
    description: "A four digit pin that runs on digital logic!",
    dateStarted: new Date(2024, 0),
    dateEnded: new Date(2024, 5),
    thumbnail: 
    {
        url: DSF_complete,
        caption: "The completed circuit."
    },
    sections: [
        createSection("Overview",
            `Teams of students were challenged to design a finite-state machine
            using digital logic gates. Our team wanted to design a four-digit pin.`),
        
        createSection("Design Challenges", 
        `When trying to design this system, we had to factor in not only the actual digital logic (achieved through K-maps and FSM diagrams),
        but we also had to consider the physical hardware itself. We had to deal with testing and assess whether or not certain chips were acting
        as expected. As a result, most of the implementation process was debugging the circuit.`),
        
        createSection("Project Features",
            `We implemented a 4 digit keypad with a fixed passcode that had buttons for input
            for numbers 0-9. On the rising edge, the current button being pressed would be added to the passcode input string.
            When the submit button is pressed, the LEDs would light up red if the passcode was incorrect, or flash green if it was correct. The
            system would stay in this state until another button was pressed. More details (how did we come up with the logic?) can be found in the final report.`
        )

    ],
    skills: [
        "Using Karnaugh maps to design a finite-state machine and a digital circuit.",
        "Using Logism to plan out a digital circuit.",
        "Using Finite-State Machine diagrams to plan out a digital system.",
        "Parsing through Digikey and Adafruit datasheets to design circuits.",
        "Using oscilliscopes to debug physical circuits."
    ],
    files: [
        {
            url: "../../DSF Final Project Report (1).pdf",
            title: "Final Report"
        }
    ]
    
})

// COMPLETED!
const ecg_project = createProject({
    name: "Lightweight ECG.",
    description: "An ECG to read pulses using elementary analog components! This includes an instrumentation amplifer with a gain of 500. Tested and prototyped with LTSpice and Scopy.",
    dateStarted: new Date(2023, 7),
    dateEnded: new Date(2023, 11),
    thumbnail: 
        {
            url: ECG_complete,
            caption: "The completed circuit."
        },
    sections: [
        createSection("Overview", 
            `Students were tasked with individually creating a functioning ECG on a breadboard using a provided toolkit.
        `),
        createSection("Initial try",
            `When first trying to develop this system, I started with the development of the instrumentation amplifier. 
            The benefits of using an instrumentation amplifier, especially in the context of an ECG, is that it allows
            the system to filter out common noise. The heart is not unique in its ability to send a signal that can 
            be read; every muscle creates a signal. To reduce the effect these sources of noise have on the 
            desired output, an instrumentation amplifier is able to filter out common noise by taking the difference between the two
            measuring nodes. This allows for the heart signal to show up, as any noise found from a common muscle is removed.
            `,
            [
                {
                    url: ECG_start_instrumentation,
                    caption: "The start of the development of the instrumentation amplifier. More details can be found below in the final report."
                },
                {
                    url: ECG_instrumentation,
                    caption: "The completed development of the instrumentation amplifier. More details can be found below in the final report."
                }
            ],
        ),
        createSection("Notch Filter",
            `I was advised that a large component of noise would be the 60Hz noise that is found in homes from normal circuitry.
            To single out these signals, I used a notch filter (the discussion of the development of the notch filter can be found in the final report.)`
        ),
        createSection("Results & Reactions",
            `After prototyping in LTSpice and using Scopy to test, I finally developed the circuit on a breadboard. 
            There were difficulties actually implementing the circuit, as ideal resistor values used in the simulations do not 
            consider resistor standards (and the resistors I had access to). As a result, I had to modify the simulation to play around with different 
            component values (like capacitors and resistors, having to combine components in series or in parallel to reach the 
            desired value). I realized that there seemed to be noise on the output that could not be simply removed using
            a passive filter. As a result, I had to use an active filter on the output to ensure an accurate signal would output.`,
            [
                {
                    url: ECG_active_filter,
                    caption: "The active filter for the output."
                },
                {
                    url: ECG_complete,
                    caption: "The completed breadboard of the ECG."
                }
            ]
        )
    ],

    files: [
        {
            url: "../../Final Project Mastering (2).pdf",
            title: "Final Report"
        }
    ]
            
})

export const $projectList = atom<ProjectType[]>([

    stirling_engine,
    crane_project,
    gatekeeper_project,
    website_project,
    piano_project,
    car_project,
    dsf_project,
    ecg_project
]);

export const getProjectById = (id: number) => {
    return $projectList.get().find(p => p.id === id);
}

export const getAllProjects = () => {
    return $projectList.get().sort((p1, p2) => p2.dateStarted.getTime() - p1.dateStarted.getTime());
}


const ra_role = createRole({
    name: "Johns Hopkins Resident Advisor",
    description: "Enhancing community for Johns Hopkins students!",
    dateStarted: new Date(2024, 8),
    dateEnded: "Now",
    thumbnail: {
        url: RA_shot,
        caption: "RA Headshot"
    },
    sections: [
        createSection("Overview",
            "I worked in a close-knit team of 75 other students to foster community for the freshman-sophomore classes of Johns Hopkins University. This includes budgeting and hosting events, ensuring the safety of students, and fostering a welcoming community.",
        )
    ],
    skills: [
        "Budgeting and hosting events for students",
        "Designing flyers on Canva",
        "Working in a diverse team of students, and providing for a diverse community",
        "DEI trained",
        "Trained to handle emergency situations with students"
    ]
})


const manufact_ta_role = createRole({
    name: "Manufacturing Student TA",
    description: "Working with the machinists of Johns Hopkins' WSE department to develop solutions for other entities affiliated with campus!",
    dateStarted: new Date(2023, 8),
    dateEnded: "Now",
    thumbnail: {
        url: MANU_TA_thumbnail,
        caption: "A close up of a milling operation."
    },
    sections: [
        createSection("Overview",
            "I worked with the WSE Machine Shop to provide services for JHU affiliates! This includes experiment apparatuses, integrated systems (like WSE Identify!), and other machineable parts!",
        ),
    ],
    skills: [
        "Integrated Mechanical Engineering principles with Computer Engineering ideas!",
        "PCB analysis",
        "Advanced Solidworks design",
        "Meeting and consulting with clients about experimenting apparatus",
        "WSE Identify (see projects tab!)",
        "Working with fellow students and machinists",
        "Experience with 3D printing on a Stratasys F370 printer",
        "Usage of the Mill, Lathe, Wire EDM, and Waterjet"
    ],
})

const learning_den_role = createRole({
    name: "Johns Hopkins University Learning Den Tutor",
    description: "One-on-one personalized tutoring for students in the class of their choice!",
    dateStarted: new Date(2023, 8),
    dateEnded: "Now",
    sections: [
        createSection("Overview",
            "I design personalized tutoring sessions for over 20 students that request personalized tutoring through the application Penji."
        ),
        createSection("Classes Tutored",
            `Calculus I, II for Biological sciences and Engineers,
            
            Calculus III,
            
            Differential Equations,
            
            Linear Algebra,
            
            Electronics & Instrumentation I,
            
            Intro to Mechanics I & II,
            
            Mechanics-Based Design,
            
            Thermodynamics,
            
            Statics & Mechanics of Materials,
            
            Dynamics,
            
            Intermediate Programming,
            
            Data Structures,
            
            Computer System Fundamentals,
            
            Gateway series of programming classes,
            
            Fullstack Javascript`
        )
    ],
    skills: [
        "Developing lesson plans for students in subjects at all college levels.",
        "Writing up documents using LaTeX and Typst",
    ]
})

const cap_ed_role = createRole({
    name: "Capital Educators SAT Teacher",
    description: "Teach a class of no more than 10 high school students on a weekly basis!",
    dateStarted: new Date(2024, 0),
    dateEnded: "Now",
    sections: [
        createSection("Overview",
            "Teach a class of no more than 10 high school students to improve their SAT/ACT scores by over 200 points. This involves practicing lesson plans to teach not only the mathematical topics, but also test taking techniques."
        )
    ],
    skills: [
        "Effectively teaching to a small class size of high school students",
        "Synthesizing information into an engaging presentation"
    ]
})

const physics_la_role = createRole({
    name: "Learning Assistant for Johns Hopkins Physics",
    description: "Hosting office hours and leading TA sections for Physics at Hopkins!",
    dateStarted: new Date(2024, 0),
    dateEnded: "Now",
    sections: [
        createSection("Overview",
            "Lead TA sections and office hours for Physics at Hopkins! Learned to teach difficult material in a simple way, adjusting based on the students. Collaborated with TAs to conduct sections."
        )
    ],
    skills: [
        "Presenting course material in a format that is easy for students to understand",
        "Insight on physical intuition that aids explanation and interpretation of physics problems",
        "Teaching using a mix of Socratic and explanatory structures."
    ]
})

const peer_leader_role = createRole({
    name: "Hop-In Peer Leader",
    description: "Fostered community amongst 40 incoming First-generation limited income (FLI) students!",
    dateStarted: new Date(2023, 5),
    dateEnded: new Date(2024, 4),

})

export const $roleList = atom<RoleType[]>([
    ra_role,
    manufact_ta_role,
    learning_den_role,
    cap_ed_role,
    physics_la_role,
    peer_leader_role
])

export const getRoleById = (id: number) => {
    return $roleList.get().find(r => r.id === id)
}

export const getAllRoles = () => {
    return $roleList.get().sort((r1, r2) => r2.dateStarted.getTime() - r1.dateStarted.getTime());
}
/*
const createAboutMe = ({
    name,
    description,
    dateStarted= new Date(),
    dateEnded= new Date(),
    image
}: AboutMeType): AboutMeType => {
    const newAboutMe = {
        id: aid,
        name,
        description,
        dateEnded,
        dateStarted,
        image
    }
    aid = aid + 1;

    return newAboutMe;
}

export const $aboutMeList = atom<AboutMeType[]>([
    

]);

*/