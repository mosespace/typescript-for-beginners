import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      {/* Go to Episode One Using This Link */}
      <Link href='/episodeOne' />
    </div>
  );
}
