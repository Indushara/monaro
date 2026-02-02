import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

const posts: Post[] = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: 'Smart Land Buying In Sri Lanka: A Complete Guide For Safe And Profitable Investments',
  excerpt:
    'A concise guide to help you evaluate land investments, understand legal checks, and maximise returns while minimising risk.',
  date: 'Jan 20, 2026',
  author: 'Monaro Team',
  image: 'https://images.unsplash.com/photo-1560184897-6f1b0d9d1b6a?w=1200&q=80',
  slug: `smart-land-buying-${i + 1}`,
}));

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative pt-24">
        <div className="relative h-130 w-full overflow-hidden">
          {/* Use local hero.svg so it always renders */}
          <Image
            src={posts[0].image}
            alt={posts[0].title}
            fill
            className="object-cover"
            sizes="100vw"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-linear-to-b via-black/40 to-black/10" />

          {/* Hero content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 text-white">
              <div className="max-w-3xl">
                <p className="text-sm text-white/80 uppercase tracking-wider mb-2">Featured</p>
                <h1 className="text-4xl sm:text-6xl font-bold leading-tight">{posts[0].title}</h1>
                <p className="mt-4 text-sm sm:text-base text-white/90">
                  A complete walkthrough on how to identify, evaluate and purchase land in Sri Lanka with confidence.
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <Link href={`/blog/${posts[0].slug}`}>
                    <Button variant="primary">View Blog</Button>
                  </Link>

                  <div className="flex items-center gap-3 text-xs text-white/90">
                    <Image src="/avatar.svg" alt="author" width={40} height={40} className="rounded-full" />
                    <div>
                      <div className="font-semibold">{posts[0].author}</div>
                      <div className="text-white/70">{posts[0].date} • 10 min read</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent posts */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Recent Blog Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <div className="relative h-44 sm:h-40">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1">{post.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3">{post.excerpt}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image src="/avatar.svg" alt={post.author} width={36} height={36} className="rounded-full" />
                    <div className="text-xs text-gray-500">
                      <div className="font-semibold">{post.author}</div>
                      <div>{post.date}</div>
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="secondary" className="px-3! py-2! text-xs">
                      Read
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="secondary" className="px-8 py-2 rounded-full">
            Load More
          </Button>
        </div>
      </section>

      {/* Footer purple bar to match design */}
      <footer className="bg-purple-700 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <div className="mb-4 font-semibold">Monaro Lands</div>
          <div className="text-sm">Company • Properties • Services • Support</div>
        </div>
      </footer>
    </main>
  );
}
