const getYouTubeVideoId = (url: string) => {
  try {
    return new URL(url).searchParams.get("v") ?? "";
  } catch {
    return "";
  }
};

export type Video = {
  id: number;
  titulo: string;
  videoId: string;
};

export type Curso = {
  id: number;
  nombre: string;
  videos: Video[];
};

const createVideo = (id: number, titulo: string, youtubeUrl: string): Video => ({
  id,
  titulo,
  videoId: getYouTubeVideoId(youtubeUrl),
});

const createCourseVideos = (idBase: number, titulo: string, youtubeUrl: string): Video[] => [
  createVideo(idBase, `${titulo} - Clase principal`, youtubeUrl),
  createVideo(idBase + 1, `${titulo} - Repaso guiado`, youtubeUrl),
  createVideo(idBase + 2, `${titulo} - Ejercicios resueltos`, youtubeUrl),
];

export const videotecaCursos: Curso[] = [
  {
    id: 1,
    nombre: "Geometría",
    videos: createCourseVideos(101, "Geometría", "https://www.youtube.com/watch?v=JANLpuDwP64"),
  },
  {
    id: 2,
    nombre: "Filosofía",
    videos: createCourseVideos(201, "Filosofía", "https://www.youtube.com/watch?v=yndtsQV6ppA"),
  },
  {
    id: 3,
    nombre: "Psicología",
    videos: createCourseVideos(301, "Psicología", "https://www.youtube.com/watch?v=fEsNDBaV4Yc"),
  },
  {
    id: 4,
    nombre: "Habilidad Matemática",
    videos: createCourseVideos(
      401,
      "Habilidad Matemática",
      "https://www.youtube.com/watch?v=60I-MVFH8Pg",
    ),
  },
  {
    id: 5,
    nombre: "Trigonometría",
    videos: createCourseVideos(
      501,
      "Trigonometría",
      "https://www.youtube.com/watch?v=2rWYlxPEHO0",
    ),
  },
  {
    id: 6,
    nombre: "Química",
    videos: createCourseVideos(601, "Química", "https://www.youtube.com/watch?v=J4lx4lBhhMc"),
  },
  {
    id: 7,
    nombre: "Literatura",
    videos: createCourseVideos(701, "Literatura", "https://www.youtube.com/watch?v=vQTizOwza44"),
  },
  {
    id: 8,
    nombre: "Lenguaje",
    videos: createCourseVideos(801, "Lenguaje", "https://www.youtube.com/watch?v=GXNFGVNQ2dE"),
  },
];
