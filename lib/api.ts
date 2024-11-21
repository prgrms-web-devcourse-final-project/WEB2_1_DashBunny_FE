export async function fetchUsers() {
  const response = await fetch("/api/user");
  return response.json();
}
