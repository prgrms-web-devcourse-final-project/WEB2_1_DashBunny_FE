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
    name: "Bob",
    phone: "010-9876-5432",
    role: "Owner",
    email: "bob@example.com",
    createdDate: "2024-02-01",
  },
  {
    id: 3,
    name: "Charlie",
    phone: "010-4567-8901",
    role: "Owner",
    email: "charlie@example.com",
    createdDate: "2024-03-01",
  },
  {
    id: 4,
    name: "Diana",
    phone: "010-6789-0123",
    role: "Customer",
    email: "diana@example.com",
    createdDate: "2024-04-01",
  },
  {
    id: 5,
    name: "Ethan",
    phone: "010-5678-1234",
    role: "Customer",
    email: "ethan@example.com",
    createdDate: "2024-05-01",
  },
  {
    id: 6,
    name: "Fiona",
    phone: "010-2345-6789",
    role: "Owner",
    email: "fiona@example.com",
    createdDate: "2024-06-01",
  },
  {
    id: 7,
    name: "George",
    phone: "010-7890-1234",
    role: "Customer",
    email: "george@example.com",
    createdDate: "2024-07-01",
  },
  {
    id: 8,
    name: "Hannah",
    phone: "010-3456-7890",
    role: "Owner",
    email: "hannah@example.com",
    createdDate: "2024-08-01",
  },
  {
    id: 9,
    name: "Ian",
    phone: "010-8901-2345",
    role: "Customer",
    email: "ian@example.com",
    createdDate: "2024-09-01",
  },
  {
    id: 10,
    name: "Julia",
    phone: "010-1234-5678",
    role: "Customer",
    email: "julia@example.com",
    createdDate: "2024-10-01",
  },
];

export async function GET() {
  return NextResponse.json(mockUsers);
}
