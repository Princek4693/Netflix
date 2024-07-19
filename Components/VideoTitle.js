

//lets pass the props of videoTitle


function VideoTitle({ title, overview }) {
    return (
        <div className=" text-gray-200 p-6 rounded-lg  pt-40 absolute">
            <h1 className="text-6xl font-bold mb-4">{title}</h1>
            <p className="text-xl mb-6 w-1/3">{overview}</p>
            <div className="flex space-x-4 bg-opacity-30">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 text-xl px-4 rounded">
                ▷ Play
                </button>
                <button className="bg-gray-500 text-xl hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded">
                ⓘ More Info
                </button>
            </div>
        </div>
    );
}

export default VideoTitle;
