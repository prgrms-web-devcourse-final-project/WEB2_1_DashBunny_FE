export default function SearchGuide() {
  return (
    <div className="mt-2 p-1">
      <p className=" text-[14px] font-bold text-black-600">이렇게 검색해 보세요</p>
      <ul>
        <li className="text-xs">
          <span className="text-black font-bold">·</span> 도로명 + 건물번호 (위례성대로 2)
        </li>
        <li className="text-xs">
          <span className="text-black font-bold">·</span> 건물명 + 번지 (방이동 44-2)
        </li>
        <li className="text-xs">
          <span className="text-black font-bold">·</span> 건물명, 아파트명(반포 자이, 분당 주공 1차)
        </li>
      </ul>
    </div>
  )
}
