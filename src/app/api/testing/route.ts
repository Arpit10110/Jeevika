import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return(
        NextResponse.json({
            success: true,
            message: "Welcome to Jeevika AI Backend",
        })
    )   
  } catch (error) {
    return(
        NextResponse.json({
            success: false,
            message: "Error fetching data",
        })
    )
  }
};
