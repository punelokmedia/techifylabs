// components/HubHeader.tsx
interface HubHeaderProps {
  title: string;
  subtitle: string;
}

export default function HubHeader({ title, subtitle }: HubHeaderProps) {
  return (
    <div className="py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{title}</h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}