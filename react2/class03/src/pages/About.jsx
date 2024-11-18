import React from 'react'

const About = () => {
    const handleSubmit = ()=>{
        console.log("Yahoooooo! Submit Successfully")
    }
  return (
    <main>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="py-5">
                        <h1 className='text-center'>Learn React with AaMna AnSari </h1>
                        <button className='btn btn-info m-5' onClick={handleSubmit} style={{color: 'black'}}>Click Me</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default About