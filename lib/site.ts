export const site = {
  name: "Texas Muscle",
  nameAccent: "& Fitness",
  phone: "(210) 375-3019",
  phoneHref: "tel:+12103753019",
  email: "texasmusclefitness@gmail.com",
  address: {
    line1: "10103 W Loop 1604 N #105B",
    line2: "San Antonio, TX 78254",
  },
  hours: "Open 24 hours, every day",
  rating: "4.7",
  googleReviews: 148,
  facebookRecommends: 268,
};

export const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/TexasMuscleandFitness/photos",
  },
];

export const navLinks = [
  { label: "Training", href: "#services" },
  { label: "Facility", href: "#facility" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
  { label: "Visit", href: "#contact" },
];

export const services = [
  {
    tag: "Personal Training",
    title: "One-on-one coaching",
    body:
      "Custom programming, form correction, and a coach who tracks your progress.",
    image: "/gym_trainer_training.jpg",
  },
  {
    tag: "Nutrition Consulting",
    title: "Eating for the goal",
    body:
      "Macros and habits that fit your schedule. Training is only half the work.",
    image: "/gym_girl.jpg",
  },
  {
    tag: "Athlete Training",
    title: "Sport-specific conditioning",
    body:
      "Strength, speed, and mobility for a season, a combine, or a meet.",
    image: "/some_body-builders.jpg",
  },
];

export const stats = [
  { num: "4.7★", label: "Google rating" },
  { num: "148", label: "Google reviews" },
  { num: "268", label: "Facebook recommends" },
  { num: "24/7", label: "Every single day" },
];

export const gallery = [
  { src: "/gym_env_1.jpg", alt: "Main training floor with racks and machines" },
  { src: "/gym_env-3.jpg", alt: "Free weights area" },
  { src: "/gym-people.jpg", alt: "Members training on the floor" },
  { src: "/gym_from_outside.jpg", alt: "Gym exterior off Loop 1604" },
  { src: "/some-result.jpg", alt: "Member progress result" },
];

export type Review = {
  name: string;
  meta: string;
  when: string;
  rating: number;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Cory Mobley",
    meta: "2 reviews",
    when: "a year ago",
    rating: 5,
    text: "Best gym in the city. Personal trainers available day and night. State of the art equipment for specific training. Plenty of space to get the job done. Clean facility. Conveniently located. Affordable cost, and my favorite — 24 hour access. It's like having your own gym.",
  },
  {
    name: "Alyssa Young",
    meta: "Local Guide · 13 reviews · 8 photos",
    when: "5 months ago",
    rating: 5,
    text: "Hands down the best gym in Texas! The owner really cares about your strength & fitness goals. It's evident in the set up of the gym, the programs offered & it's obviously kept in immaculate condition! Very clean, members are nice & I highly recommend.",
  },
  {
    name: "Shae C",
    meta: "Local Guide · 66 reviews · 123 photos",
    when: "5 months ago",
    rating: 5,
    text: "Love the staff and atmosphere. Gym is always clean and easily accessible 24hrs a day. The owner is extremely kind and opened up the gym to anyone who needed shower access during the big freeze. I highly recommend this gym to anyone serious about fitness.",
  },
  {
    name: "Ronnie Garcia",
    meta: "7 reviews",
    when: "a year ago",
    rating: 5,
    text: "Glad this gym was recommended to me! Ever since joining, my time here has been filled with great workouts and good energy. It has tons of great equipment for all types of fitness levels and goals. Indoor and outdoor turf is awesome as well.",
  },
  {
    name: "Nikki Witherspoon",
    meta: "10 reviews · 1 photo",
    when: "5 months ago",
    rating: 5,
    text: "TMF is a great facility with friendly staff and knowledgeable trainers who welcome people of all fitness levels. The gym has excellent equipment that can help you work toward and achieve your fitness goals.",
  },
  {
    name: "Charlotte Mckinnies",
    meta: "1 review",
    when: "a year ago",
    rating: 5,
    text: "I can't say enough good things about this gym. The staff is incredibly friendly and knowledgeable and always there to motivate. The all-access with your membership is second to none. The variety of equipment is perfect for any workout.",
  },
  {
    name: "Michelle Williams",
    meta: "1 review",
    when: "5 months ago",
    rating: 5,
    text: "I can't recommend Texas Muscle and Fitness in San Antonio enough! I've had the privilege of knowing the owner personally, and his passion for fitness and for helping people is truly what makes this gym stand out.",
  },
  {
    name: "Leylah Capone",
    meta: "1 review",
    when: "a year ago",
    rating: 5,
    text: "Love this gym and how private it is. I have 24 hr access to a place I can relax and get my mind back in order whenever I please. Texas Muscle has always been an establishment I send my personal friends and family to when they need great equipment as well as training.",
  },
  {
    name: "Alicia Heard",
    meta: "Local Guide · 15 reviews · 14 photos",
    when: "6 years ago",
    rating: 5,
    text: "LOVE the gym! Always super clean and the atmosphere is awesome! They have all the equipment you need and the owner Shawn is always willing to answer questions you have about training and diet. It's open 24/7 so you can get a workout in no matter what time of the day!",
  },
  {
    name: "Victoria Sanchez",
    meta: "Local Guide · 21 reviews · 7 photos",
    when: "4 years ago",
    rating: 5,
    text: "This gym is great if you want to be in and out due to the fact that there is hardly ever a crowd. The equipment is clean and the manager has a company that comes in often to clean the facility. Amazing atmosphere! And I also met some outstanding trainers.",
  },
  {
    name: "Kerresha",
    meta: "8 reviews",
    when: "a year ago",
    rating: 5,
    text: "Texas Muscle & Fitness is more than just a gym — it's a community built on dedication, strength, and real results. It's clear that Shawn has created an environment where people are supported and challenged.",
  },
  {
    name: "Antoinette Flores",
    meta: "1 review",
    when: "a year ago",
    rating: 5,
    text: "From the moment I walked into the gym after a long period of not working out, I was greeted at the door. I received personalized attention which is specific to this gym that welcomes you as family.",
  },
  {
    name: "Donta Watson",
    meta: "Local Guide · 34 reviews · 1 photo",
    when: "5 months ago",
    rating: 5,
    text: "Shawn has the ultimate expertise in fitness and brings a level of professionalism and care to all of his customer and client interactions!",
  },
  {
    name: "M",
    meta: "Local Guide · 18 reviews · 7 photos",
    when: "a year ago",
    rating: 5,
    text: "Great place to workout! The facility is always clean, the equipment is top notch, and the staff is incredibly friendly and helpful. If you're looking for a gym that has everything you need, this is the place to be!",
  },
];

/**
 * Map embed settings. Swap `lat` / `lng` when the exact coordinates land —
 * nothing else needs to change.
 */
export const mapConfig = {
  lat: 29.5602,
  lng: -98.7205,
  zoom: 16,
  label: "Texas Muscle & Fitness",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=10103+W+Loop+1604+N+%23105B,+San+Antonio,+TX+78254",
};
