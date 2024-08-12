import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";



function Footer() {
    return (
        <div className="border- red-700 border-2  h-1/4 bg-red-100 ">
            <div className="mt-16 flex justify-evenly mob:pl-5">
                <div >
                    <h1 className="font-bold text-4xl w-56">Ready to get started ?</h1>
                    <p className="mt-5  w-80">If there are questions you want to ask, we will answer all your question</p>
                    <div className="flex mt-20 mob:mt-7 mob:flex mob:flex-col ">
                        <input type="email" placeholder="Enter your email" className="w-72  focus:outline-none border-b-2 border-slate-300 bg-red-100" ></input>
                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full ml-5 w-28 py-3 px-0 mob:w-28 mob:px-2 mob:py-2 mob:ml-0 mob:mt-5">
                            Join now
                        </button>

                    </div>
                </div>
                <div className="mob:hidden">
                    <h1 className="font-bold w-80 ">Maybe your question is have been answered, check this out.</h1>
                    <div className="flex mt-6 border-b-2 border-red-200 ">
                        <p className="mb-5">What is Coca Soft</p>
                        <FaLongArrowAltRight className="ml-48 " />
                    </div>
                    <div className="flex mt-6 border-b-2 border-red-200  " >
                        <p className="mb-5">How can I get service from Coca Soft</p>
                        <FaLongArrowAltRight className="ml-14 " />
                    </div>
                    <div className="flex  mt-6">
                        <p>What kind of service will I get</p>
                        <FaLongArrowAltRight className="ml-28" />
                    </div>

                </div>

            </div>

            <div className="mt-20 mb-10 border-t-2 border-red-200 mob:border-none  ">
                <div className="flex items-center flex-wrap ">
                    <div className="flex flex-wrap mob:ml-10 ">
                        <FaFacebook className="mt-5 ml-20" />
                        <FaTwitter className="mt-5 ml-5" />
                        <FaInstagram className="mt-5 ml-5" />
                        <FaLinkedin className="mt-5 ml-5" />
                    </div>
                    <div className="  flex  justify-center gap-5  mob:-ml-10 ">
                        <p className="mt-4 ml-20 mob:ml-12">Privacy Policy</p>
                        <p className="mt-4">Terms and Conditions</p>
                        <p className="mt-4">Support</p>
                    </div>
                    <div className="flex ml-96  mt-5 mb-10  mob:ml-16 mob:mb-10" >
                        <FaRegCopyright className="mt-5 text-2xl " />
                        <p className="mt-5 text-center ml-2 ">Coca All Rights Reserved</p>
                    </div>
                </div>
            </div>


        </div>
    );

}

export default Footer
