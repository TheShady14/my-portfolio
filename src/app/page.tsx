import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="flex justify-end mb-8">
        <ThemeToggle />
      </div>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Theme Test</h1>
        <p className="mb-4">
          This is a test page to verify that the theme is working correctly. The
          background should change when you toggle the theme.
        </p>
        <div className="p-4 bg-secondary rounded-md">
          This is a secondary background element.
        </div>
      </div>
    </main>
  );
}
