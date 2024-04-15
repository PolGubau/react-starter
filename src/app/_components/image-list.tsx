import Image from "next/image";
import { geyMyImages } from "~/server/queries";

export async function Images() {
  const images = await geyMyImages();
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <Image
            width={250}
            height={250}
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
