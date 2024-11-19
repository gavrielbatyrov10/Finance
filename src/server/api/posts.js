/** routes/posts.js */
const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** User must be logged in to access posts */
router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, "You must be logged in."));
  }
  next();
});

/** Sends all posts */
router.get("/", async (req, res, next) => {
  try {
    const posts = await prisma.post.findMany({
      where: { userId: res.locals.user.id },
    });
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

/** Creates new post */
router.post("/", async (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      throw new ServerError(400, "Title and content required.");
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(post);
  } catch (err) {
    next(err);
  }
});

/** Updates single post */
router.put("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { title, content } = req.body;

    const post = await prisma.post.findUnique({ where: { id } });
    if (!post || post.userId !== res.locals.user.id) {
      throw new ServerError(403, "This post does not belong to you.");
    }

    const updatedPost = await prisma.post.update({
      where: { id },
      data: { title, content },
    });
    res.json(updatedPost);
  } catch (err) {
    next(err);
  }
});

/** Deletes single post */
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const post = await prisma.post.findUnique({ where: { id } });
    if (!post || post.userId !== res.locals.user.id) {
      throw new ServerError(403, "This post does not belong to you.");
    }

    await prisma.post.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
