export interface Lesson {
  id: string
  title: string
  description: string
  videoUrl: string
  duration: number
  order: number
}

export interface Module {
  id: string
  title: string
  description: string
  lessons: Lesson[]
}

export interface Course {
  id: string
  title: string
  instrument: string
  level: string
  description: string
  thumbnail: string
  instructor: string
  duration: number
  students: number
  modules: Module[]
}

export const courses: Course[] = [
  {
    id: "drums-beginners",
    title: "Drums for Beginners",
    instrument: "Drums",
    level: "Beginner",
    description: "Master the fundamentals of drumming from holding sticks to playing your first worship beat.",
    thumbnail: "/drum-kit-with-drum-sticks.jpg",
    instructor: "Marcus Johnson",
    duration: 120,
    students: 342,
    modules: [
      {
        id: "module-1",
        title: "Basic Beat Patterns",
        description: "Learn the foundational rhythms every drummer needs to know",
        lessons: [
          {
            id: "lesson-1",
            title: "Holding Drumsticks",
            description: "Learn the proper grip and posture for comfortable, controlled drumming.",
            videoUrl: "https://www.youtube.com/embed/gJbJuNBspv4",
            duration: 8,
            order: 1,
          },
          {
            id: "lesson-2",
            title: "Basic 4/4 Beat",
            description: "Master the fundamental 4/4 rhythm pattern used in most worship songs.",
            videoUrl: "https://www.youtube.com/embed/gJbJuNBspv4",
            duration: 12,
            order: 2,
          },
          {
            id: "lesson-3",
            title: "Adding the Hi-Hat",
            description: "Add definition to your beat with proper hi-hat technique.",
            videoUrl: "https://www.youtube.com/embed/gJbJuNBspv4",
            duration: 10,
            order: 3,
          },
        ],
      },
      {
        id: "module-2",
        title: "Worship Rhythms",
        description: "Play the specific beats used in modern church worship music",
        lessons: [
          {
            id: "lesson-4",
            title: "Contemporary Worship Beat",
            description: "The essential rhythm pattern for modern worship songs.",
            videoUrl: "https://www.youtube.com/embed/gJbJuNBspv4",
            duration: 14,
            order: 1,
          },
          {
            id: "lesson-5",
            title: "Ballad Patterns",
            description: "Softer, more controlled patterns for slower worship songs.",
            videoUrl: "https://www.youtube.com/embed/gJbJuNBspv4",
            duration: 12,
            order: 2,
          },
          {
            id: "lesson-6",
            title: "Playing with Dynamics",
            description: "Master volume control and intensity changes throughout a song.",
            videoUrl: "https://www.youtube.com/embed/gJbJuNBspv4",
            duration: 11,
            order: 3,
          },
        ],
      },
    ],
  },
  {
    id: "guitar-worship",
    title: "Worship Guitar Essentials",
    instrument: "Guitar",
    level: "Beginner",
    description: "Learn to play worship songs and lead guitar for church services.",
    thumbnail: "/acoustic-guitar.png",
    instructor: "Sarah Mitchell",
    duration: 180,
    students: 286,
    modules: [
      {
        id: "module-1",
        title: "Chord Fundamentals",
        description: "Master essential chords for worship music",
        lessons: [
          {
            id: "lesson-1",
            title: "Open Chord Shapes",
            description: "Learn the basic chord shapes every guitarist needs.",
            videoUrl: "https://www.youtube.com/embed/gJbJuNBspv4",
            duration: 15,
            order: 1,
          },
          {
            id: "lesson-2",
            title: "Chord Transitions",
            description: "Smooth transitions between chords for continuous playing.",
            videoUrl: "https://www.youtube.com/embed/gJbJuNBspv4",
            duration: 12,
            order: 2,
          },
        ],
      },
    ],
  },
]
