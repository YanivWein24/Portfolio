interface TimelineChapter {
  id: number;
  header: string;
  subHeader: string;
  text: string;
  date: string;
  type: "school" | "work" | "military";
  technologies?: string[];
  link?: string;
  image?: string;
  alt?: string;
  scores?: {
    final: string;
    project: string;
  };
}

export default TimelineChapter;
