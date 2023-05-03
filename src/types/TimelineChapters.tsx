interface TimelineChapter {
  id: number;
  header: string;
  subHeader: string;
  text: string;
  date: string;
  type: "school" | "work" | "military";
  technologies?: string[];
  scores?: {
    final: string;
    project: string;
  };
}

export default TimelineChapter;
