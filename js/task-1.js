const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title, a, isP, r } = book;

// Використовуємо
const accessType = isP ? "pulbic" : "private";
const message = `Book ${title} by author ${a} with rating ${r} is in ${accessType} access!`;

console.log(message);