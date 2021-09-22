import React from "react";
import Card from "./Card";

const AluminiCard = () => {
  return (
    <div className="py-5">
      <h1 className="text-center font-bold text-3xl">
        IIITDM Alumini Speakers
      </h1>
      <div className=" py-5 flex flex-col md:flex-row">
        <Card
          link="https://www.linkedin.com/in/anuraggupta1729/"
          image="https://media-exp1.licdn.com/dms/image/C4E03AQFMk9GH_AMyVg/profile-displayphoto-shrink_800_800/0/1516331722729?e=1637798400&v=beta&t=dFqND4U4d_h5iqjcriTL1bSnKM6MBkRypzsFSs_wg-8"
          name="Anurag G."
          subtitle="Product Manager at Flipkart"
        />
        <Card
          link="https://www.linkedin.com/in/muralidharansriram/"
          image="https://media-exp1.licdn.com/dms/image/C4E03AQGZUi9F8brMOA/profile-displayphoto-shrink_800_800/0/1559165452345?e=1637798400&v=beta&t=R8wbthvyRWrOIZWaFuZmgT2zM9amblUqOt9opTRxFj4"
          name="Sriram Muralidharan"
          subtitle="Engineer | Engineering Program Manager | Product Manager | Tesla Alumni | UW-Madison Alumni"
        />
        <Card
          link="https://www.linkedin.com/in/shubhamksingh/"
          image="https://media-exp1.licdn.com/dms/image/C5103AQEVLze9HeTSow/profile-displayphoto-shrink_800_800/0/1583413332906?e=1637798400&v=beta&t=NNw4Ul88ugzZygvzrUGzyNmdmojSndfab7_bUhogWuU"
          name="Shubham Singh."
          subtitle="Technical Consultant at Fizyr, #1 in deeplearning software for automated picking of unknown items and parcels"
        />
      </div>
    </div>
  );
};

export default AluminiCard;
