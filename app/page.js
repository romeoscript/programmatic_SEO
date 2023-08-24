import Link from "next/link";
import slugify from "slugify";
import { faker } from "@faker-js/faker";
import Image from "next/image";

const generatePosts = () => {
  return Array.from({ length: 10 }).map(() => {
    const title = faker.lorem.sentence();
    const image = faker.image.image();
    const slug = slugify(title, { lower: true, strict: true });
    return {
      title,
      slug,
      image,
    };
  });
};

const Home = () => {
  const posts = generatePosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <li key={post.slug} className="border p-4 hover:shadow-lg transition-shadow duration-300">
            <Link href={`/post/${post.slug}`}>
              
                <Image
                  src={post.image}
                  alt={"romeoscripts"}
                  width={500}
                  height={500}
                  className="rounded-md mb-4"
                />
                <h2 className="text-2xl">{post.title}</h2>
          
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
