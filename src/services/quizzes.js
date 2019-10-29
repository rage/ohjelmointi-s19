import axios from "axios"
import { accessToken } from "./moocfi"

export async function fetchQuizzesProgress() {
  const response = await axios.get(
    "https://quizzes.mooc.fi/api/v1/courses/48e8d6dd-eca0-46f6-be6a-521fe93cfa0e/users/current/progress",
    { headers: { Authorization: `Bearer ${accessToken()}` } },
  )
  return response.data?.points_by_group
}

export async function fetchQuizNames() {
  const response = await axios.get(
    "https://quizzes.mooc.fi/api/v1/quizzes/48e8d6dd-eca0-46f6-be6a-521fe93cfa0e/titles/fi_FI",
  )
  return response.data
}
