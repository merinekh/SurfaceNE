"use client";
import Image from "next/image";
import React from "react";

const BlogFullArticle = ({ blogs }) =>
  blogs.map((blog, index) => (
    <div key={index}>
      {" "}
      <div className="relative h-[15vh] sm:h-[35vh] 2xl:h-[40vh] object-cover object-bottom">
        <Image
          src={blog.imageSrc}
          alt={blog.title}
          objectFit="cover"
          objectPosition="bottom"
          fill
          // className="w-full h-[45vh] object-cover object-bottom"
        />
      </div>
      <div className="py-4 px-4 flex flex-col items-center lg:justify-center">
        <article key={index} className="py-6 flex justify-center w-full">
          <div className="overflow-hidden rounded-lg shadow-lg text-white px-2 sm:px-4 lg:w-[75vw] 2xl:w-[50vw]">
            <header className=" py-2">
              <h1 className="text-2xl 2xl:text-3xl font-bold">{blog.title}</h1>
              <span className="text-sm text-gray-300">{blog.date}</span>
            </header>
            <div className="py-2">
              {blog.content.map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph.includes("Avantages") ? (
                    <span className="text-lg font-semibold pt-4">
                      {paragraph}
                    </span>
                  ) : (
                    paragraph.split("**").map((text, index) => {
                      if (index % 2 === 1) {
                        return (
                          <span
                            key={index}
                            className="font-semibold underline underline-offset-4"
                          >
                            {text}
                          </span>
                        );
                      } else {
                        return text;
                      }
                    })
                  )}
                </p>
              ))}
            </div>{" "}
            <div className="my-4 lg:mt-6">
              <a
                href="/quote"
                className="text-center inline-block px-4 py-2 rounded-full bg-white text-black hover:bg-gray-300 transition duration-300 ease-in-out text-sm lg:text-base"
              >
                OBTENEZ VOTRE SOUMISSION GRATUITE
              </a>
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
