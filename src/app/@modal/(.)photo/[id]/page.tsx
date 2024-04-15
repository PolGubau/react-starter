import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) {
    throw new Error("Invalid id");
  }

  const image = await getImage(idAsNumber);

  if (!image) {
    throw new Error("Image not found");
  }

  return (
    <div>
      <img src={image.url} alt={image.name} title={image.name} />
    </div>
  );
}
