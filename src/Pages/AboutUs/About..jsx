import { FaArrowCircleRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactForm from '../../Components/Contact/Contact';

const AboutUs = () => {
      return (
            <div className='container mx-auto'>
                  <div className='my-6'>
                        <h2 className='py-4 mt-8 text-2xl font-bold text-center text-slate-700 lg:py-6'>Welcome to TechPro Electronics - Technology & Electronics</h2>
                        <p className='my-5 text-base text-center text-slate-400'>
                        At TechPro Electronics, we are passionate about harnessing the power of technology to make your life easier, more enjoyable, and more efficient. Our journey began over a decade ago when our founder, Sarah Smith, embarked on a mission to bridge the gap between cutting-edge technology and everyday living.
                        </p>
                  </div>

                  <div className='flex flex-col items-center justify-center px-4 py-8 text-center text-slate-600 lg:px-0 lg:grid lg:grid-cols-4'>
                        <div>
                              <span className='text-blue-500'>Our Products</span>
                              <h2 className='my-6 text-2xl font-bold'>Explore our range of products, including cutting-edge smartphones, smart home devices, and high-performance electronics. </h2>
                        </div>
                        <div>
                              <p className='p-4 text-base font-light text-slate-500'>
                              We believe in giving back to the community. TechPro Electronics actively supports local schools, sponsors technology education programs, and contributes to various charitable initiatives. 
                              </p>
                        </div>
                        <div>
                              <ol type='disk' className='flex flex-col gap-3 p-4'>
                                    <li className='flex items-center gap-2'><FaCheckCircle className='text-blue-400'></FaCheckCircle> Application Interview</li>
                                    <li className='flex items-center gap-2'><FaCheckCircle className='text-blue-400'></FaCheckCircle>Acceptance Payment</li>
                                    <li className='flex items-center gap-2'><FaCheckCircle className='text-blue-400'></FaCheckCircle> Startup Program Access</li>
                                    <li className='flex items-center gap-2'><FaCheckCircle className='text-blue-400'></FaCheckCircle> Accelerate Program</li>
                              </ol>
                        </div>
                        <div className='flex items-center'>
                              <Link to='/about'><button className="text-xl bg-blue-600 btn btn-circle"><FaArrowCircleRight></FaArrowCircleRight></button></Link>
                        </div>

                  </div>
                  <ContactForm></ContactForm>
            </div>
      );
};

export default AboutUs;