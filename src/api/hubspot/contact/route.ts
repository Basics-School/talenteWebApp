import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };
    if (req.method === "POST") {
      return new NextResponse(null, { status: 204, headers: corsHeaders });
    }
    const body = await req.json();
    // console.log(body, "body body");
    //   const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}`, body, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
    //     },
    //   });

    //   return NextResponse.json(
    //     {
    //       status: 200,
    //       message: "success",
    //       result: response.data,
    //     },
    //     {
    //       status: 200,
    //     },
    //   );
    return NextResponse.json(
      {
        status: 200,
        message: "success",
        result: body,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 500,
        message: "error",
        result: error,
      },
      {
        status: 500,
      },
    );
  }
};
