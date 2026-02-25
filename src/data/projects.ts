// src/data/projects.ts

export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    link: string;
    image: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "A Cozy Cafe",
      category: "Product Design",
      description: "A cozy cafe homepage built in Figma.",
      link: "https://www.figma.com/design/I9pnONvOKYgdHFvNinWV1L/first?node-id=0-1&t=OQ1CJ6qe5S5W8544-1",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
    },
    {
      id: 2,
      title: "Anatomy Sketches",
      category: "Fine Art",
      description: "Series of graphite studies from my Studio Diary.",
      link: "https://instagram.com/_vyrx_._",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop"
    }
  ];