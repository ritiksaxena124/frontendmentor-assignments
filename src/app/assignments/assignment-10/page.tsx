import { Button } from "@/components/ui/button";
import Header from "./_components/header";

function Page() {
  const filterButtons = [
    {
      label: "All",
    },
    {
      label: "Active",
    },
    {
      label: "Inactive",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      <Header />
      <main>
        <div className="flex gap-4 justify-between items-center">
          <h2 className="text-xl font-semibold">Extensions List</h2>
          <span className="space-x-2">
            {filterButtons.map((btn, index) => (
              <Button
                key={btn.label + index}
                className="rounded-full"
                variant={"outline"}
              >
                {btn.label}
              </Button>
            ))}
          </span>
        </div>
      </main>
    </div>
  );
}

export default Page;
