"use client";
import Image from "next/image";
import React from "react";

const BlogFullArticle = ({ blogs }) =>
  blogs.map((blog, index) => (
    <div>
      {" "}
      <div className="relative h-[40vh] object-cover object-bottom">
        <Image
          src={blog.imageSrc}
          alt={blog.title}
          objectFit="cover"
          objectPosition="top"
          fill
          className="w-full h-[45vh] object-cover object-bottom"
        />
      </div>
      <div className="py-6 px-4 flex flex-col items-center lg:justify-center">
        <article key={index} className="max-w-2xl mx-auto py-6">
          <div className="overflow-hidden rounded-lg shadow-lg text-white">
            <header className="px-4 py-2">
              <h1 className="text-xl font-semibold">{blog.title}</h1>
              <span className="text-sm">{blog.date}</span>
            </header>
            <div className="px-4 py-2">
              {blog.content.map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="px-4 py-2">
              <a href="/blog" className="text-blue-500 hover:underline">
                Retour au blog
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  ));

export default BlogFullArticle;
