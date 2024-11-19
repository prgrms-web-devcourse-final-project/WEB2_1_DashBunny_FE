import InputGlassesIcon from "../icons/iconComponents/InputGlassesIcon"

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder="무엇을 찾으시나요?"
        className="w-full h-12 pl-6 py-3 rounded-full border border-orange-700 outline-none placeholder-placeholder"
      />
      <button className="absolute right-7 top-3.5">
        <InputGlassesIcon />
      </button>
    </div>
  )
}
