import Link from "next/link";

export default function ContactUs() {
  return (
    <>
     <div className="contact-page h-screen flex bg-center bg-blend-multiply bg-cover bg-no-repeat flex-col items-center justify-center p-3 lg:p-24">
        <h1 className="lg:text-5xl text-xl font-bold">Let’s Get In Touch</h1>
        <p className="text-center my-4 lg:w-3/5 text-sm lg:text-lg">
        Some sample text here regarding your queries and FAQs. Ordinarily, there is no riskier step that a scientist (or anyone) can take than to make sweeping generalizations from just one example.
        </p>
      </div>
      <div className="flex flex-col py-6 lg:py-12 px-4">
      
      
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-24 gap-8 my-6">
      <div
              
              className="flex bg-[#0D0D0D] flex-col items-center py-6 lg:py-6 px-6"
            >
            <div class="flex items-center">
              <img src="../email.png" alt="" className="mr-4" />
              <div>
              <h3 className="text-xl my-2 font-bold text-gray-400">MAIL US AT</h3>
              <p className="text-xl">contact@irfmw.com</p>
              <p className="text-sm text-gray-600 mt-1">Write Us For All Your Queries</p>
              </div>
              </div>
            </div>

            <div
              
              className="flex bg-[#0D0D0D] flex-col items-center py-6 lg:py-6 px-6"
            >
            <div class="flex items-center">
              <img src="../phone.png" alt="" className="mr-4" />
              <div>
              <h3 className="text-xl my-2 font-bold text-gray-400">IRFMW HELPLINE</h3>
              <p className="text-xl">+91 9686597728</p>
              <p className="text-sm text-gray-600 mt-1">Mon-Fri 7:00AM-9:00PM</p>
              </div>
              </div>
              
              
            </div>

            <div
              
              className="flex bg-[#0D0D0D] flex-col items-center py-6 lg:py-6 px-6"
            >
            <div class="flex items-center">
              <img src="../whatsapp.png" alt="" className="mr-4" />
              <div>
              <h3 className="text-xl my-2 font-bold text-gray-400">CHAT WITH US</h3>
              <Link
                  href="https://wa.me/+919686597728"
                  target="_blank"
                  
                >
                  <button className="bg-[#0F62FE] font-semi-bold text-white py-2 px-4">
                    Chat Now
                  </button>
                </Link>
              </div>
              </div>
              
              
            </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-24 gap-8 my-3">
      <div
              
              className="flex bg-[#0D0D0D] flex-col items-center py-6 lg:py-6 px-6"
            >
            <div class="flex items-center">
              <img src="../enter.png" alt="" className="mr-4" />
              <div>
              <h3 className="text-xl my-2 font-bold text-gray-400">OUR OFFICE</h3>
              <p className="text-xl">Vinyas F86 Building
ITI Limited, Dooravani Nagar
Bengaluru, Karnataka
560016</p>
             
              </div>
              </div>
            </div>
           
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.495535817456!2d77.67866572538188!3d13.004084987314283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae113ef59a9ab1%3A0xf4ea50ee3235d0a0!2sITI%20Limited!5e0!3m2!1sen!2sin!4v1709370995622!5m2!1sen!2sin"   className="border-none w-full lg:px-24 mx-auto mt-5" height="400px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
    </div>
    </>
  
  );
}
