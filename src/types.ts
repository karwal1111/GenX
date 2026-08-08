export type CategoryType = 
  | 'All'
  | 'Generative AI & LLMs'
  | 'Computer Vision'
  | 'Predictive Analytics'
  | 'Autonomous AI Agents'
  | 'Edge AI & IoT';

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: CategoryType;
  clientIndustry: string;
  clientRegion: string;
  duration: string;
  summary: string;
  problem: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  techStack: string[];
  featured: boolean;
  image: string;
  architectureDiagram?: string;
  interactiveDemoType?: 'rag' | 'vision' | 'predictive' | 'agent';
  resultsSummary: string;
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
}

export type BlogCategory = 
  | 'All'
  | 'Generative AI'
  | 'ML Engineering'
  | 'AI Strategy'
  | 'Case Studies'
  | 'Computer Vision';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  likes: number;
  featured: boolean;
  tags: string[];
  image: string;
  keyTakeaways: string[];
}

export interface EnquiryFormInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  preferredContact: 'Email' | 'WhatsApp' | 'Phone Call';
}

export interface StoredEnquiry extends EnquiryFormInput {
  id: string;
  refId: string;
  timestamp: string;
  status: 'New' | 'In Review' | 'Contacted' | 'Closed';
}

export interface AIRoadmapResult {
  executiveSummary: string;
  suggestedArchitecture: string;
  keyPhases: {
    phase: string;
    deliverable: string;
  }[];
  estimatedROI: string;
  techStack: string[];
  recommendedGenXServices: string[];
  consultingNextStep: string;
}

export interface ROICalculatorState {
  industry: string;
  monthlyOpCost: number;
  teamSize: number;
  automationLevel: number; // percentage 10 - 80%
  hourlyRate: number;
}
