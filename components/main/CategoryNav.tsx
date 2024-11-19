const categories = ["치킨", "한식", "중식", "일식", "양식"]

export default function CategoryNav() {
  return (
    <nav className="  px-4 pt-2 ">
      <ul className="gap-8 grid grid-cols-5 w-full">
        {categories.map((category) => (
          <li key={category} className="  flex items-center">
            <button className="w-full pt-2 pb-1 ">
              <p
                className={`${category === "치킨" ? "border-b-2 border-black-700 text-black-700" : "text-black-500"} text-lg font-semibold text-nowrap`}
              >
                {category}
              </p>
              {/* {category === "치킨" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
              )} */}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
