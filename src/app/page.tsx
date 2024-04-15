import Image from "next/image";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";
export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (data, { desc }) => desc(data.id),
  });

  return (
    <main className="container">
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
    </main>
  );
}
