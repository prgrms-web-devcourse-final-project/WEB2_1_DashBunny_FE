import MainAddressSelectorArrowIcon from "../icons/iconComponents/MainAddressSelectorArrowIcon"

export default function AddressBar() {
  return (
    <div className=" py-2">
      <p className="text-md font-bold text-orange-500 opacity-70">즐거움이 도착할 곳</p>
      <div className="flex items-center gap-2  top-1">
        <p className="flex items-center text-h3 text-black-700 font-semibold sticky top-0">
          강서구 까치산로4길 75-37
        </p>
        <MainAddressSelectorArrowIcon />
      </div>
    </div>
  )
}
