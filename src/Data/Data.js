// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilUserSquare,
UilVideo 
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

let baseUrl;

// Check if the application is running in a local development environment
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3000'; // Set your local development URL
} else {
  // Use the URL of your deployed Vercel application
  baseUrl = 'https://CodeJustice.vercel.app';
}
// Sidebar Data
export const SidebarData = [
  
  {
    icon: UilEstate,
    heading: "Dashboard",
    url:baseUrl + '/dashboard'
  },
  {
    icon: UilVideo,
    heading: "Videos",
    url:baseUrl + '/videos'
  },
  
  {
    icon: UilUsdSquare,
    heading: 'Rewards',
    url:baseUrl + '/rewards'
  },
  {
    icon: UilChart,
    heading: 'Leaderboard',
    url:baseUrl + '/leaderboard'
  },
  {
    icon: UilUsersAlt,
    heading: "Create",
    url:baseUrl + '/create'
  },
  {
    icon: UilUsersAlt,
    heading: "AR Filters",
    url:baseUrl + '/filters'
  },
  {
    icon: UilUsersAlt,
    heading: "Profile",
    url:baseUrl + '/signup'
  },
  
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Engagement",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25.6 K",
    png:  UilUserSquare,
    series: [
      {
        name: "Engagement",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Rewards",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "$ 270",
    png: UilUsdSquare,
    series: [
      {
        name: "Rewards",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Rank",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "3rd",
    png: UilChart,
    series: [
      {
        name: "Rank",
        data: [100,110,121,125,140, 150, 160],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Mr. Simarjit",
    noti: "has scheduled an event for Anti-Drugs.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Nirmesh Desai",
    noti: "has launched a new feature for ceators.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Jiya Gupta",
    noti: "has scheduled an event for Deliquency",
    time: "2 hours ago",
  },
];
