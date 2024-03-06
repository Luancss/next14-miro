import { Liveblocks } from "@liveblocks/node";
import { auth, currentUser } from "@clerk/nextjs";
import {ConvexHttpClient} from "convex/browser"

import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(
  process.env.NEXT_PUBLIC_CONVEX_URL!
)

const liveblocks = new Liveblocks({
  secret: "sk_dev_wdG14b6rknbuPJUkaHtaUjRgNdUQmO4I0CzOrLtZ04XL-dqyM2fdAg8PARHIyVDa",
});

export async function POST(request: Request) {
  const authorization = await auth();
  const user = await currentUser();

  if (!authorization || !user) {
    return new Response("Unauthorized", { status: 401 });
  } 

  const {room} = await request.json();
  const board = await convex.query(api.board.get, {id:room})

  console.log("AUTH-INFO", {
    room,
    board,
    boardOrgId: board?.orgId,
    userOrgIfd: authorization.orgId
  });
  
    
  if (board?.orgId !== authorization.orgId) {
    return new Response("Unauthorized");
  }

  const userInfo = {
    name : user.firstName || "Teammeate",
    picture: user.imageUrl
  };

  console.log({userInfo});
  
  const session = liveblocks.prepareSession(
    user.id,
    {userInfo}
  );

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const {status, body} = await session.authorize();
  console.log({status, body}, "ALLOWED");
  return new Response(body, {status});
}

