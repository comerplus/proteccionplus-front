'use client';

interface DropdownMenuProps {
  sections: string[];
}

export default function DropdownMenu({ sections }: DropdownMenuProps) {
  return (
    <div className="absolute top-full left-0 w-full bg-white border-t shadow-md flex justify-center z-40">
      <ul className="flex gap-10 px-8 py-4">
        {sections.map((section, idx) => (
          <li key={idx}>
            <a
              href={`#${section.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
