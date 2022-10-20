import React, { useState } from 'react';

const AboutFeature = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className='m-8 flex lg:flex-row  sm:flex-col flex-col'>
      <div className='flex-1'>
        <img className='w-full' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/about-img-1.jpg" alt="" />
      </div>

      <div className='flex-1 mx-2 '>
        
        <div className='my-2 flex flex-col md:block'>
          <span className={`border border-black py-1 px-5 m-2 hover:bg-gray-900 hover:text-white cursor-pointer font-medium tracking-wider uppercase ${index === 0 ? 'bg-gray-900 text-white' : null}`} onClick={() => setIndex(0)}>
            About
          </span>
          <span className={`border border-black py-1 px-5 m-2 hover:bg-gray-900 hover:text-white cursor-pointer font-medium tracking-wider uppercase ${index === 1 ? 'bg-gray-900 text-white' : null}`} onClick={() => setIndex(1)}>
            Services
          </span>
          <span className={`border border-black py-1 px-5 m-2 hover:bg-gray-900 hover:text-white cursor-pointer font-medium tracking-wider uppercase ${index === 2 ? 'bg-gray-900 text-white' : null}`} onClick={() => setIndex(2)}>
            History
          </span>
        </div>

        <div className='m-2'>
          <div hidden={index !== 0}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam hic voluptatum, qui blanditiis molestias in nam aliquid ullam rem quibusdam accusantium iste nulla rerum possimus suscipit totam sapiente quo accusamus!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corporis nisi nobis mollitia vel, illo dignissimos sapiente quidem? Quos reiciendis aliquid architecto et quidem sit neque eveniet labore voluptatibus dolorum?
            </p>
          </div>

          <div hidden={index !== 1}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores assumenda nemo totam tempore, maxime tempora corporis velit nesciunt! Sapiente impedit nobis nulla tempore quaerat excepturi eligendi reprehenderit animi deleniti fugit!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis maiores cum fugit officiis iste sit fugiat. Mollitia praesentium nulla neque animi reiciendis! Itaque corrupti, praesentium perspiciatis minus vitae quibusdam. Tempora!
            </p>
          </div>
          <div hidden={index !== 2}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quam. Quaerat, voluptate! A ea molestias ipsum atque corporis quod iure quia saepe odio, velit voluptatem dolor debitis deserunt quibusdam nisi.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam hic voluptatum, qui blanditiis molestias in nam aliquid ullam rem quibusdam accusantium iste nulla rerum possimus suscipit totam sapiente quo accusamus!
            </p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default AboutFeature;