// App configuration
export const APP_CONFIG = {
    name: 'RCTI Academy',
    description: 'Computer Institute in Bhawanipatna, Odisha - Data Analytics Training',
    version: '1.0.0',
    author: 'RCTI Academy'
}

// Navigation items
export const NAV_ITEMS = [
    { name: 'Home', href: '#hero', icon: 'fa-house-chimney' },
    { name: 'About Us', href: '#about-us', icon: 'fa-circle-info' },
    { name: 'Institutions', href: '#', icon: 'fa-building-columns', hasDropdown: true },
    { name: 'Milestone', href: '#', icon: 'fa-flag', hasDropdown: true },
    { name: 'Gallery', href: '#', icon: 'fa-folder-open' },
    { name: 'Contact Us', href: '#', icon: 'fa-phone', hasDropdown: true },
    { name: 'Login', href: '#', icon: 'fa-user' }
]

// Social links
export const SOCIAL_LINKS = {
    phone: '+91 7855959544',
    email: 'info@rctiacademy.co.in',
    facebook: '#',
    twitter: '#',
    instagram: '#',
    youtube: '#',
    linkedin: '#'
}

// Institution types
export const INSTITUTION_TYPES = [
    {
        id: 1,
        name: 'School',
        icon: 'fa-school',
        color: 'rgb(124, 24, 24)',
        institutions: ['RCTI Academy']
    },
    {
        id: 2,
        name: 'Higher Secondary School',
        icon: 'fa-book',
        color: 'rgb(76, 13, 91)',
        institutions: ['BBOSE', 'NIOS', 'Central Sanskrit University']
    },
    {
        id: 3,
        name: 'Degree College',
        icon: 'fa-graduation-cap',
        color: 'rgb(49, 86, 155)',
        institutions: ['Capital University', 'YBN University', 'MATS University', 'J.S. University']
    },
    {
        id: 4,
        name: 'Management School',
        icon: 'fa-user-tie',
        color: 'rgb(18, 99, 62)',
        institutions: ['Capital University', 'YBN University', 'MATS University', 'J.S. University']
    },
    {
        id: 5,
        name: 'Engineering College',
        icon: 'fa-code',
        color: 'rgb(147, 147, 37)',
        institutions: ['Capital University', 'YBN University', 'MATS University', 'J.S. University']
    },
    {
        id: 6,
        name: 'Polytechnic',
        icon: 'fa-screwdriver-wrench',
        color: 'rgb(47, 97, 11)',
        institutions: ['Capital University', 'YBN University', 'MATS University', 'J.S. University']
    },
    {
        id: 7,
        name: 'B.Ed. College',
        icon: 'fa-person-chalkboard',
        color: 'rgb(101, 105, 101)',
        institutions: ['Acharya Nagarjuna University', 'Andhra University', 'MATS University', 'Rayalaseema University']
    },
    {
        id: 8,
        name: 'Computer Academy',
        icon: 'fa-display',
        color: 'rgb(12, 5, 74)',
        institutions: ['RCTI', 'NCTI']
    }
]

// Quick links
export const QUICK_LINKS = [
    {
        id: 1,
        name: 'Time Tables',
        icon: '/img/2072763.png',
        color: 'rgb(253 237 50)',
        href: '#'
    },
    {
        id: 2,
        name: 'Careers',
        icon: '/img/scholarship.png',
        color: 'rgb(255, 202, 79)',
        href: '#'
    },
    {
        id: 3,
        name: 'News Letters',
        icon: '/img/information.png',
        color: 'rgb(109, 197, 74)',
        href: '#'
    },
    {
        id: 4,
        name: 'Results',
        icon: '/img/results.png',
        color: 'rgb(52 48 146)',
        href: '#'
    }
]

// Management team
export const MANAGEMENT_TEAM = [
    {
        id: 1,
        name: 'Mr. R.K. Meher',
        position: 'Chairman',
        image: '/img/chairman.jpg'
    },
    {
        id: 2,
        name: 'Mr. Gangadhar Meher',
        position: 'Trustee',
        image: '/img/mnt 005.jpg'
    },
    {
        id: 3,
        name: 'Mr. Sameer Meher',
        position: 'Trustee',
        image: '/img/mnt 006.jpg'
    },
    {
        id: 4,
        name: 'Mrs. Manjula Meher',
        position: 'Principal',
        image: '/img/mnt 003.jpg'
    },
    {
        id: 5,
        name: 'Mr. Sushanta Bhoi',
        position: 'Managing Director',
        image: '/img/mnt 002.jpg'
    },
    {
        id: 6,
        name: 'Mr. Lorem ipsum',
        position: 'Marketing Director',
        image: '/img/mnt 004.jpg'
    }
]

// Carousel images
export const CAROUSEL_IMAGES = [
    '/img/slider001 SO.jpeg',
    '/img/slider002 SO.jpeg',
    '/img/slider003 SO.jpeg',
    '/img/slider004 SO.jpeg'
]

// Chairman message
export const CHAIRMAN_MESSAGE = {
    name: 'Mr. R.K. Meher',
    position: 'Chairman',
    image: '/img/chairman.jpg',
    message: `"RCTI Academy is committed to providing quality computer education and training in Bhawanipatna, Odisha. We focus on practical learning and industry-relevant skills to help our students succeed in their careers. Our dedicated team works tirelessly to ensure every student receives the best training and placement support."`
}

// Video section
export const VIDEO_SECTION = {
    title: 'A Glance of RCTI Academy',
    description: 'This is a virtual tour of RCTI Academy in Bhawanipatna, Odisha. It shows our modern infrastructure and quality learning environment that we provide to our students. We aim to empower students with practical computer skills and data analytics knowledge.',
    locations: ['Bhawanipatna'],
    videoUrl: '#'
}

// Milestone
export const MILESTONE = {
    year: '2024',
    title: 'RCTI Academy - Computer Institute in Bhawanipatna',
    image: '/img/Milestone 001.jpg',
    description: 'RCTI Academy - Empowering students with quality computer education'
}

// Location
export const LOCATION = {
    address: 'RCTI Academy, Bhawanipatna, Kalahandi, Odisha, India',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.430049734715!2d83.151755749193!3d19.906274586551355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a24e934ac5f21a3%3A0x163989ed75231f8d!2sBhawanipatna!5e0!3m2!1sen!2sin!4v1653113592392!5m2!1sen!2sin'
}
