export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen w-full md:pt-16">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 md:px-16 xl:px-32">
        {children}
      </div>
    </main>
  );
}
