"use client";
import React from 'react';
import { faker } from '@faker-js/faker';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

const PostPage = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const title = faker.lorem.sentence();
    const content = faker.lorem.paragraphs(5);
    const excerpt = content.substring(0, 155);
    const imageUrl = faker.image.url();  // Generate random image

    setPost({
      title,
      content,
      excerpt,
      imageUrl
    });
  }, []);

  if (!post) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <NextSeo
        title={post.title}
        description={post.excerpt}
      />
      <div className="text-center">
        <Image 
          src={post.imageUrl}
          alt={post.title}
          width={600}
          height={400}
          className="rounded-lg mb-8"
        />
      </div>
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-lg leading-relaxed">{post.content}</p>
    </div>
  );
};

export default PostPage;
