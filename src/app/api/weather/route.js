import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");
  const longitude = searchParams.get("lon");
  const latitude = searchParams.get("lat");

  let url = "";
  if (address) {
    url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      address +
      "&appid=" +
      "cf3c8012e5d7653e35d295925c812830";
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cf3c8012e5d7653e35d295925c812830`;
  }
  // console.log(address);
  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json({ data });
}

export function POST() {}

export function DELETE(request) {
  console.log("Delete Api Called!");
  return NextResponse.json({
    message: "Deleted Succesfully!",
    status: true,
  });
}

export function PUT() {}
