import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    discordBlack,
    facebook,
    file02,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    plusSquare,
    searchMd,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "About us",
      url: "#features",
    },
    {
      id: "1",
      title: "Find a Match",
      url: "#find-a-match",
    },
    {
      id: "2",
      title: "Register team",
      url: "#register-team",
    },
    {
      id: "3",
      title: "New account",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "4",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  


  export const matchOptions = [
    {
        id: 1,
        title: 'Local Matches',
        text: 'Join local football matches happening around you.',
        iconUrl: benefitIcon1, // Path to the appropriate icon
        imageUrl: benefitImage2, // Background image for the option
        backgroundUrl: './src/assets/benefits/card-1.svg', // Optional background pattern
        light: true // If you want to use the GradientLight
    },
    {
        id: 2,
        title: 'Team Finder',
        text: 'Find teams looking for players in your skill range.',
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
        backgroundUrl: './src/assets/benefits/card-3.svg',
        light: false
    },
    {
        id: 3,
        title: 'Create a Match',
        text: 'Set up and manage your own matches.',
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        backgroundUrl: './src/assets/benefits/card-2.svg',
        light: true
    }
];

  
  export const benefits = [
    {
      id: "0",
      title: "Create your own team",
      text: "Custom-made teams with creative names to be placed on our leader board ranking systems to encourage competition and groups of friends to play together against others.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Local user profiles",
      text: "The app allows users to directly communicate and sort out matches directly with opponents, it also shows the users available in your area, making it easier to contact them.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Connect everywhere",
      text: "Connect with people from anywhere, in your area or location, making it more accessible and convenient to regular citizens that have commitments.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "Increased oppurtunities",
      text: "Provides users with the options to book pitches/facilities for a more secure and available location to play.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
      light: true,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];