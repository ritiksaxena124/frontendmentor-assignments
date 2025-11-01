'use client';

import ExtensionCard from "@/components/assignment-10/extension-card";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import Header from "../../../components/assignment-10/header";
import { extensionsData, filterButtons } from "./data";
function Page() {
  const [extensions, setExtensions] = useState<typeof extensionsData>(extensionsData);
  function handleExtensionStatus(id: number) {
    const updatedExtensions = extensions.map((item) => {
      if (item.id === id) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    setExtensions(updatedExtensions);
  }

  function filterExtensions(action: string) {
    let filteredExtensions = extensions;
    switch (action) {
      case 'active':
        filteredExtensions = extensionsData.filter((item) => item.active);
        break;
      case 'inactive':
        filteredExtensions = extensionsData.filter((item) => !item.active);
        break;
      default:
        filteredExtensions = extensionsData
    }

    setExtensions(filteredExtensions);
  }
  return (
    <div className={`max-w-6xl mx-auto p-6 space-y-12`}>
      <Header />
      <main>
        <div className="flex gap-4 justify-between items-center">
          <h2 className="text-2xl font-semibold">Extensions List</h2>
          <span className="space-x-2">
            {filterButtons.map((btn, index) => (
              <Button
                key={btn.label + index}
                className={`rounded-full`}
                variant={"outline"}
                onClick={() => filterExtensions(btn.action)}
              >
                {btn.label}
              </Button>
            ))}
          </span>
        </div>
        <div className="py-5 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            extensions.map((item) => (
              <ExtensionCard key={item.id} item={item} handleExtensionStatus={handleExtensionStatus} />
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default Page;
