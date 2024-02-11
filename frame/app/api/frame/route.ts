// import { NextRequest, NextResponse } from "next/server";

// async function getResponse(req: NextRequest): Promise<NextResponse> {
//     const searchParams = req.nextUrl.searchParams
//     const id = searchParams.get("id") ?? "";
//     const idAsNumber = parseInt(id)

//     const nextId = idAsNumber + 1

    // if (idAsNumber === 12) {
    //     return new NextResponse(`<!DOCTYPE html><html><head>
    //     <title>This is frame 7</title>
    //     <meta property="fc:frame" content="vNext" />
    //     <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/" />
    //     <meta property="fc:frame:button:1" content="Visit Politio" />
    //     <meta property="fc:frame:button:1:action" content="post_redirect" />
    //     <meta property="fc:frame:button:2" content="Learn more" />
    //     <meta property="fc:frame:button:2:action" content="post_redirect" />
    //     <meta property="fc:frame:postUrl" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
    //     </head></html>`)

    // } else {
    //     return new NextResponse(`<!DOCTYPE html><html><head>
    //     <title>This is frame ${id}</title>
    //     <meta property="fc:frame" content="vNext" />
    //     <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}" />
    //     <meta property="fc:frame:button:1" content="Next Page" />
    //     <meta property="fc:frame:postUrl" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    //     </head></html>`)
    // }


// }

// export async function POST(req: NextRequest): Promise<Response> {
//     return getResponse(req);
// }

// export const dynamic = "force-dynamic";
// Import NextRequest from next/server
import { NextRequest, NextResponse } from 'next/server';

// Ensure you have the imageNames array defined somewhere in your code
const imageNames = [
  'blue1.png', 'blue2.png', 'blue3.png',
  'green1.png', 'green2.png', 'green3.png',
  'red1.png', 'red2.png', 'red3.png',
  'gray1.png', 'gray2.png', 'gray3.png'
];

// Function to generate the dynamic HTML response with type annotation for req
async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = new URL(req.url).searchParams;
    const id = searchParams.get('id') ?? '';
  const nextId = id + 1;
    const idAsNumber = parseInt(id);
//   const imageUrl = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmaa9vQwMY6RrYgYgnsj7s5dYVfZFqds87moMv83o7GxiU/${imageNames[id % imageNames.length]}`;
//   The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.ts(2362)
    const imageUrl = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmaa9vQwMY6RrYgYgnsj7s5dYVfZFqds87moMv83o7GxiU/${imageNames[parseInt(id) % imageNames.length]}`;

    if (idAsNumber === 12) {
        return new NextResponse(`<!DOCTYPE html><html><head>
        <title>This is frame 7</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/" />
        <meta property="fc:frame:button:1" content="Visit Politio" />
        <meta property="fc:frame:button:1:action" content="post_redirect" />
        <meta property="fc:frame:button:2" content="Learn more" />
        <meta property="fc:frame:button:2:action" content="post_redirect" />
        <meta property="fc:frame:postUrl" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
        </head></html>`)

    } else {
        return new NextResponse(`<!DOCTYPE html><html><head>
        <title>This is frame ${id}</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}" />
        <meta property="fc:frame:button:1" content="Next Page" />
        <meta property="fc:frame:postUrl" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
        </head></html>`)
    }

}


export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

// Export the dynamic property
export const dynamic = 'force-dynamic';
