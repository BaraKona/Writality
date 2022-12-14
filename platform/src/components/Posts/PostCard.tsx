import { FC } from "react";
import { IPost } from "../../interfaces/IPost";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  ScrollArea,
  Title,
} from "@mantine/core";
import { Project } from "../../pages/dashboard/project";

export const PostCard: FC<{ post: IPost }> = ({ post }) => {
  const postCardPicture = () => {
    const pictures = [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
      "https://images.unsplash.com/photo-1510218830377-2e994ea9087d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1316&q=80",
      "https://images.unsplash.com/photo-1516780236580-ef416334d5b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80",
    ];

    return pictures[Math.floor(Math.random() * pictures.length)];
  };

  return (
    // render the post here as a card using the post object
    <Card
      p="lg"
      radius="sm"
      className="hover:bg-base bg-baseMid hover:border-0 border-baseBorder"
    >
      <Card.Section component="a" href="https://mantine.dev/">
        <Image src={postCardPicture()} height={160} alt="Post" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500} size="lg">
          {post?.postTitle || "Post Title"}
        </Text>
        <div className="flex gap-2">
          <Badge color="pink" variant="light">
            {post?.collaborationType}
          </Badge>
          <Badge color="cyan" variant="light">
            {post?.postType}
          </Badge>
        </div>
      </Group>

      <Text>
        <Title order={4}>{post?.projectTitle || "Project 0"}</Title>
      </Text>

      {/* <Text className="text-pink-400">Description: </Text>
      <ScrollArea style={{ height: 200 }} scrollbarSize={4}>
        <Text size="md" color="dimmed">
          {post?.description}
        </Text>
      </ScrollArea> */}

      <Text className="text-pink-400 mt-5">Description: </Text>
      <ScrollArea style={{ height: 200 }} scrollbarSize={4}>
        <Text size="md" color="dimmed">
          {post?.collaboration}
        </Text>
      </ScrollArea>
      <div className="flex gap-2 flex-wrap mt-2 h-12">
        {post?.genres.map((genre) => (
          <Badge color="cyan" variant="light">
            {genre}
          </Badge>
        ))}
      </div>
      <Button variant="light" color="indigo" fullWidth mt="md" radius="md">
        View Post
      </Button>
    </Card>

    // <div className="">
    //   <h4>{post?.title}</h4>
    //   <h5>{post.subtitle}</h5>
    //   <p>{post.description}</p>
    //   <div className="flex">
    //     {post?.genres.map((genre) => (
    //       <p>{genre}</p>
    //     ))}
    //   </div>
    //   <p>{post?.postType}</p>
    //   <p>{post?.collaborationType}</p>
    // </div>
  );
};
