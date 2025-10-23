import Image from "next/image";
import Link from "next/link";
import type { Case } from "@/lib/data";

export default function CaseCard({item}:{item: Case}){
  return (
    <Link href={`/portfolio/${item.slug}`} className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 group">
      <Image src={item.image} alt={item.title} width={1600} height={1000} className="w-full aspect-[16/10] object-cover group-hover:opacity-95 transition" />
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
          <span className="text-xs border border-white/20 rounded-full px-2 py-1 bg-black/40">{item.tags.join(" · ")}</span>
        </div>
        <div className="text-xs border border-white/20 rounded-full px-2 py-1 bg-black/40">{item.year}</div>
      </div>
    </Link>
  );
}