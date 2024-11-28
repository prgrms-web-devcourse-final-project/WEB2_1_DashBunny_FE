import DetailStore from "./src/components/DetailStore"
//추가@=> 사진밑에 닿으면 뒤로가기, 가게명, 하트 일렬로 sticky

export default function RestaurantDetail({ params }: { params: { id: string } }) {
  const id = params.id
  return <DetailStore pathname={id} />
}
/**
 * 메뉴 선택 및 수량 변경
 * 담긴 메뉴 및 수량으로 이루어진 객체를 장바구니 페이지로 보낼 수 있게..
 * 근데 장바구니도 api요청으로 하는데...
 */
