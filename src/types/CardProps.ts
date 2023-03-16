export interface CardProps {
  project: {
    name: string;
    description: string;
    id: number;
    image: string[];
    tools: string[];
    links: string[];
    date?: string;
  };
  experienceProject?: boolean;
}
