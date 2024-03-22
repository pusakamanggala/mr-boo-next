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
    <div className="flex flex-col items-center justify-center space-y-12 neon__card min-h-[500px] max-h-[500px] group hover:justify-center py-10 md:py-20 px-5 md:px-10 ">
      <div className="min-h-20 aspect-square group-hover:hidden">
        {children}
      </div>
      <hgroup className="space-y-5">
        <h3 className="font-semibold group-hover:hidden neon__title">
          {title}
        </h3>
        <p className="flex-1 line-clamp-6 group-hover:line-clamp-none">
          {description}
        </p>
      </hgroup>
    </div>
  );
}
