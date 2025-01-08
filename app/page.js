"use client"
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import matter from "gray-matter";
import Link from 'next/link';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Tailwind', 'Bootstrap', 'Shadcn', 'Remark', 'Rehype', 'Magic UI', 'Acertinity UI', 'Material UI', 'Strapi', 'Appwrite', 'Flowbite', 'Next UI'],
      typeSpeed: 120,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main>
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              An <span className="font-semibold">Open Source</span> markdown blog<br className="hidden lg:block" /> teaches you about <span className="font-semibold underline decoration-primary" ref={el}></span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
            </p>
            <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
              <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">

              </form>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
          </div>
        </section>

        <section className="relative py-12 bg-gray-100 dark:bg-gray-900">
          <div className="absolute inset-0">
            <BackgroundBeams />
          </div>

          <div className="container relative px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that suits you best</p>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* Basic Plan */}
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
                  <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
                  <ul className="mt-6 mb-6 space-y-4">
                    <li className="text-gray-600 dark:text-gray-400"><s>10GB Storage</s></li>
                    <li className="text-gray-600 dark:text-gray-400"><s>Basic Support</s></li>
                    <li className="text-gray-600 dark:text-gray-400"><s>Single User</s></li>
                    <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                    <li className="text-gray-600 dark:text-gray-400">Weekly Updates</li>
                  </ul>
                  <Button className="mx-1" variant="outline">Choose Plan</Button>
                </div>
              </div>
              {/* Standard Plan */}
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
                  <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Bestseller</span>
                  <ul className="mt-6 mb-6 space-y-4">
                    <li className="text-gray-600 dark:text-gray-400">50GB Storage</li>
                    <li className="text-gray-600 dark:text-gray-400">Priority Support</li>
                    <li className="text-gray-600 dark:text-gray-400">Up to 5 Users</li>
                    <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                    <li className="text-gray-600 dark:text-gray-400">Daily Updates</li>
                  </ul>
                  <Button className="mx-1" variant="outline">Choose Plan</Button>
                </div>
              </div>
              {/* Premium Plan */}
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
                  <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
                  <ul className="mt-6 mb-6 space-y-4">
                    <li className="text-gray-600 dark:text-gray-400">200GB Storage</li>
                    <li className="text-gray-600 dark:text-gray-400">24/7 Support</li>
                    <li className="text-gray-600 dark:text-gray-400">Unlimited Users</li>
                    <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                    <li className="text-gray-600 dark:text-gray-400">Real-time Updates</li>
                  </ul>
                  <Button className="mx-1" variant="outline">Choose Plan</Button>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-12">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* Testimonial 1 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                  <p className="text-gray-600 dark:text-gray-400">"This service has been a game-changer for our business. Highly recommend!"</p>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">John Doe</h3>
                  <p className="text-gray-500 dark:text-gray-300">CEO, Company A</p>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                  <p className="text-gray-600 dark:text-gray-400">"Amazing experience! The team was professional and the results were outstanding."</p>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Jane Smith</h3>
                  <p className="text-gray-500 dark:text-gray-300">Marketing Director, Company B</p>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                  <p className="text-gray-600 dark:text-gray-400">"Exceptional service and support. We couldn't be happier with the results."</p>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Michael Brown</h3>
                  <p className="text-gray-500 dark:text-gray-300">CTO, Company C</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold dark:bg-slate-900 text-gray-800 dark:text-gray-200 h-16 p-2 rounded-2xl">Top Blogs</h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
            </div>
            <Link href={"/blog"}>
              <div className="flex flex-wrap justify-center">
                {/* Blog 1 */}
                <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                  <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                    <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4087150/cover_image/retina_1708x683/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-e85854c3f0bb99704e83139475284901.png" className="w-full h-64 object-cover rounded-t-lg" />
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">C Language Tutorial</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">"Learn the fundamentals of C programming with clear explanations and practical examples. Perfect for aspiring developers and coders!</p>
                      <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button>
                    </div>
                  </div>
                </div>
                {/* Blog 2 */}
                <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                  <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                    <img src="https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg" />
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">JavaScript Tutorial</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">Unlock the power of JavaScript! Dive into interactive lessons to build dynamic, feature-rich web applications.</p>
                      <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button>
                    </div>
                  </div>
                </div>
                {/* Blog 3 */}
                <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                  <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                    <img src="https://logos-world.net/wp-content/uploads/2024/12/CSS-Cascading-Style-Sheets-Logo-New.png" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg" />
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">CSS Tutorial</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">Master the art of styling web pages with our concise and beginner-friendly CSS tutorials. Learn how to create visually stunning designs with ease!</p>
                      <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
