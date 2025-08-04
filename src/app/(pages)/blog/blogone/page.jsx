"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import ScrollToTop from "@/Components/ui/ScrollToTop";
import BeforeFooter from "@/Components/BeforeFooter";
export default function BlogArticle() {
  const router = useRouter();

  const handleReturnToBlog = () => {
    router.push("/blog");
  };

  return (
    <section className=" xl1440:bg-[#8ECFB9]">
      <Navbar />
      <ScrollToTop />

      <div className="max-w-4xl mx-auto px-6 py-12 z-20 relative">
        <article className=" xl1440:mt-32 mt-20">
          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              The Future of Web Development: Embracing Modern Frameworks
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
              Exploring how Next.js and React are transforming the way we build
              scalable, performant web applications
            </h2>
          </header>

          {/* Article Meta */}
          <div className="flex items-center text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
            <span>Published on March 15, 2024</span>
            <span className="mx-2">•</span>
            <span>8 min read</span>
            <span className="mx-2">•</span>
            <span>Web Development</span>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In the rapidly evolving landscape of web development, choosing the
              right framework can make the difference between a project that
              thrives and one that struggles to keep pace with modern demands.
              Next.js has emerged as a powerful solution that combines the
              flexibility of React with the performance benefits of server-side
              rendering and static site generation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As developers, we're constantly seeking tools that not only
              enhance our productivity but also deliver exceptional user
              experiences. Next.js addresses these needs by providing a
              comprehensive framework that handles routing, optimization, and
              deployment seamlessly, allowing developers to focus on building
              features rather than configuring build processes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The framework's approach to hybrid rendering – supporting both
              static generation and server-side rendering – offers unprecedented
              flexibility in how we deliver content to users. This adaptability
              ensures that applications can scale effectively while maintaining
              optimal performance across different use cases and user scenarios.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Looking ahead, the integration of features like Edge Runtime,
              Middleware, and advanced image optimization positions Next.js as
              not just a current solution, but a forward-thinking platform that
              anticipates the future needs of web development. As we continue to
              push the boundaries of what's possible on the web, frameworks like
              Next.js provide the foundation for innovation and growth.
            </p>
          </div>

          {/* Return Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={handleReturnToBlog}
              className="inline-flex items-center px-6 py-3 bg-main text-white font-medium rounded-3xl hover:bg-second transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Return to Blog
            </button>
          </div>
        </article>
      </div>
      <div className="-mt-72">
        <BeforeFooter />
      </div>
    </section>
  );
}
