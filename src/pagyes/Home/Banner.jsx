import React from 'react';
import { easeOut, motion} from "framer-motion";
import Team1 from '../../assets/Team/3konna.jpg'
import Team2 from '../../assets/Team/mahi.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='flex-1'>
          < motion.img 
          animate={{y:[50,100,50]}}
          transition={{duration: 10,repeat:Infinity}}
         
          className='max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl'
          src={Team1}
        />
        {/* repate img */}
         < motion.img 
          animate={{x:[100,150,100]}}
          transition={{duration: 10, delay: 5,repeat:Infinity}}
         
          className='max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl'
          src={Team2}
        />
        </div>
        <div className='flex-1'>
      
          <motion.h1 
            animate={{x:50}}
            transition={{duration:2,delay:1,ease:easeOut,repeat:Infinity}}
              className="text-5xl font-bold"><motion.span
              animate={{color:['#f1c40f','#a9183d']}}
                transition={{duration:1.5,repeat:Infinity}}
              >Latest</motion.span> <motion.span
              animate={{color:['#C70039 ','#FFA07A','#58d68d']}}
              transition={{duration:1.5,repeat:Infinity}}
              >Jobs</motion.span> For You</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;