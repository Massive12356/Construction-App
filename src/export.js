import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export  const allservices = [
  {
    icon: building,
    title: "BUILDING RENOVATION",
    about:
      "Revitalize and enhance your space with expert renovations designed to exceed your expectations.",
  },
  {
    icon: construction,
    title: "CONSTRUCTION SERVICES",
    about:
      "From groundbreaking to the final touch, we provide comprehensive construction solutions tailored to your needs.",
  },
  {
    icon: design,
    title: "DESIGN & PLANNING",
    about:
      "Transform your ideas into reality with meticulous design and planning that ensures flawless execution.",
  },
  {
    icon: document,
    title: "DOCUMENTATION",
    about:
      "Streamline your project with professional documentation that meets industry standards and regulations.",
  },
  {
    icon: paint,
    title: "INTERIOR DESIGN",
    about:
      "Create stunning interiors with personalized designs that blend functionality and elegance seamlessly.",
  },
  {
    icon: support,
    title: "CUSTOMER SUPPORT",
    about:
      "Your satisfaction is our priority. Count on us for dedicated support throughout every step of your project.",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      "We start by understanding your vision and laying out a detailed plan to ensure every aspect of your project is addressed with precision.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
      "Our team of experts creates innovative and customized designs that align perfectly with your goals and preferences.",
  },
  {
    icon: FaRegBuilding,
    title: "building",
    about:
      "With skilled craftsmanship and state-of-the-art tools, we bring your project to life, maintaining the highest standards of quality.",
  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
      "We deliver a polished and completed project, ensuring every detail exceeds your expectations, ready for you to enjoy.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "BIBI-NTI Construction delivered beyond my expectations. Their attention to detail and commitment to quality are unmatched. I highly recommend their services!",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Working with BIBI-NTI Construction was seamless. Their expertise and collaborative approach made my designs come to life flawlessly",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Their dedication and professionalism are truly remarkable. They build not just structures but trust and lasting relationships",
    post: "Builder",
  },
];
