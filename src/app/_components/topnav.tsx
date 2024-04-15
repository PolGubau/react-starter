import { SignIn, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="flex justify-between gap-4 border-b border-gray-600 p-4">
      <div>Gallery</div>

      <div>
        <SignedOut>
          <SignIn />
        </SignedOut>
        <SignedIn>
          <SignInButton />
        </SignedIn>
      </div>
    </nav>
  );
}
