import {  prisma } from "@repo/db/client";

export default async function Home() {
  const firstUser = await prisma.user.findFirst({});

  return <div>
    {JSON.stringify(firstUser)}
  </div>
}