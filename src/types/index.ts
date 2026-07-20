import React from 'react';

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  metric: string;
  avatar: string;
}

export interface PortfolioItem {
  id: number;
  category: string;
  filterCategory: string;
  title: string;
  metric: string;
  desc: string;
  industry: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface Service {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  bgCircle: string;
}

export interface JobOpening {
  title: string;
  type: string;
  location: string;
  experience: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  initials: string;
  skills: string[];
  bio: string;
  gradient: string;
  image?: string;
}

export interface WhyChooseFeature {
  icon: React.ReactNode;
  bg: string;
  title: string;
  desc: string;
}

export interface TrustCompany {
  name: string;
  industry: string;
  icon: string;
}

export interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

export interface BlogPost {
  id: number;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  category: string;
  gradient: string;
  icon: React.ReactNode;
}
