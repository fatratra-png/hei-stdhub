export const ROLES = {
  STUDENT: 'student',
  TEACHER: 'teacher',
}

export const LEVELS = ['L1', 'L2', 'L3']

export const GROUPS = {
  L1: ['N1', 'N2', 'N3', 'N4'],
  L2: ['K1', 'K2', 'K3'],
  L3: ['J1', 'J2'],
}

export const COURSES = {
  L1: ['WEB1', 'PROG1', 'SYS1', 'DONNEES1', 'THEORIE1-P1', 'THEORIE1-P2',
       'WEB2', 'PROG2-POO', 'PROG2-API', 'SYS2', 'DONNEES2', 'IA1'],
  L2: ['WEB3', 'PROG3', 'MGT2', 'PROG4', 'SYS3'],
  L3: ['MOB1', 'PROG5', 'SECU1', 'SECU2'],
}

export const CONTENT_TYPES = {
  TD: { label: 'TD', color: 'bg-cyan-400 text-white' },
  EXAMEN: { label: 'Examen', color: 'bg-red-500 text-white' },
  COURS: { label: 'Cours', color: 'bg-white text-gray-700 border border-gray-200' },
}