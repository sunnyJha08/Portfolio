interface SectionTitleProps {
  text: string;
}

export default function SectionTitle({ text }: SectionTitleProps) {
  return (
    <h2 className="text-xl font-medium tracking-tight text-neutral-600 md:text-2xl lg:text-3xl">
      {text}
    </h2>
  );
}
