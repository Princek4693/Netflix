import { useSelector } from "react-redux";
import lan from "../utils/languageConstant";

function GptSearchBar() {

  const langKey = useSelector(store => store.config.lang)

  return (
    <div class="w-[500px]  mx-auto pt-[12%]">
      <form class="flex items-center justify-center bg-gray-800 shadow-md rounded px-4 py-2 mb-4">
        <input
          class="w-full py-3 pl-2 text-lg text-gray-700 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
          type="text"
          placeholder={lan[langKey].gptSearchPlaceholder}
        />
        <button class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:shadow-outline">
          {lan[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
