"use client";

import {
  SignedOut,
  SignInButton,
  SignedIn,
  useUser,
  UserButton,
} from "@clerk/nextjs";

function Header() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between p-5">
      {user && (
        <h1>
          {user?.firstName}
          {`'s`} Notes
        </h1>
      )}

      {/* Breadcrumbs */}

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
