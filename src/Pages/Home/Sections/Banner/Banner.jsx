

const Banner = () => {
    return (
        <div className="hero min-h-[80vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/3vJ1Xr6/design-technology-removebg-preview-1.png" className="" />
                <div>
                    <h1 className="text-5xl font-bold">Unveiling Tomorrow's Technology Today</h1>
                    <p className="py-6">Welcome to [Your Website Name], your premier destination for cutting-edge technology and electronics. Explore a world of innovation and stay ahead of the curve with the latest products from top brands like Apple, Samsung, Sony, Google, Intel, and more. From state-of-the-art smartphones to high-performance laptops, from smart home solutions to gaming gear, we're your one-stop shop for all things tech. Don't miss out on exclusive deals</p>

                    <form>
                        <div className="">
                            <div className="flex input-group">
                                <input
                                    className=" pl-4 w-[45%] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Subscribe Us"
                                />
                                <button
                                    type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Subscribe For Get New deals
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;