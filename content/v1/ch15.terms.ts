import type { Term } from "@/lib/glossary";

export const TERMS = {
  machinery: {
    term: "Machinery",
    kid: "A machine is a motor, some belts, and a set of tools that work by themselves, many at once.",
    grownUp:
      "A fully developed machine has three parts: the motor mechanism, the transmitting mechanism and the working machine (tool). As constant capital it creates no new value; it transfers its own value to the product as it wears out.",
    firstSeen: "1-15",
  },
  "factory-system": {
    term: "Factory system",
    kid: "Many machines in one building, run by one engine, with workers who keep pace with the machines.",
    grownUp:
      "Production organised around a system of machines driven by a central motor. The worker becomes an appendage of the machine, and factory discipline replaces the workshop's customs.",
    firstSeen: "1-15",
  },
  "intensity-of-labour": {
    term: "Intensity of labour",
    kid: "How hard and fast you have to work in each hour.",
    grownUp:
      "The amount of labour squeezed into a given time. When the law shortened the working day, capital raised intensity instead, through faster machines and closer filling of the 'pores' of the day.",
    firstSeen: "1-15",
  },
  luddites: {
    term: "Luddites",
    kid: "English weavers in the early 1800s who smashed the new machines that were taking their jobs.",
    grownUp:
      "The machine-breaking movement in the English manufacturing districts during the first years of the nineteenth century. Marx says workers later learned to attack not the machines but the way capital employed them.",
    firstSeen: "1-15",
  },
} satisfies Record<string, Term>;
