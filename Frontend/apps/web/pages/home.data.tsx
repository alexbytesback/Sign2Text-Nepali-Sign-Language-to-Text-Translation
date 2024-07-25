

import {
    IconArrowDown,
    IconArrowsRightLeft,
    IconBrandLinkedin,
    IconBrandTailwind,
    IconBrandTwitter,
    IconBulb,
    IconCheck,
    IconClock,
    IconComponents,
    IconDownload,
    IconListCheck,
    IconMail,
    IconMapPin,
    IconPhoneCall,
    IconRocket,
  } from '@tabler/icons-react';
  import {
    CallToActionProps,
    ContactProps,
    ContentProps,
    FAQsProps,
    FeaturesProps,
    HeroProps,
    PricingProps,
    SocialProofProps,
    StepsProps,
    TeamProps,
    TestimonialsProps,
  } from '../app/common/types';
  import heroImg from '../public/hero.jpg';
  import nextJsLogo from '../public/nextjs-logo.png';
  import reactLogo from '../public/react-logo.png';
  import tailwindCssLogo from '../public/tailwind-css-logo.png';
  import typescriptLogo from '../public/typescript-logo.png';
  import pythonLogo from '../public/python-logo.png';
  import opencvLogo from '../public/opencv-logo.png';
  import tensorflowLogo from '../public/tensorflow-logo.png';
  import cameraFrontImg from '../public/robot.jpg';
  import cameraBackImg from '../public/robot.jpg';
  import gasImg from '../public/robot.jpg';
import BlurFade from '@/components/magicui/blur-fade';
import ShinyButton from '@/components/magicui/shiny-button';
  
  
  // SocialProof data on Home page *******************
  export const socialProofHome: SocialProofProps = {
    id: 'socialProof-on-home',
    hasBackground: false,
    images: [
      {
        link: 'https://nextjs.org/',
        src: nextJsLogo,
        alt: 'NextJs Logo',
      },
      {
        link: 'https://react.dev/',
        src: reactLogo,
        alt: 'React Logo',
      },
      {
        link: 'https://tailwindcss.com/',
        src: tailwindCssLogo,
        alt: 'Tailwind CSS Logo',
      },
      {
        link: 'https://www.typescriptlang.org/',
        src: typescriptLogo,
        alt: 'Typescript Logo',
      },
      {
        link: 'https://www.python.org/',
        src: pythonLogo,
        alt: 'Python Logo',
      },
      {
        link: 'https://opencv.org/',
        src: opencvLogo,
        alt: 'OpenCV Logo',
      },
      {
        link: 'https://www.tensorflow.org/',
        src: tensorflowLogo,
        alt: 'Tensorflow Logo',
      },
    ],
  };
  
  // Features data on Home page *******************
  export const featuresHome: FeaturesProps = {
    id: 'features-on-home',
    hasBackground: false,
    columns: 2,
    header: {
      title: (
        
        <span className='whitespace-nowrap text-2xl md:text-3xl lg:text-3xl font-dm-sans'>
          What can you do with <span className="whitespace-nowrap text-2xl md:text-3xl lg:text-3xl">Sign2Text</span>
        </span>
      ),
      subtitle: (
        <span className="text-lg md:text-xl lg:text-2xl text-grey">
          Sign2Text is a hackathon project where our team has developed a platform that translates Nepali Sign Language into text, enhancing communication for the deaf and hard of hearing.
        </span>
      ),
      
      tagline: <span className="text-3xl md:text-4xl text-green-600 font-dm-sans pb-10 text-center gap-4 normal-case">Features</span>,
    },
    // ... other propertie
  items: [
    {
      title: 'Nepali Sign Language to Text Translation',
      description:
        'Converts gestures from Nepali Sign Language into written text, fostering better communication accessibility.',
      icon: IconComponents,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'User-Friendly Interface',
      description:
        'An intuitive interface designed for ease of use, ensuring seamless interaction for all users.',
      icon: IconBrandTailwind, // Replace with appropriate icon for User Interface
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Accessibility Features',
      description:
        'Includes features like Dark Mode and Accessibility enhancements to cater to diverse user needs.',
      icon: IconListCheck, // Replace with appropriate icon for Accessibility
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Community Collaboration',
      description:
        'Open to contributions and ideas from the community, fostering a collaborative development environment.',
      icon: IconBulb, // Replace with appropriate icon for Collaboration
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
  ],
};

  

  // Steps data on Home page *******************
  export const stepsHome: StepsProps = {
    id: 'steps-on-home',
    hasBackground: false,
    isReversed: false,
    isImageDisplayed: true,
    image: {
      src: gasImg,
      alt: 'Steps image',
    },
    header: {
      title: <span className="text-3xl md:text-4xl text-green-600 font-bold pb-10 text-center gap-4 normal-case">How to run Sign2Text</span>,
    },
    items: [
      {
        title: 'Step 1: Data Collection',
        description:
          'To begin, you need to collect data for the Nepali sign language gestures. Run `data_collection.py` to record and store the sign gestures. Follow the prompts on the screen and use the spacebar to control the recording process.\n\n'
          + '```sh\n'
          + 'python data_collection.py\n'
          + '```\n'
          + 'This script will capture and save the landmarks for each sign gesture in the specified data directory.',
        icon: IconArrowDown,
      },
      {
        title: 'Step 2: Train the Model',
        description:
          'Once the data is collected, train the model using the recorded data. Run `model.py` to train and save the model. This script will handle the preprocessing of the data and the training process.\n\n'
          + '```sh\n'
          + 'python model.py\n'
          + '```\n'
          + 'The trained model will be saved as `best_model.keras`.',
        icon: IconArrowDown,
      },
      {
        title: 'Step 3: Run the Main Program',
        description:
          'After training the model, you can run the main program to translate sign language gestures to text. Use `main.py` to start the application and use your webcam to perform sign gestures.\n\n'
          + '```sh\n'
          + 'python main.py\n'
          + '```\n'
          + 'The program will display the translated text on the screen based on the detected gestures.',
        icon: IconArrowDown,
      },
      {
        title: 'Ready!',
      },
    ],
  };
  
  
  // Team data on Home page *******************
  export const teamHome: TeamProps = {
    id: 'team-on-home',
    hasBackground: false,
    header: {
      title: <span className="text-3xl md:text-4xl text-green-600 font-dm-sans pb-10 text-center gap-4 normal-case">Our Team</span>,
      subtitle:
        'Meet the dedicated individuals who made this project possible. Each member brings unique expertise and passion to Sign2Text',
      // tagline: 'Team',
    },
    teams: [
      {
        name: 'Prashant Koirala',
        occupation: 'AI/ML Enthusiast',
        image: {
          src: 'https://i.ibb.co/192Zpvj/prashant.jpg',
          alt: 'Prashant Image',
        },
        items: [
          {
            title: 'Know more on Twitter',
            icon: IconBrandTwitter,
            href: '#',
          },
          {
            title: 'Know more on Linkedin',
            icon: IconBrandLinkedin,
            href: 'https://www.linkedin.com/in/alexbytesback/',
          },
          {
            title: 'Contact by email',
            icon: IconMail,
            href: '#',
          },
        ],
      },
      {
        name: 'Anupam Pokhrel',
        occupation: 'Data Science Enthusiast',
        image: {
          src: 'https://i.ibb.co/5n1h4m4/Whats-App-Image-2024-07-17-at-9-15-34-PM.jpg',
          alt: 'Anupam Image',
        },
        items: [
          {
            title: 'Know more on Twitter',
            icon: IconBrandTwitter,
            href: '#',
          },
          {
            title: 'Know more on Linkedin',
            icon: IconBrandLinkedin,
            href: 'https://www.linkedin.com/in/anupam-pokhrel-11919a295/',
          },
          {
            title: 'Contact by email',
            icon: IconMail,
            href: '#',
          },
        ],
      },
      {
        name: 'Prastuti Adhikari',
        occupation: 'Web Development Enthusiast',
        image: {
          src: 'https://i.ibb.co/MBcNNLg/Whats-App-Image-2024-07-18-at-4-32-30-PM.jpg',
          alt: 'Pratuti Image',
        },
        items: [
          {
            title: 'Know more on Twitter',
            icon: IconBrandTwitter,
            href: '#',
          },
          {
            title: 'Know more on Linkedin',
            icon: IconBrandLinkedin,
            href: 'https://www.linkedin.com/in/prastutiadhikari/',
          },
          {
            title: 'Contact by email',
            icon: IconMail,
            href: '#',
          },
        ],
      },
      {
        name: 'Chadani Ranabhat',
        occupation: 'AI/ML Enthusiast',
        image: {
          src: 'https://i.ibb.co/ZJVTs0x/Whats-App-Image-2024-07-18-at-4-34-51-PM.jpg',
          alt: 'Chadani Image',
        },
        items: [
          {
            title: 'Know more on Twitter',
            icon: IconBrandTwitter,
            href: '#',
          },
          {
            title: 'Know more on Linkedin',
            icon: IconBrandLinkedin,
            href: '#',
          },
          {
            title: 'Contact by email',
            icon: IconMail,
            href: '#',
          },
        ],
      },
      {
        name: 'Anata Khanal',
        occupation: 'AI/ML Enthusiast',
        image: {
          src: 'https://i.ibb.co/9sb75NX/Whats-App-Image-2024-07-17-at-9-15-35-PM.jpg',
          alt: 'Aananta Image',
        },
        items: [
          {
            title: 'Know more on Twitter',
            icon: IconBrandTwitter,
            href: '#',
          },
          {
            title: 'Know more on Linkedin',
            icon: IconBrandLinkedin,
            href: 'https://www.linkedin.com/in/ananta-khanal-40a2742a8/',
          },
          {
            title: 'Contact by email',
            icon: IconMail,
            href: '#',
          },
        ],
      },
    ],
  };
  
  
  // Contact data on Home page *******************
  export const contactHome: ContactProps = {
    hasBackground: true,
    header: {
      title: <span className="text-3xl md:text-4xl text-green-600 font-dm-sans pb-10 text-center gap-4 normal-case">Get in Touch</span>,
      subtitle: 'Feel free to reach out to us with any inquiries or feedback.',
      //tagline: 'Contact',
    },
    content:
      'We are here to connect with you. Whether you have questions, feedback, or simply want to learn more about Sign2Text, do not hesitate to reach out',
    items: [
      {
        title: 'Our Address',
        description: ['Om Krishna Marg', 'New Baneshowor-31, Kathmandu, Nepal'],
        icon: IconMapPin,
      },
      {
        title: 'Contact',
        description: ['Mobile: +977 9865144539', 'Mail: teamutopia@gmail.com'],
        icon: IconPhoneCall,
      },
      {
        title: 'Working hours',
        description: ['Monday - Friday: 07:00 AM - 5:00 PM', 'Saturday & Sunday: 07:00 AM - 9:00 AM'],
        icon: IconClock,
      },
    ],
    form: {
      title: (
        <span className="text-3xl md:text-2xl text-green-600 font-dm-sans pb-10 text-center gap-4 normal-case">
          Ready to Get Started?
        </span>
      ),
      
      inputs: [
        {
          type: 'text',
          name: 'name',
          autocomplete: 'off',
          placeholder: 'Your name',
        },
        {
          type: 'email',
          name: 'email',
          autocomplete: 'on',
          placeholder: 'Your email address',
        },
      ],
      textarea: {
        cols: 30,
        rows: 5,
        name: 'textarea',
        placeholder: 'Write your message...',
      },
      btn: {
        
        
        title: 'Send Message',
        type: 'submit',
      },
    },
  };
