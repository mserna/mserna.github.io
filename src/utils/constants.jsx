import ESLogo from "../resources/es.jpg";
import CiscoLogo from "../resources/cisco.png";
import AutodeskLogo from "../resources/autodesk.png";
import VitalLogo from "../resources/vital-logo.svg";
import BFLogo from "../resources/bf.png";
import SDSLogo from "../resources/sds_light.png";
import GithubLogo from "../resources/git-white.png";
import PitcherPlots from "../resources/pitcher-plots.png";
import HobbyMe from "../resources/HobbyMe.png";
import Wridr from "../resources/wridr.png";
import SFSULogo from "../resources/sfsu.png";
import CourseraLogo from "../resources/coursera.svg";

export const timeout = 1000;
export const timeout2 = 2500;

export const work = [
    {
        company: "Sony San Diego Studio",
        position: "Frontend Logic Programmer",
        date: "2022-",
        url: "https://sonysandiegostudio.games/",
        image: SDSLogo,
    },
    {
        company: "Element Science",
        position: "Software Engineer II",
        date: "2019-2022",
        url: "https://www.elementscience.com/",
        image: ESLogo,
    },
    {
        company: "Cisco",
        position: "Software Engineer in Test",
        date: "2019",
        url: "https://www.cisco.com/",
        image: CiscoLogo,
    },
    {
        company: "Autodesk",
        position: "Python Automation Engineer",
        date: "2018-2019",
        url: "https://www.autodesk.com/",
        image: AutodeskLogo,
    },
    {
        company: "Vital Enterprises",
        position: "QA Software Engineer",
        date: "2017-2018",
        url: "https://www.vital.enterprises/",
        image: VitalLogo,
    },
    {
        company: "Blackfire Research",
        position: "Software QA | Software Engineer",
        date: "2016-2017",
        url: "https://bfrx.com/",
        image: BFLogo,
    },
];

export const projects = [
    {
        key: 1,
        name: "Pitcher VS. | React",
        image: PitcherPlots,
        year: "2021",
        description: "A React JS webpage that loads MLB pitcher data and visualizes it against other pitchers around the league.",
        github: "https://github.com/mserna/mlb-pitcher-statcast/",
        link: "http://pitchervs.s3-website-us-west-1.amazonaws.com/"
    },
    {
        key: 2,
        name: "HobbyMe | iOS",
        image: HobbyMe,
        year: "2020",
        description: "A mobile application that allowed users to network, collaborate and meetup with others that shared similar hobbies.",
        github: "https://github.com/mserna/Hobby_Me",
        link: null
    },
    {
        key: 3,
        name: "Wridr | iOS",
        image: Wridr,
        year: "2016",
        description: "A social platform mobile application that allowed users to share ride-sharing stories using Twitter/X API.",
        github: "https://github.com/mserna/Wridr",
        link: null
    },
    {
        key: 4,
        name: "Untitled Project Name",
        image: GithubLogo,
        year: "2024",
        description: "In Progress",
        github: null,
        link: null
    }
];

export const learing = [
    {
        key: 1,
        name: "San Francisco State University",
        image: SFSULogo,
        description: "Relevant courswork: Data Structures, Algorithms, Programming Methodology, Software Development using Android Studio, Machine Structures, Operating Systems, Game Development using Unity, Machine Learning Development",
        link: "https://cs.sfsu.edu"
    },
    {
        key: 2,
        name: "Stanford Online (Coursera) - Machine Learning",
        image: CourseraLogo,
        description: "Course in Machine Learning by Andrew Ng, going over fundamental concepts and techniques, ranging from supervised and unsupervised learning to neural netowrks using the Octave programming language",
        link: "https://www.coursera.org/account/accomplishments/verify/8MSE2T6Q5LYH"
    },
];