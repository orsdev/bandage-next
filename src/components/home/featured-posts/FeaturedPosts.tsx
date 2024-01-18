"use client";

import { PostCard } from "@/components/common";
import { Box, Typography } from "@mui/material";

const MockPostsData = [
  {
    id: "001",
    title: "Loudest à la Madison #1 (L'integral)",
    info: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    commentCount: 10,
    thumbnail: "/images/posts/post-1.png",
    postedOn: new Date("05 October 2021 14:48 UTC").toISOString(),
    slug: "loudest-a-la",
    tags: ["google", "trending", "new"],
  },
  {
    id: "002",
    title: "Loudest à la Madison #1 (L'integral)",
    info: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    commentCount: 30,
    thumbnail: "/images/posts/post-2.png",
    postedOn: new Date("05 June 2023 14:48 UTC").toISOString(),
    slug: "loudest-a-la",
    tags: ["google", "trending", "new"],
  },
  {
    id: "003",
    title: "Loudest à la Madison #1 (L'integral)",
    info: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    commentCount: 4,
    thumbnail: "/images/posts/post-3.png",
    postedOn: new Date("02 October 2020 14:48 UTC").toISOString(),
    slug: "loudest-a-la",
    tags: ["google", "trending", "new"],
  },
];

export const FeaturedPosts = () => {
  return (
    <Box
      component="section"
      mt="160px"
      px={{ base: "2.4rem", sm: "40px", md: "50px" }}
      width="100%"
    >
      {/* Header */}
      <Box
        component="header"
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          component="p"
          variant="subtitle1"
          fontWeight={700}
          color="primary.main"
        >
          Practice Advice
        </Typography>
        <Typography
          component="h1"
          variant="h1"
          mt="5px"
          fontWeight={700}
          color="secondary.dark"
          textTransform="capitalize"
        >
          Featured Posts
        </Typography>
      </Box>

      {/* Posts */}
      <Box mt="80px">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(auto-fill, minmax(300px, 1fr))",
            },
            gap: "10px",
            rowGap: "30px",
          }}
        >
          {MockPostsData.map((post) => (
            <PostCard
              key={post.id}
              commentCount={post.commentCount}
              handleClick={() => {
                alert(post.slug);
              }}
              postedOn={post.postedOn}
              info={post.info}
              tags={post.tags}
              title={post.title}
              thumbnail={post.thumbnail}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
