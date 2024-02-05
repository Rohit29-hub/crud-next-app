import UiTable from "@/components/UiTable";
import UiSearch from "@/components/UiSearch";
export default async function Home() {
  const res = await fetch(process.env.SECRET_API_KEY!,{
    cache: 'no-cache',
    next: {tags: ['users']}
  });
  const data = await res.json();
  return (
    <>
      <div className="w-full h-screen">
        <UiSearch/>
        <UiTable data={data}/>
      </div>
    </>
  );
}
