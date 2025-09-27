interface TimelineChapter {
  header: string;
  subHeader: string;
  text: string;
  date: string;
  type: "school" | "work" | "military";
  technologies?: string[];
  link?: string;
  image?: string;
  alt?: string;
  finalProjectScore?: string;
}

export default TimelineChapter;
