import axios from "axios";
import Swal from "sweetalert2";


const Banner = () => {

    const  handleSubscribe = async (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        console.log(e.target.email.value)


        // fetch('https://brand-shop-electronics-and-techology-server.vercel.app/subscribe', {

        // method: "POST",
        // headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(email)

        // })

        await axios.post('https://brand-shop-electronics-and-techology-server.vercel.app/subscribe', { email: email })
        .then((res)=>{

            console.log(res.data.acknowledged)

            if(res?.data?.acknowledged){
                Swal.fire(
                    'Good job! You have Subscribed',
                    'You added successfully your product!',
                    'success'
                    )
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                    })
            }

                
        })
        .catch(()=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
                })
        })
    }



    return (
        <div className="hero min-h-[80vh]">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <img src="https://i.ibb.co/3vJ1Xr6/design-technology-removebg-preview-1.png" className="p-4" />
                <div className="p-5">
                    <h1 className="text-5xl font-bold">Unveiling Tomorrow's Technology Today</h1>
                    <p className="py-6">Welcome to Our Technology, your premier destination for cutting-edge technology and electronics. Explore a world of innovation and stay ahead of the curve with the latest products from top brands like Apple, Samsung, Sony, Google, Intel, and more. From state-of-the-art smartphones to high-performance laptops, from smart home solutions to gaming gear, we're your one-stop shop for all things tech. Don't miss out on exclusive deals</p>

                    <form onSubmit={handleSubscribe}>
                        <div className="">
                            <div className="flex input-group">
                                <input name="email"
                                type="email"
                                    className=" pl-4 w-[45%] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 iput-sm"
                                    placeholder="Subscribe Us"
                                />
                                <button
                                    
                                    type="submit"
                                    className="px-4 text-sm text-white bg-blue-700 rounded-lg btnfont-medium hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn-sm lg:btn-md"
                                >
                                    Subscribe to New deals
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