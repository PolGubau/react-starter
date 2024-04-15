import { SignedIn } from "@clerk/nextjs";
import { Images } from "./_components/image-list";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="container">
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
