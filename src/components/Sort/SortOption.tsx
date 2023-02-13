import Link from "next/link";

export default function SortItem(props: any) {
  return (
    <div className="sort_item">
      <Link href={`${props.alias}`}>{props.name}</Link>
    </div>
  );
}
