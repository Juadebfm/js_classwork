for (let i = 0; i < 11; i++) {
  console.log(i);
}
console.log("Green");

for (i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Happy New Year");

//While loops
let j = 10;

while (j > 0) {
  console.log(j);
  j--;
}

//Further loop samples
const blogPosts = [
  {
    title: "What is Javascript",
    author: "Juadeb Femi Ade",
    publishedDate: "Feb 12, 2023",
    publishedTime: "3:30pm",
    content:
      "JavaScript is a client-side scripting language as well as a server-side scripting language.This scripting language can be written into HTML pages (also could use CSS for styling the pages) and web browsers understand the page.This scripting language also acts like an object-oriented programming language but not a class-based object-oriented language.",
  },
  {
    title: "What is CSS",
    author: "Juadeb Femi Ade",
    publishedDate: "Jan 11, 2020",
    publishedTime: "3:30pm",
    content:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
  },
  {
    title: "What is HTML",
    author: "Queen Anyanwu",
    publishedDate: "Dec 12, 2023",
    publishedTime: "3:30am",
    content:
      "Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.",
  },
];

for (let p = 0; p < blogPosts.length; p++) {
  const postTitle = blogPosts[p].title;
  const postAuthor = blogPosts[p].author;
  const postDate = blogPosts[p].publishedDate;
  const postTime = blogPosts[p].publishedTime;

  console.log(postTime);
  console.log(postTitle);
  console.log(postDate);
  console.log(postAuthor);
}

const arr = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  7,
  8,
  9,
  10,
  NaN,
  null,
  undefined,
];
for (let l = 0; l < arr.length; l++) {
  if (typeof arr[l] === "number") {
    console.log("This index is a number");
  } else if (typeof arr[l] === "string") {
    console.log("This index not a number");
  } else {
    console.log("Unknown");
  }
}
