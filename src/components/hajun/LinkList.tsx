import Link from 'next/link';

interface LinkListProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

function LinkList({ title, links }: LinkListProps) {
  return (
    <div className="flex flex-col gap-y-[24px]">
      <span className="text-lg font-semibold">{title}</span>
      <ul className="flex flex-col gap-y-[8px]">
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkList;
