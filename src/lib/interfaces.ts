// import { type Author } from "./author";
export type Author = {
  name: string,
  url: string
}

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  size: number;
  preview?: boolean;
};

export const postEmpty: Post = {
  slug: "",
  title: "",
  date: "0",
  coverImage: "",
  author: {
    name: "",
    url: ""
  },
  excerpt: "",
  ogImage: {
    url: ""
  },
  content: "",
  size: 0,
  preview: false,
}

export type Device = {
  name: string
  image: string
  slug: string
  content: string
}

export const deviceEmpty: Device = {
  name: "",
  image: "",
  slug: "",
  content: ""
}