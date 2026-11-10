export type Doctor = {
  slug: string;
  name: string;
  shortName: string;
  credentials: string;
  role: string;
  image: string;
  imageAlt: string;
  intro: string;
  bio: readonly string[];
  facts: readonly { label: string; value: string }[];
  mailSubject: string;
};

export const site = {
  name: "Modern Dental",
  tagline: "Modern dentistry. Genuine care.",
  address: {
    street: "1600 2nd Ave SW",
    suite: "STE 22",
    city: "Minot",
    state: "North Dakota",
    stateShort: "ND",
    zip: "58701",
  },
  phone: "(701) 838-8399",
  phoneHref: "tel:7018388399",
  email: "moderndentalminot@gmail.com",
  emailHref: "mailto:moderndentalminot@gmail.com",
  facebook: "https://www.facebook.com/ModernDentalMinot/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Modern+Dental+1600+2nd+Ave+SW+STE+22+Minot+ND+58701",
  credit: "© 2017 by SHEP Creative Firm",
  creditUrl: "http://www.shepquarters.com",
} as const;

export const fullAddress = `${site.address.street} ${site.address.suite}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Contact", href: "/contact" },
] as const;

export const doctors: readonly Doctor[] = [
  {
    slug: "dr-christian-meland",
    name: "Dr. Christian Meland",
    shortName: "Dr. Christian",
    credentials: "DDS",
    role: "General Dentistry",
    image: "/images/dr-christian-meland.webp",
    imageAlt: "Dr. Christian Meland, DDS",
    intro:
      "Everyday I have the privilege of doing what I love, which is building relationships with patients and playing a part in their happiness.",
    bio: [
      "Everyday I have the privilege of doing what I love, which is building relationships with patients and playing a part in their happiness. I really enjoy participating in the journey a patient takes towards attaining a healthier, more attractive smile and maintaining it for a lifetime.",
      "I have had the opportunity to learn the most current and advanced dentistry there is through my schooling at the University of Minnesota School of Dentistry. I feel fortunate to be able to bring that knowledge to my home state of North Dakota and am committed to expanding my knowledge through continuing education so my patients can always receive the best care possible.",
      "When I don't have my hands in people's mouths, I enjoy being with family and friends. I have been involved with athletics my entire life and currently enjoy the camaraderie of Mens’ league hockey and softball. I also like to spend time outdoor fishing and returning to my hometown of Grand Forks to go hunting in the fall.",
    ],
    facts: [
      { label: "Education", value: "University of Minnesota School of Dentistry" },
      { label: "Hometown", value: "Grand Forks, North Dakota" },
      { label: "Outside the office", value: "Hockey, softball, fishing, hunting" },
    ],
    mailSubject: "ATT: Dr. Christian Meland",
  },
  {
    slug: "dr-amber-wentz",
    name: "Dr. Amber Wentz",
    shortName: "Dr. Amber",
    credentials: "DDS",
    role: "General Dentistry",
    image: "/images/dr-amber-wentz.webp",
    imageAlt: "Dr. Amber Wentz, DDS",
    intro:
      "Dentistry is the perfect occupation for me, as it allows me not only to help people improve and maintain oral health, but also to establish relationships with my patients and their families over time.",
    bio: [
      "As a graduate of the University of Minnesota, I am so excited to be back in my hometown of Minot. Dentistry is the perfect occupation for me, as it allows me not only to help people improve and maintain oral health, but also to establish relationships with my patients and their families over time.",
      "Outside of dentistry, I enjoy relaxing by spending time in the kitchen cooking and baking. I fell in love with yoga during my time in Minneapolis and also spend a fair amount of time with my head in a book. I cherish any and all time I am able to spend with my husband, family and friends.",
    ],
    facts: [
      { label: "Education", value: "University of Minnesota" },
      { label: "Hometown", value: "Minot, North Dakota" },
      { label: "Outside the office", value: "Cooking, baking, yoga, reading" },
    ],
    mailSubject: "ATT: Dr. Wentz",
  },
  {
    slug: "dr-eric-meland",
    name: "Dr. Eric Meland",
    shortName: "Dr. Eric",
    credentials: "",
    role: "General Dentistry",
    image: "/images/dr-eric-meland.webp",
    imageAlt: "Dr. Eric Meland",
    intro:
      "With a unique background that includes a professional hockey career, Eric transitioned from the ice to the dental chair, bringing the same level of discipline and teamwork to his practice.",
    bio: [
      "Originally hails from Grand Forks, ND. With a unique background that includes a professional hockey career, Eric transitioned from the ice to the dental chair, bringing the same level of discipline and teamwork to his practice.",
      "He earned his undergraduate degree in Aerospace Engineering from Princeton University before honing his skills at the University of Minnesota, where he cultivated a passion for oral health and patient care.",
      "Now, as a proud husband and father of two, alongside their lively husky, he enjoys fostering a warm and family-friendly atmosphere in his practice.",
    ],
    facts: [
      { label: "Education", value: "Princeton University · University of Minnesota" },
      { label: "Hometown", value: "Grand Forks, North Dakota" },
      { label: "Outside the office", value: "Family, hockey, their husky" },
    ],
    mailSubject: "ATT: Dr. Eric Meland",
  },
] as const;

export type ServiceCategory = "Restorative" | "Cosmetic" | "Orthodontics";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: "crown" | "smile" | "implant" | "align" | "root" | "sparkle";
  prompt: string;
};

export const services: readonly Service[] = [
  {
    slug: "dental-crowns",
    name: "Dental Crowns",
    category: "Restorative",
    icon: "crown",
    prompt: "Protecting a tooth? Ask us how crowns fit into your care.",
  },
  {
    slug: "dentures",
    name: "Dentures",
    category: "Restorative",
    icon: "smile",
    prompt: "Looking for denture care in Minot? Start with a conversation.",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Restorative",
    icon: "implant",
    prompt: "Curious whether implants are right for you? Let’s talk it through.",
  },
  {
    slug: "invisalign",
    name: "Invisalign",
    category: "Orthodontics",
    icon: "align",
    prompt: "Considering a straighter smile? Ask about Invisalign in Minot.",
  },
  {
    slug: "root-canal",
    name: "Root Canal",
    category: "Restorative",
    icon: "root",
    prompt: "Tooth pain or a referral for a root canal? Give us a call.",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "Cosmetic",
    icon: "sparkle",
    prompt: "Want a brighter smile? Ask our team about whitening.",
  },
] as const;

export const serviceCategories = [
  "All",
  "Restorative",
  "Cosmetic",
  "Orthodontics",
] as const;

export const faqs = [
  {
    question: "Where is Modern Dental located?",
    answer:
      "We are at 1600 2nd Ave SW, STE 22, Minot, North Dakota 58701. Use the map link on our contact page for directions.",
  },
  {
    question: "How do I get in touch with the practice?",
    answer: `Call us at ${site.phone} or email ${site.email}. You can also send a message through our contact form and our team will follow up.`,
  },
  {
    question: "Who will I see at Modern Dental?",
    answer:
      "Our team includes Dr. Christian Meland, Dr. Amber Wentz, and Dr. Eric Meland. You can read each of their backgrounds on our team page.",
  },
  {
    question: "What services are available?",
    answer:
      "Our website highlights dental crowns, dentures, dental implants, Invisalign, root canals, and teeth whitening. If you are unsure what you need, call or send us a message and we can talk it through.",
  },
  {
    question: "Can I contact a specific doctor?",
    answer:
      "Yes. Each doctor’s profile has a contact link that opens an email addressed to our practice with the doctor’s name in the subject line.",
  },
] as const;

export const values = [
  {
    number: "01",
    title: "Relationships first",
    body:
      "We enjoy participating in the journey a patient takes towards a healthier, more attractive smile — and maintaining it for a lifetime.",
  },
  {
    number: "02",
    title: "Modern education",
    body:
      "Our doctors have trained at the University of Minnesota School of Dentistry and Princeton University, bringing current and advanced dentistry home to North Dakota.",
  },
  {
    number: "03",
    title: "Rooted in North Dakota",
    body:
      "From Grand Forks to Minot, our team is proud to care for the communities we call home — with family, hockey, and a little time outdoors in between.",
  },
] as const;
