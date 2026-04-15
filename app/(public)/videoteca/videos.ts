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
  youtubeUrl: string;
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
  youtubeUrl,
  videoId: getYouTubeVideoId(youtubeUrl),
});

export const videotecaCursos: Curso[] = [
  {
    id: 1,
    nombre: "Geometría",
    videos: [
      createVideo(101, "Geometría", "https://www.youtube.com/watch?v=JANLpuDwP64"),
    ],
  },
  {
    id: 2,
    nombre: "Filosofía",
    videos: [
      createVideo(201, "Filosofía", "https://www.youtube.com/watch?v=yndtsQV6ppA"),
    ],
  },
  {
    id: 3,
    nombre: "Psicología",
    videos: [
      createVideo(301, "Psicología", "https://www.youtube.com/watch?v=fEsNDBaV4Yc"),
    ],
  },
  {
    id: 4,
    nombre: "Habilidad Matemática",
    videos: [
      createVideo(
        401,
        "Habilidad Matemática",
        "https://www.youtube.com/watch?v=60I-MVFH8Pg",
      ),
    ],
  },
  {
    id: 5,
    nombre: "Trigonometría",
    videos: [
      createVideo(
        501,
        "Trigonometría",
        "https://www.youtube.com/watch?v=2rWYlxPEHO0",
      ),
    ],
  },
  {
    id: 6,
    nombre: "Química",
    videos: [
      createVideo(601, "Química", "https://www.youtube.com/watch?v=J4lx4lBhhMc"),
    ],
  },
  {
    id: 7,
    nombre: "Literatura",
    videos: [
      createVideo(701, "Literatura", "https://www.youtube.com/watch?v=vQTizOwza44"),
    ],
  },
  {
    id: 8,
    nombre: "Lenguaje",
    videos: [
      createVideo(801, "Lenguaje", "https://www.youtube.com/watch?v=GXNFGVNQ2dE"),
    ],
  },
];
