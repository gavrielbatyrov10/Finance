const prisma = require("../prisma");

/** Seeds the database with a user and some tasks */
const seed = async () => {
  await prisma.user.upsert({
    where: {
      username: "foo",
    },
    update: {},
    create: {
      username: "foo",
      password: "bar",
      posts: {
        create: [
          { 
            title: "Post 1", 
            content: "Content for post 1", 
            imageUrl: "https://example.com/image1.jpg" 
          },
          { 
            title: "Post 2", 
            content: "Content for post 2", 
            imageUrl: "https://example.com/image2.jpg" 
          },
          { 
            title: "Post 3", 
            content: "Content for post 3" // no imageUrl for this post
          },
        ],
      },
    },
  });
};


seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
