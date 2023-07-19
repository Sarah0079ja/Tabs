import React,{useState, useEffect} from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'

const url = "https://course-api.com/react-tabs-project";
const Data = () => {
    const [jobs, setJobs] = useState([]);
    const [value, setValue] =  useState(0);
    const [loading, setLoading] = useState(true)
  
    
    const fetchData = async () => {    
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false);
    
    };
    
  useEffect(() => {
    fetchData()
  },[])

   if(loading === true){
    return <h2>loading...</h2>
   }
   const {company, dates, title, duties} = jobs[value]
  return (
    <section className='grid justify-center align-center'>
      <div className="">
        <h2 className="flex flex-grow text-4xl underline underline-offset-4 justify-center mt-10 text-gray-700 ">
          Experience
        </h2>
      </div>
      
      <div className="grid grid-cols-2 py-20 w-80vw ">
        {/* button container */}
        {/* job info */}
        <div className=" justify-center">
          {jobs.map((job, index) => {
            return (
              <button
                className="grid mt-5 
                w-48
                display-block
                leading-relaxed
                capitalize cursor-pointer hover:text-green-400 border-l-2 active hover:border-green-400 px-10 "
                key={job.index}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <article className=" mt-5 justify-center">
          <h3 className="text-4xl font-semobold">{title}</h3>
          <button className="border px-2 rounded bg-slate-300 text-slate-700 mt-3 mb-3">
            {company}
          </button>
          <p className="text-slate-500 mb-5">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="flex space-y-3">
                <FaAngleDoubleRight className="text-green-600 text-5xl"></FaAngleDoubleRight>
                <p className="ml-8 text-slate-800">{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Data