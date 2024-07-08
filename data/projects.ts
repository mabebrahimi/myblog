import dayjs from 'dayjs';

type ProjectSummary = {
  text: string;
};

export type ProjectReview = {
  text: string;
  name: string;
  image: string;
  date: string;
};

export type Overview = {
  text: string;
  services: string[];
  technologies: string[];
  software: string[];
  client: string;
};

export type Color = {
  name: string;
  code: string;
};

export type WorkDone = {
  iconName: string;
  title: string;
  text: string;
};

export type Showcase = {
  images: string[];
  intro: string;
  challenges: string[];
  solution: string;
  colors: Color[];
  workDone: WorkDone[];
};

export type Project = {
  title: string;
  slug: string;
  subTitle: string;
  category: string;
  overview: Overview;
  showcase: Showcase;
  image: string;
  dates: {
    from: string;
    to: string;
  };
  isFeatured?: boolean;
  isLatest?: boolean;
  summary?: ProjectSummary[];
  review?: ProjectReview;
};

type Projects = Project[];

export const projects: Projects = [
  {
    title: 'Ethereal Dreams',
    slug: 'ethereal-dreams',
    subTitle: 'Discover the Cutting-Edge Technology Behind Our Latest Project',
    category: '3D Modeling',
    image:
      'https://images.unsplash.com/photo-1595878655324-6f81790dce49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    dates: {
      from: 'Jan 2021',
      to: 'Feb 2021',
    },
    isFeatured: false,
    overview: {
      text: 'Discover the cutting-edge technology behind our latest project.',
      services: ['Design', 'Integration', 'Animation'],
      technologies: ['Motion graphics', 'Visual effects'],
      software: ['After Effects', 'Blender', 'Premiere Pro'],
      client: 'EaseOut Studio.',
    },
    showcase: {
      images: [
        'https://images.unsplash.com/photo-1634118931958-f1cf1f9c6156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'https://images.unsplash.com/photo-1542228846-2d791a09d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1630926906914-f98970d8894c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        'https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
        'https://images.unsplash.com/photo-1439923274069-a6f070db0c99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80',
        'https://images.unsplash.com/photo-1646379268466-11becd60c0cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        'https://images.unsplash.com/photo-1517420878257-463729f65889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      ],
      intro:
        'Ethereal Dreams is an innovative project that explores the art of motion graphics. This project aims to breathe life into designs by incorporating fluid and dynamic elements that add an extra layer of depth and interest. With a focus on the latest technology and techniques, this project showcases the power of motion graphics and its ability to captivate and engage audiences.',
      challenges: [
        'Balancing artistic vision with technical constraints.',
        'Integrating motion graphics seamlessly into overall design.',
        'Creating engaging and visually appealing animations with limited time and resources.',
        'Integrating complex animation techniques.',
      ],
      solution:
        "The solution to the project's challenges was approached with a multi-pronged strategy. Firstly, a thorough research and analysis was conducted to understand the specific requirements and expectations of the client. This helped the team to gain a clear understanding of the client's goals and objectives and to craft a solution that would meet those needs.",
      colors: [
        { name: 'Cadet Blue', code: '#5F9EA0' },
        { name: 'Saddle Brown', code: '#8B4513' },
        { name: 'Crimson', code: '#DC143C' },
        { name: 'Medium Sea Green', code: '#3CB371' },
        { name: 'Gray', code: '#808080' },
      ],
      // only use ri icons from react-icons/ri
      workDone: [
        {
          iconName: 'RiLightbulbLine',
          title: 'Concept Development',
          text: "Our team of experienced designers took the client's vision and turned it into a tangible design concept.",
        },
        {
          iconName: 'RiMacbookLine',
          title: 'Motion Graphics',
          text: "Our motion graphics team brought the client's designs to life with the use of innovative animation techniques.",
        },
        {
          iconName: 'RiLayout3Line',
          title: 'UX Design',
          text: 'Our UX/UI design team worked with the client to create a user-friendly and visually appealing experience.',
        },
        {
          iconName: 'RiBrushLine',
          title: 'Branding',
          text: 'Our team worked with the client to develop a strong brand identity, including logos, color schemes, typography, and more.',
        },
        {
          iconName: 'RiVideoLine',
          title: 'Video Production',
          text: 'Our video production team worked with the client to create a compelling video that showcased their brand and products.',
        },
        {
          iconName: 'RiAlarmLine',
          title: 'Project Management',
          text: 'Our team managed the project from start to finish, ensuring that everything was completed on time, within budget.',
        },
      ],
    },
    summary: [
      {
        text: 'Creative Concept Design and Visualization Design.',
      },
      {
        text: 'Interactive Technology Integration and Development.',
      },
      {
        text: 'Artistic and Technical Collaboration.',
      },
      {
        text: 'User Experience and Engagement.',
      },
    ],
    review: {
      text: 'I am blown away by the final product and the positive impact it has had on my business. I would highly recommend EaseOut Studio to anyone looking to take their business to the next level.',
      name: 'Max Wilson, web designer',
      image:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      date: '7 Feb 2023',
    },
  },
  {
    title: 'Vibrant Visions',
    slug: 'vibrant-visions',
    subTitle: 'Bringing the City to Life with Dynamic Light Shows',
    category: 'Game Art',
    image:
      'https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    dates: {
      from: 'Feb 2021',
      to: 'Mar 2021',
    },
    isFeatured: true,
    isLatest: true,
    overview: {
      text: 'Transforming designs with captivating motion graphics magic.',
      services: ['Design', 'Integration', 'Animation'],
      technologies: ['Motion graphics', 'Visual effects'],
      software: ['After Effects', 'Blender', 'Premiere Pro'],
      client: 'EaseOut Studio.',
    },
    showcase: {
      images: [
        'https://images.unsplash.com/photo-1634118931958-f1cf1f9c6156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'https://images.unsplash.com/photo-1542228846-2d791a09d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1630926906914-f98970d8894c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        'https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
        'https://images.unsplash.com/photo-1439923274069-a6f070db0c99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80',
        'https://images.unsplash.com/photo-1646379268466-11becd60c0cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        'https://images.unsplash.com/photo-1517420878257-463729f65889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      ],
      intro:
        'Ethereal Dreams is an innovative project that explores the art of motion graphics. This project aims to breathe life into designs by incorporating fluid and dynamic elements that add an extra layer of depth and interest. With a focus on the latest technology and techniques, this project showcases the power of motion graphics and its ability to captivate and engage audiences.',
      challenges: [
        'Balancing artistic vision with technical constraints.',
        'Integrating motion graphics seamlessly into overall design.',
        'Creating engaging and visually appealing animations with limited time and resources.',
        'Integrating complex animation techniques.',
      ],
      solution:
        "The solution to the project's challenges was approached with a multi-pronged strategy. Firstly, a thorough research and analysis was conducted to understand the specific requirements and expectations of the client. This helped the team to gain a clear understanding of the client's goals and objectives and to craft a solution that would meet those needs.",
      colors: [
        { name: 'Medium Sea Green', code: '#3CB371' },
        { name: 'Coral', code: '#FF7F50' },
        { name: 'Purple', code: '#800080' },
        { name: 'Pink', code: '#FFC0CB' },
        { name: 'Teal', code: '#008080' },
      ],
      // only use ri icons from react-icons/ri
      workDone: [
        {
          iconName: 'RiLightbulbLine',
          title: 'Concept Development',
          text: "Our team of experienced designers took the client's vision and turned it into a tangible design concept.",
        },
        {
          iconName: 'RiMacbookLine',
          title: 'Motion Graphics',
          text: "Our motion graphics team brought the client's designs to life with the use of innovative animation techniques.",
        },
        {
          iconName: 'RiLayout3Line',
          title: 'UX Design',
          text: 'Our UX/UI design team worked with the client to create a user-friendly and visually appealing experience.',
        },
        {
          iconName: 'RiBrushLine',
          title: 'Branding',
          text: 'Our team worked with the client to develop a strong brand identity, including logos, color schemes, typography, and more.',
        },
        {
          iconName: 'RiVideoLine',
          title: 'Video Production',
          text: 'Our video production team worked with the client to create a compelling video that showcased their brand and products.',
        },
        {
          iconName: 'RiAlarmLine',
          title: 'Project Management',
          text: 'Our team managed the project from start to finish, ensuring that everything was completed on time, within budget.',
        },
      ],
    },
    summary: [
      {
        text: 'Innovative Digital Art Creation.',
      },
      {
        text: 'Virtual Reality and Immersive Experience Design.',
      },
      {
        text: 'Engaging Interactive Installations.',
      },
      {
        text: 'User Experience Design and Engagement.',
      },
    ],
    review: {
      text: 'The digital art created by this team is nothing short of magical. Their attention to detail is truly unparalleled.',
      name: 'Samantha Lee, digital artist',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      date: '14 Mar 2023',
    },
  },
  {
    title: 'Artistic Adventures',
    slug: 'artistic-adventures',
    subTitle: 'Embark on a Journey Through New and Exciting Worlds',
    category: 'Digital Painting',
    image:
      'https://images.unsplash.com/photo-1552083940-86877723de7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    dates: {
      from: 'Mar 2021',
      to: 'Apr 2021',
    },
    isFeatured: false,
    overview: {
      text: 'Transforming designs with captivating motion graphics magic.',
      services: ['Design', 'Integration', 'Animation'],
      technologies: ['Motion graphics', 'Visual effects'],
      software: ['After Effects', 'Blender', 'Premiere Pro'],
      client: 'EaseOut Studio.',
    },
    showcase: {
      images: [
        'https://images.unsplash.com/photo-1634118931958-f1cf1f9c6156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'https://images.unsplash.com/photo-1542228846-2d791a09d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1630926906914-f98970d8894c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        'https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
        'https://images.unsplash.com/photo-1439923274069-a6f070db0c99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80',
        'https://images.unsplash.com/photo-1646379268466-11becd60c0cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        'https://images.unsplash.com/photo-1517420878257-463729f65889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      ],
      intro:
        'Ethereal Dreams is an innovative project that explores the art of motion graphics. This project aims to breathe life into designs by incorporating fluid and dynamic elements that add an extra layer of depth and interest. With a focus on the latest technology and techniques, this project showcases the power of motion graphics and its ability to captivate and engage audiences.',
      challenges: [
        'Balancing artistic vision with technical constraints.',
        'Integrating motion graphics seamlessly into overall design.',
        'Creating engaging and visually appealing animations with limited time and resources.',
        'Integrating complex animation techniques.',
      ],
      solution:
        "The solution to the project's challenges was approached with a multi-pronged strategy. Firstly, a thorough research and analysis was conducted to understand the specific requirements and expectations of the client. This helped the team to gain a clear understanding of the client's goals and objectives and to craft a solution that would meet those needs.",
      colors: [
        { name: 'Maroon', code: '#800000' },
        { name: 'Gold', code: '#FFD700' },
        { name: 'Olive', code: '#808000' },
        { name: 'Orange Red', code: '#FF4500' },
        { name: 'Cadet Blue', code: '#5F9EA0' },
      ],
      // only use ri icons from react-icons/ri
      workDone: [
        {
          iconName: 'RiLightbulbLine',
          title: 'Concept Development',
          text: "Our team of experienced designers took the client's vision and turned it into a tangible design concept.",
        },
        {
          iconName: 'RiMacbookLine',
          title: 'Motion Graphics',
          text: "Our motion graphics team brought the client's designs to life with the use of innovative animation techniques.",
        },
        {
          iconName: 'RiLayout3Line',
          title: 'UX Design',
          text: 'Our UX/UI design team worked with the client to create a user-friendly and visually appealing experience.',
        },
        {
          iconName: 'RiBrushLine',
          title: 'Branding',
          text: 'Our team worked with the client to develop a strong brand identity, including logos, color schemes, typography, and more.',
        },
        {
          iconName: 'RiVideoLine',
          title: 'Video Production',
          text: 'Our video production team worked with the client to create a compelling video that showcased their brand and products.',
        },
        {
          iconName: 'RiAlarmLine',
          title: 'Project Management',
          text: 'Our team managed the project from start to finish, ensuring that everything was completed on time, within budget.',
        },
      ],
    },
    summary: [
      {
        text: 'Dynamic Motion Graphics and Visual Effects.',
      },
      {
        text: 'Interactive Media and Game Design.',
      },
      {
        text: 'Artistic and Technical Collaboration.',
      },
      {
        text: 'Future-Forward Concept Design.',
      },
    ],
    review: {
      text: 'I have never seen anything like what this team delivered for my project. They elevated my ideas to new heights. I am so grateful for their work.',
      name: 'Tom Miller, creative director',
      image:
        'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      date: '28 Apr 2023',
    },
  },
  {
    title: 'Pixelated Paradise',
    slug: 'pixelated-paradise',
    subTitle: 'Breathe Life into Your Designs with Innovative Motion Graphics',
    category: '3D Modeling',
    image:
      'https://images.unsplash.com/photo-1607893351349-0cfa621476ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    dates: {
      from: 'Apr 2021',
      to: 'May 2021',
    },
    isFeatured: false,
    overview: {
      text: 'Transforming designs with captivating motion graphics magic.',
      services: ['Design', 'Integration', 'Animation'],
      technologies: ['Motion graphics', 'Visual effects'],
      software: ['After Effects', 'Blender', 'Premiere Pro'],
      client: 'EaseOut Studio.',
    },
    showcase: {
      images: [
        'https://images.unsplash.com/photo-1634118931958-f1cf1f9c6156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'https://images.unsplash.com/photo-1542228846-2d791a09d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1630926906914-f98970d8894c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        'https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
        'https://images.unsplash.com/photo-1439923274069-a6f070db0c99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80',
        'https://images.unsplash.com/photo-1646379268466-11becd60c0cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        'https://images.unsplash.com/photo-1517420878257-463729f65889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      ],
      intro:
        'Ethereal Dreams is an innovative project that explores the art of motion graphics. This project aims to breathe life into designs by incorporating fluid and dynamic elements that add an extra layer of depth and interest. With a focus on the latest technology and techniques, this project showcases the power of motion graphics and its ability to captivate and engage audiences.',
      challenges: [
        'Balancing artistic vision with technical constraints.',
        'Integrating motion graphics seamlessly into overall design.',
        'Creating engaging and visually appealing animations with limited time and resources.',
        'Integrating complex animation techniques.',
      ],
      solution:
        "The solution to the project's challenges was approached with a multi-pronged strategy. Firstly, a thorough research and analysis was conducted to understand the specific requirements and expectations of the client. This helped the team to gain a clear understanding of the client's goals and objectives and to craft a solution that would meet those needs.",
      colors: [
        { name: 'Medium Violet Red', code: '#C71585' },
        { name: 'Dodger Blue', code: '#1E90FF' },
        { name: 'Medium Sea Green', code: '#3CB371' },
        { name: 'Saddle Brown', code: '#8B4513' },
        { name: 'Cadet Blue', code: '#5F9EA0' },
      ],
      // only use ri icons from react-icons/ri
      workDone: [
        {
          iconName: 'RiLightbulbLine',
          title: 'Concept Development',
          text: "Our team of experienced designers took the client's vision and turned it into a tangible design concept.",
        },
        {
          iconName: 'RiMacbookLine',
          title: 'Motion Graphics',
          text: "Our motion graphics team brought the client's designs to life with the use of innovative animation techniques.",
        },
        {
          iconName: 'RiLayout3Line',
          title: 'UX Design',
          text: 'Our UX/UI design team worked with the client to create a user-friendly and visually appealing experience.',
        },
        {
          iconName: 'RiBrushLine',
          title: 'Branding',
          text: 'Our team worked with the client to develop a strong brand identity, including logos, color schemes, typography, and more.',
        },
        {
          iconName: 'RiVideoLine',
          title: 'Video Production',
          text: 'Our video production team worked with the client to create a compelling video that showcased their brand and products.',
        },
        {
          iconName: 'RiAlarmLine',
          title: 'Project Management',
          text: 'Our team managed the project from start to finish, ensuring that everything was completed on time, within budget.',
        },
      ],
    },
    summary: [
      {
        text: 'Virtual Event Design and Production.',
      },
      {
        text: 'Augmented Reality and Immersive Technology.',
      },
      {
        text: 'Interactive Marketing and Brand Activations.',
      },
    ],
    review: {
      text: 'The virtual event designed and produced by this team was a huge hit with our audience. They were able to bring our vision to life in a way that exceeded our expectations.',
      name: 'Amanda Brown, marketing manager',
      image:
        'https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      date: '12 May 2023',
    },
  },
  {
    title: 'Cybernetic Symphony',
    slug: 'cybernetic-symphony',
    subTitle: 'Experience the Future of Art and Technology Combined',
    category: 'Game Art',
    image:
      'https://images.unsplash.com/photo-1603665270146-bbdf9858ea55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    dates: {
      from: 'May 2021',
      to: 'Jun 2021',
    },
    isFeatured: false,
    overview: {
      text: 'Transforming designs with captivating motion graphics magic.',
      services: ['Design', 'Integration', 'Animation'],
      technologies: ['Motion graphics', 'Visual effects'],
      software: ['After Effects', 'Blender', 'Premiere Pro'],
      client: 'EaseOut Studio.',
    },
    showcase: {
      images: [
        'https://images.unsplash.com/photo-1634118931958-f1cf1f9c6156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'https://images.unsplash.com/photo-1542228846-2d791a09d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1630926906914-f98970d8894c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        'https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
        'https://images.unsplash.com/photo-1439923274069-a6f070db0c99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80',
        'https://images.unsplash.com/photo-1646379268466-11becd60c0cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        'https://images.unsplash.com/photo-1517420878257-463729f65889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      ],
      intro:
        'Ethereal Dreams is an innovative project that explores the art of motion graphics. This project aims to breathe life into designs by incorporating fluid and dynamic elements that add an extra layer of depth and interest. With a focus on the latest technology and techniques, this project showcases the power of motion graphics and its ability to captivate and engage audiences.',
      challenges: [
        'Balancing artistic vision with technical constraints.',
        'Integrating motion graphics seamlessly into overall design.',
        'Creating engaging and visually appealing animations with limited time and resources.',
        'Integrating complex animation techniques.',
      ],
      solution:
        "The solution to the project's challenges was approached with a multi-pronged strategy. Firstly, a thorough research and analysis was conducted to understand the specific requirements and expectations of the client. This helped the team to gain a clear understanding of the client's goals and objectives and to craft a solution that would meet those needs.",
      colors: [
        { name: 'Brown', code: '#A52A2A' },
        { name: 'Sea Green', code: '#2E8B57' },
        { name: 'Turquoise', code: '#40E0D0' },
        { name: 'Dark Orange', code: '#FF8C00' },
        { name: 'Indigo', code: '#4B0082' },
      ],
      // only use ri icons from react-icons/ri
      workDone: [
        {
          iconName: 'RiLightbulbLine',
          title: 'Concept Development',
          text: "Our team of experienced designers took the client's vision and turned it into a tangible design concept.",
        },
        {
          iconName: 'RiMacbookLine',
          title: 'Motion Graphics',
          text: "Our motion graphics team brought the client's designs to life with the use of innovative animation techniques.",
        },
        {
          iconName: 'RiLayout3Line',
          title: 'UX Design',
          text: 'Our UX/UI design team worked with the client to create a user-friendly and visually appealing experience.',
        },
        {
          iconName: 'RiBrushLine',
          title: 'Branding',
          text: 'Our team worked with the client to develop a strong brand identity, including logos, color schemes, typography, and more.',
        },
        {
          iconName: 'RiVideoLine',
          title: 'Video Production',
          text: 'Our video production team worked with the client to create a compelling video that showcased their brand and products.',
        },
        {
          iconName: 'RiAlarmLine',
          title: 'Project Management',
          text: 'Our team managed the project from start to finish, ensuring that everything was completed on time, within budget.',
        },
      ],
    },
    summary: [
      {
        text: 'Experimental Art Installations.',
      },
      {
        text: 'Virtual Reality and 360° Experience Design.',
      },
      {
        text: 'Artistic and Technical Collaboration.',
      },
      {
        text: 'Innovative Use of Emerging Technologies.',
      },
    ],
    review: {
      text: 'The virtual reality experience created by this team was nothing short of extraordinary.',
      name: 'Jon Doe, UX designer',
      image:
        'https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      date: '25 jun 2023',
    },
  },
  {
    title: 'Virtual Realms',
    slug: 'virtual-realms',
    subTitle: 'Explore the Universe from the Comfort of Your Home',
    category: 'Digital Painting',
    image:
      'https://images.unsplash.com/photo-1593900154677-ac809fba01f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1983&q=80',
    dates: {
      from: 'Jun 2021',
      to: 'Jul 2021',
    },
    isFeatured: false,
    overview: {
      text: 'Transforming designs with captivating motion graphics magic.',
      services: ['Design', 'Integration', 'Animation'],
      technologies: ['Motion graphics', 'Visual effects'],
      software: ['After Effects', 'Blender', 'Premiere Pro'],
      client: 'EaseOut Studio.',
    },
    showcase: {
      images: [
        'https://images.unsplash.com/photo-1634118931958-f1cf1f9c6156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'https://images.unsplash.com/photo-1542228846-2d791a09d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1630926906914-f98970d8894c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        'https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
        'https://images.unsplash.com/photo-1439923274069-a6f070db0c99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80',
        'https://images.unsplash.com/photo-1646379268466-11becd60c0cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        'https://images.unsplash.com/photo-1517420878257-463729f65889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      ],
      intro:
        'Ethereal Dreams is an innovative project that explores the art of motion graphics. This project aims to breathe life into designs by incorporating fluid and dynamic elements that add an extra layer of depth and interest. With a focus on the latest technology and techniques, this project showcases the power of motion graphics and its ability to captivate and engage audiences.',
      challenges: [
        'Balancing artistic vision with technical constraints.',
        'Integrating motion graphics seamlessly into overall design.',
        'Creating engaging and visually appealing animations with limited time and resources.',
        'Integrating complex animation techniques.',
      ],
      solution:
        "The solution to the project's challenges was approached with a multi-pronged strategy. Firstly, a thorough research and analysis was conducted to understand the specific requirements and expectations of the client. This helped the team to gain a clear understanding of the client's goals and objectives and to craft a solution that would meet those needs.",
      colors: [
        { name: 'Blue Violet', code: '#8A2BE2' },
        { name: 'Medium Purple', code: '#9370DB' },
        { name: 'Medium Sea Green', code: '#3CB371' },
        { name: 'Orchid', code: '#DA70D6' },
        { name: 'Deep Sky Blue', code: '#00BFFF' },
      ],
      // only use ri icons from react-icons/ri
      workDone: [
        {
          iconName: 'RiLightbulbLine',
          title: 'Concept Development',
          text: "Our team of experienced designers took the client's vision and turned it into a tangible design concept.",
        },
        {
          iconName: 'RiMacbookLine',
          title: 'Motion Graphics',
          text: "Our motion graphics team brought the client's designs to life with the use of innovative animation techniques.",
        },
        {
          iconName: 'RiLayout3Line',
          title: 'UX Design',
          text: 'Our UX/UI design team worked with the client to create a user-friendly and visually appealing experience.',
        },
        {
          iconName: 'RiBrushLine',
          title: 'Branding',
          text: 'Our team worked with the client to develop a strong brand identity, including logos, color schemes, typography, and more.',
        },
        {
          iconName: 'RiVideoLine',
          title: 'Video Production',
          text: 'Our video production team worked with the client to create a compelling video that showcased their brand and products.',
        },
        {
          iconName: 'RiAlarmLine',
          title: 'Project Management',
          text: 'Our team managed the project from start to finish, ensuring that everything was completed on time, within budget.',
        },
      ],
    },
    summary: [
      {
        text: 'Immersive Multimedia Art Installations.',
      },
      {
        text: 'Interactive Projection Mapping.',
      },
      {
        text: 'Augmented Reality Experiences.',
      },
      {
        text: 'Innovative Use of Digital Media and Sensors.',
      },
    ],
    review: {
      text: 'The Digital Dreamscape exhibition was a surreal experience that transported me to another world. I was completely captivated by the immersive experience and the stunning visuals.',
      name: 'Jane Smith, UI designer',
      image:
        'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      date: '12 Sep 2023',
    },
  },
  {
    title: 'Cybernetic Cells',
    slug: 'cybernetic-cells',
    subTitle: 'Explore the Boundaries of Imagination through Technology',
    category: 'Game Art',
    image:
      'https://images.unsplash.com/photo-1608501773255-d8cd9e5ba968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    dates: {
      from: 'Jul 2021',
      to: 'Aug 2021',
    },
    isFeatured: true,
    overview: {
      text: 'Transforming designs with captivating motion graphics magic.',
      services: ['Design', 'Integration', 'Animation'],
      technologies: ['Motion graphics', 'Visual effects'],
      software: ['After Effects', 'Blender', 'Premiere Pro'],
      client: 'EaseOut Studio.',
    },
    showcase: {
      images: [
        'https://images.unsplash.com/photo-1634118931958-f1cf1f9c6156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'https://images.unsplash.com/photo-1542228846-2d791a09d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1630926906914-f98970d8894c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        'https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
        'https://images.unsplash.com/photo-1439923274069-a6f070db0c99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80',
        'https://images.unsplash.com/photo-1646379268466-11becd60c0cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        'https://images.unsplash.com/photo-1517420878257-463729f65889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      ],
      intro:
        'Ethereal Dreams is an innovative project that explores the art of motion graphics. This project aims to breathe life into designs by incorporating fluid and dynamic elements that add an extra layer of depth and interest. With a focus on the latest technology and techniques, this project showcases the power of motion graphics and its ability to captivate and engage audiences.',
      challenges: [
        'Balancing artistic vision with technical constraints.',
        'Integrating motion graphics seamlessly into overall design.',
        'Creating engaging and visually appealing animations with limited time and resources.',
        'Integrating complex animation techniques.',
      ],
      solution:
        "The solution to the project's challenges was approached with a multi-pronged strategy. Firstly, a thorough research and analysis was conducted to understand the specific requirements and expectations of the client. This helped the team to gain a clear understanding of the client's goals and objectives and to craft a solution that would meet those needs.",
      colors: [
        { name: 'Medium Orchid', code: '#BA55D3' },
        { name: 'Slate Blue', code: '#6A5ACD' },
        { name: 'Goldenrod', code: '#DAA520' },
        { name: 'Cadet Blue', code: '#5F9EA0' },
        { name: 'Medium Sea Green', code: '#3CB371' },
      ],
      // only use ri icons from react-icons/ri
      workDone: [
        {
          iconName: 'RiLightbulbLine',
          title: 'Concept Development',
          text: "Our team of experienced designers took the client's vision and turned it into a tangible design concept.",
        },
        {
          iconName: 'RiMacbookLine',
          title: 'Motion Graphics',
          text: "Our motion graphics team brought the client's designs to life with the use of innovative animation techniques.",
        },
        {
          iconName: 'RiLayout3Line',
          title: 'UX Design',
          text: 'Our UX/UI design team worked with the client to create a user-friendly and visually appealing experience.',
        },
        {
          iconName: 'RiBrushLine',
          title: 'Branding',
          text: 'Our team worked with the client to develop a strong brand identity, including logos, color schemes, typography, and more.',
        },
        {
          iconName: 'RiVideoLine',
          title: 'Video Production',
          text: 'Our video production team worked with the client to create a compelling video that showcased their brand and products.',
        },
        {
          iconName: 'RiAlarmLine',
          title: 'Project Management',
          text: 'Our team managed the project from start to finish, ensuring that everything was completed on time, within budget.',
        },
      ],
    },
    summary: [
      {
        text: 'Immersive Space Exploration Experience.',
      },
      {
        text: 'Realistic 3D Models of Planets and Stars.',
      },
      {
        text: 'Educational Content About Space and Astronomy.',
      },
      {
        text: 'Interactive Features and Settings.',
      },
    ],
    review: {
      text: 'The attention to detail in the 3D models and the educational content made this experience truly out of this world! I loved the interactive features and the ability to customize the experience.',
      name: 'Joe Smith, UX designer',
      image:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=60',
      date: '12 dec 2023',
    },
  },
  {
    title: 'Digital Delights',
    slug: 'digital-delights',
    subTitle: 'A Sustainable Fashion Show for a Better Tomorrow',
    category: 'Digital Painting',
    image:
      'https://images.unsplash.com/photo-1582721691120-d1db3852893e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    dates: {
      from: 'Aug 2021',
      to: 'Sep 2021',
    },
    isFeatured: false,
    overview: {
      text: 'Transforming designs with captivating motion graphics magic.',
      services: ['Design', 'Integration', 'Animation'],
      technologies: ['Motion graphics', 'Visual effects'],
      software: ['After Effects', 'Blender', 'Premiere Pro'],
      client: 'EaseOut Studio.',
    },
    showcase: {
      images: [
        'https://images.unsplash.com/photo-1634118931958-f1cf1f9c6156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'https://images.unsplash.com/photo-1542228846-2d791a09d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1630926906914-f98970d8894c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        'https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
        'https://images.unsplash.com/photo-1439923274069-a6f070db0c99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80',
        'https://images.unsplash.com/photo-1646379268466-11becd60c0cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        'https://images.unsplash.com/photo-1517420878257-463729f65889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
      ],
      intro:
        'Ethereal Dreams is an innovative project that explores the art of motion graphics. This project aims to breathe life into designs by incorporating fluid and dynamic elements that add an extra layer of depth and interest. With a focus on the latest technology and techniques, this project showcases the power of motion graphics and its ability to captivate and engage audiences.',
      challenges: [
        'Balancing artistic vision with technical constraints.',
        'Integrating motion graphics seamlessly into overall design.',
        'Creating engaging and visually appealing animations with limited time and resources.',
        'Integrating complex animation techniques.',
      ],
      solution:
        "The solution to the project's challenges was approached with a multi-pronged strategy. Firstly, a thorough research and analysis was conducted to understand the specific requirements and expectations of the client. This helped the team to gain a clear understanding of the client's goals and objectives and to craft a solution that would meet those needs.",
      colors: [
        { name: 'Silver', code: '#C0C0C0' },
        { name: 'Tomato', code: '#FF6347' },
        { name: 'Tan', code: '#D2B48C' },
        { name: 'Cadet Blue', code: '#5F9EA0' },
        { name: 'Pink', code: '#FFC0CB' },
      ],
      // only use ri icons from react-icons/ri
      workDone: [
        {
          iconName: 'RiLightbulbLine',
          title: 'Concept Development',
          text: "Our team of experienced designers took the client's vision and turned it into a tangible design concept.",
        },
        {
          iconName: 'RiMacbookLine',
          title: 'Motion Graphics',
          text: "Our motion graphics team brought the client's designs to life with the use of innovative animation techniques.",
        },
        {
          iconName: 'RiLayout3Line',
          title: 'UX Design',
          text: 'Our UX/UI design team worked with the client to create a user-friendly and visually appealing experience.',
        },
        {
          iconName: 'RiBrushLine',
          title: 'Branding',
          text: 'Our team worked with the client to develop a strong brand identity, including logos, color schemes, typography, and more.',
        },
        {
          iconName: 'RiVideoLine',
          title: 'Video Production',
          text: 'Our video production team worked with the client to create a compelling video that showcased their brand and products.',
        },
        {
          iconName: 'RiAlarmLine',
          title: 'Project Management',
          text: 'Our team managed the project from start to finish, ensuring that everything was completed on time, within budget.',
        },
      ],
    },
    summary: [
      {
        text: 'Sustainable Fashion Design Showcase.',
      },
      {
        text: 'Eco-Friendly Materials and Fabrics.',
      },
      {
        text: 'Collaboration with Local Designers and Artisans.',
      },
      {
        text: 'Innovative Fashion Technology.',
      },
    ],
    review: {
      text: 'I was blown away by the creativity and innovation in the sustainable fashion designs. This show was truly inspiring!',
      name: 'Mike Johnson, Fashion Designer',
      image:
        'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      date: '10 jan 2023',
    },
  },
];

export const featuredProjects = projects.filter(
  (project) => project.isFeatured
);

export const sortedProjects = projects.sort((a, b) => {
  const dateA = dayjs(a.dates.from, 'MMM YYYY');
  const dateB = dayjs(b.dates.from, 'MMM YYYY');
  return dateB.diff(dateA);
});
export const latestProject = sortedProjects[0];

// check that all projects does not contain the latest project
export const allProjects = sortedProjects.filter(
  (project) => project.title !== latestProject.title
);
