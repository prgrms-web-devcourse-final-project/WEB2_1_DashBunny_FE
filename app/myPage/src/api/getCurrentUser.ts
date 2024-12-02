export const getCurrentUser = async () => {
  try {
    const response = await fetch(
      "http://dashbunny-web-env-1.eba-aehpeuj2.ap-northeast-2.elasticbeanstalk.com/api/user/currentUser",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (!response.ok) {
      throw new Error("Failed to fetch user data")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching current user:", error)
    throw error
  }
}
