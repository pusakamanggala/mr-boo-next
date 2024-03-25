export function GlassNeonCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 neon__card min-h-[500px] max-h-[500px] group py-10 md:py-20 px-5 md:px-10 relative">
      <div className="group-hover:hidden mx-0">{children}</div>
      <hgroup className="space-y-5 group-hover:absolute group-hover:translate-y-[-10%] transition-all duration-300 ease-in-out">
        <h3 className="font-semibold group-hover:hidden neon__title">
          {title}
        </h3>
        <p className="flex-1 line-clamp-6 group-hover:line-clamp-none px-5">
          {description}
        </p>
      </hgroup>
    </div>
  );
}
