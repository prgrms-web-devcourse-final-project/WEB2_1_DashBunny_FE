import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateWishApi } from "../api/updateWishApi"

export const useUpdateWish = () => {
  const queryClient = useQueryClient()
  const updateWishMutation = useMutation({
    mutationFn: updateWishApi,
    onError: () => {
      alert("찜 업데이트 실패")
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishList"] })
      queryClient.invalidateQueries({ queryKey: ["StoreDetailData"] })
    },
  })

  return { updateWishMutation }
}
