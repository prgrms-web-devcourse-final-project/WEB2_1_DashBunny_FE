import { NextResponse } from "next/server";

// Mock 사용자 데이터
const mockUsers = [
  {
    id: 1,
    name: "Alice",
    phone: "010-1234-5678",
    role: "Admin",
    email: "alice@example.com",
    createdDate: "2024-01-01",
  },
  {
    id: 2,
    name: "Alice",
    phone: "010-1234-5678",
    role: "Admin",
    email: "alice@example.com",
    createdDate: "2024-01-01",
  },
  {
    id: 3,
    name: "Alice",
    phone: "010-1234-5678",
    role: "Admin",
    email: "alice@example.com",
    createdDate: "2024-01-01",
  },
];

export async function GET() {
  return NextResponse.json(mockUsers);
}
