export interface Student {
  _id?: string;
  id?: string;
  name: string;
  class: string;
  technologies: string[];
  email?: string;
  mobile?: string;
  github: string;
  linkedin: string;
  avatar?: string;
  createdAt?: Date;
}


const dados = {
  "name": "",
  "class": "",
  "technologies": [],
  "email": "",
  "mobile": "",
  "github": "",
  "linkedin": "",
}