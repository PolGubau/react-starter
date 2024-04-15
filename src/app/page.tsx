export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/300aa55f-be0b-4b9b-a675-3486264ff86d-2oo.png",
  ];
  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main className="container">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
