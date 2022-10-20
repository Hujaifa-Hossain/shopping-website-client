import React, { useState } from 'react';
import { FeatureChild, FeatureContainer, TabContainer, Tabs } from './AboutElements';

const AboutFeature = () => {
  const [index, setIndex] = useState(0)
  return (
    <FeatureContainer>
      <FeatureChild>
        <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/about-img-1.jpg" alt="" />
      </FeatureChild>
      <FeatureChild>
        <Tabs>
          <span className={`tab-head ${index === 0 ? 'active' : null}`} onClick={() => setIndex(0)}>
            About
          </span>
          <span className={`tab-head ${index === 1 ? 'active' : null}`} onClick={() => setIndex(1)}>
            Services
          </span>
          <span className={`tab-head ${index === 2 ? 'active' : null}`} onClick={() => setIndex(2)}>
            History
          </span>
        </Tabs>
        <TabContainer>
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
      </TabContainer>
    </FeatureChild>
    </FeatureContainer >

    // <div>
    //   {/* container 
    //       // first div
    //       image
    //       // second div
    //       Tabs> tab head
    //       Tab container> tab body
    //   */}
    // </div>
  );
};

export default AboutFeature;