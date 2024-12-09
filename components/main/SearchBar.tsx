import InputGlassesIcon from "../icons/iconComponents/InputGlassesIcon"
interface SearchBarProps {
  height?: "high" | "low"
  placeholder: string
}
export default function SearchBar({ height, placeholder }: SearchBarProps) {
  return (
    <div className={`relative ${height === "low" && "px-4"} pt-2`}>
      <input
        type="search"
        placeholder={placeholder}
        className={`${height === "low" ? "h-10 placeholder:text-xs" : "h-12"} w-full pl-6 py-3 rounded-full border border-orange-700 outline-none placeholder-placeholder placeholder:text-sm font-medium`}
      />
      <button className={`${height === "low" ? "right-8 top-3" : "right-7 top-5"} absolute `}>
        <InputGlassesIcon />
      </button>
    </div>
  )
}
