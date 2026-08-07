import { NextRequest, NextResponse } from "next/server";

interface Item {
  id: string;
  name: string;
  category: string;
  createdAt: string;
}

const initialItems: Item[] = [
  { id: "1", name: "Next.js App Router Config", category: "Core", createdAt: new Date().toISOString() },
  { id: "2", name: "Tailwind CSS v4 Integration", category: "Styling", createdAt: new Date().toISOString() },
  { id: "3", name: "Framer Motion Animation Engine", category: "UI/UX", createdAt: new Date().toISOString() },
];

const itemsStore: Item[] = [...initialItems];

export async function GET() {
  return NextResponse.json({
    success: true,
    total: itemsStore.length,
    data: itemsStore,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.name) {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    const newItem: Item = {
      id: String(Date.now()),
      name: body.name,
      category: body.category || "General",
      createdAt: new Date().toISOString(),
    };

    itemsStore.unshift(newItem);

    return NextResponse.json({ success: true, data: newItem }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload" },
      { status: 400 }
    );
  }
}
