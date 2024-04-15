import Image from "next/image";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";

export async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (data, { desc }) => desc(data.id),
  });
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <Image
            width={48}
            height={48}
            src={image.url}
            alt=""
            title={image.name}
          />
          <span>
            {image.id} - {image.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="container">
      <Images />
    </main>
  );
}
