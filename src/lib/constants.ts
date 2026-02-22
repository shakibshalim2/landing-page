// Navigation links
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

// Feature items
export const FEATURES = [
  {
    icon: "CalendarCheck",
    title: "Easy Appointment Booking",
    description:
      "Schedule appointments with your preferred doctors in just a few clicks. Get instant confirmations and reminders.",
  },
  {
    icon: "FileText",
    title: "Digital Health Records",
    description:
      "Access your complete medical history anytime, anywhere. Securely stored and easily shareable with your care team.",
  },
  {
    icon: "MessageCircle",
    title: "Secure Messaging",
    description:
      "Communicate directly with your healthcare providers through our encrypted messaging platform.",
  },
  {
    icon: "Pill",
    title: "Prescription Management",
    description:
      "Track your medications, set refill reminders, and receive digital prescriptions from your doctors.",
  },
  {
    icon: "Activity",
    title: "Health Analytics",
    description:
      "Monitor vital health metrics with intuitive dashboards and receive personalized health insights.",
  },
  {
    icon: "Shield",
    title: "Privacy & Security",
    description:
      "Your data is protected with end-to-end encryption and HIPAA-compliant security standards.",
  },
] as const;

// Doctor profiles
export const DOCTORS = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Cardiologist",
    experience: "15+ years",
    rating: 4.9,
    patients: "2,000+",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    availability: "Mon - Fri",
  },
  {
    name: "Dr. James Rodriguez",
    specialty: "Neurologist",
    experience: "12+ years",
    rating: 4.8,
    patients: "1,800+",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    availability: "Mon - Sat",
  },
  {
    name: "Dr. Emily Chen",
    specialty: "Pediatrician",
    experience: "10+ years",
    rating: 4.9,
    patients: "3,500+",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    availability: "Tue - Sat",
  },
  {
    name: "Dr. Michael Okafor",
    specialty: "Dermatologist",
    experience: "8+ years",
    rating: 4.7,
    patients: "1,200+",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    availability: "Mon - Fri",
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Amanda Peters",
    role: "Patient",
    content:
      "CareNest completely transformed how I manage my healthcare. Booking appointments is seamless, and I love having all my records in one place.",
    rating: 5,
    avatar: "AP",
  },
  {
    name: "Dr. Robert Kim",
    role: "General Physician",
    content:
      "As a doctor, this platform has streamlined my practice significantly. Patient communication is effortless, and the scheduling system is brilliant.",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Jessica Morales",
    role: "Patient",
    content:
      "The prescription management feature is a lifesaver. I never miss my medications anymore, and the refill reminders are incredibly helpful.",
    rating: 5,
    avatar: "JM",
  },
] as const;

// Stats
export const STATS = [
  { value: "50K+", label: "Active Patients" },
  { value: "200+", label: "Qualified Doctors" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "24/7", label: "Support Available" },
] as const;

// Footer links
export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#" },
    { label: "For Doctors", href: "#doctors" },
    { label: "For Patients", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
} as const;
