"use client";
import Categories from "@/app/components/Categories";
import PageHeader from "./layouts/PageHeader";
import { categories } from "./data/home";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <main className="flex flex-col max-h-screen">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div>SideBar</div>
        <div className="overflow-x-hidden  pb-4 px-4 ">
          <div className="sticky top-0 bg-white z-10 p-4">
            <Categories
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
