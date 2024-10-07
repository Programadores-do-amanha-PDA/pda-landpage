import { Event } from "../event/_eventModel";

export interface Student {
  _id?: string;
  id?: string;
  name: string;
  bio: string;
  email?: string;
  mobile?: string;
  github: string;
  linkedin: string;
  avatar?: string;
  class: string;
  slug: string;
  createdAt?: Date;
  events?: Array<any>;
  city: string;
  state: String;
  technologies: string[];
}
