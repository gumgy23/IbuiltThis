'use cache'

import { LoaderIcon } from "lucide-react";
import { Suspense } from "react";


export default async function Footer() {
  return (
    <footer className="border-t bg-muted/20 py-12">
      <div className="wrapper">
        <Suspense fallback={
          <div>
            <LoaderIcon className="size-4 animate-spin" />                     
          </div>
          }
        >

        </Suspense>
        IBuiltThis &copy; {new Date().getFullYear()} - All rights reserved.
      </div>
    </footer>
  );
}