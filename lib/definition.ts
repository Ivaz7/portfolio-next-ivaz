export interface Project {
  name: string;
  linkWebsite: string;
  linkPreview: string;
  img: string;
  mostUsedTools: string[];
  allTools?: string[];
}

export interface Technology {
  name: string;
  img: string;
  bgColor: string;
  bdrColor: string;
}

export interface Certification {
  img: string;
  link: string;
}

export interface Quote {
  quote: string;
  from: string;
}