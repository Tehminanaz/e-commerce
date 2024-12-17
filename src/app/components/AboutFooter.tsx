import Image from 'next/image';

export default function ResponsiveFooter() {
  return (
   <div className='w-full bg-dark-primary'>
    <div className="grid ml-44
     text-white font-satoshi items-center text-sm 
      grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-6 gap-6">
       
      <div className="col-span-2 lg:col-span-1">
        <div className="text-5xl font-bold font-headings-h1 mb-4">Avion</div>
        <p>21 New York Street</p>
        <p>New York City</p>
        <p>United States of America</p>
        <p>432 34</p>
      </div>

      <div className='mb-10'>
        <div className="text-lg font-bold font-headings-h1 mb-4">Social Links</div>
        <div className="flex gap-4">
          <Image width={24} height={24} alt="LinkedIn" src="/Logo--linkedin.svg" />
          <Image width={24} height={24} alt="Facebook" src="/Logo--facebook.svg" />
          <Image width={24} height={24} alt="Instagram" src="/Logo--instagram.svg" />
          <Image width={24} height={24} alt="Skype" src="/Logo--skype.svg" />
          <Image width={24} height={24} alt="Twitter" src="/Logo--twitter.svg" />
          <Image width={24} height={24} alt="Pinterest" src="/Logo--pinterest.svg" />
        </div>
      </div>

      <div>
        <div className="text-lg font-bold font-headings-h1 mb-4">Menu</div>
        <p>New arrivals</p>
        <p>Best sellers</p>
        <p>Recently viewed</p>
        <p>Popular this week</p>
        <p>All products</p>
      </div>

      <div>
        <div className="text-lg font-bold font-headings-h1 mb-4">Categories</div>
        <p>Crockery</p>
        <p>Furniture</p>
        <p>Homeware</p>
        <p>Plant pots</p>
        <p>Chairs</p>
        <p>Lighting</p>
      </div>

      <div>
        <div className="text-lg font-bold font-headings-h1 mb-4">Our Company</div>
        <p>About us</p>
        <p>Vacancies</p>
        <p>Contact us</p>
        <p>Privacy</p>
        <p>Returns policy</p>
      </div>

    </div>
      <div className="col-span-2 lg:col-span-1">
        <hr className="border-t border-primary my-4" />
        <p className="text-center text-white">Copyright 2022 Avion LTD</p>
      </div>
    </div> 
  );
}
