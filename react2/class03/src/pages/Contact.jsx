import React, {useState} from 'react'

const Contact = () => {
    let [name] = useState('')
   let name1 = '';
   let city = '';
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Name", name);
        console.log("City", city);
    }
  return (
    <main>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="py-5">
                    <h1 className='text-center mb-5'>Learn React-Form with AaMna AnSari </h1>
                    <form>
                        <div className="row">
                            <div className="col-12 col-md-6 mb-5">
                                <input type="text" placeholder='Enter your name:' className='form-control' onChange={(e)=>{name = e.target.value;
                                }}/>
                            </div>
                            <div className="col-12 col-md-6 mb-5">
                                <input type="text" placeholder='Enter your city:' className='form-control' onChange={(e)=>{city = e.target.value;
                                }}/>
                            </div>
                            <div className="col-12 col-md-6 offset-md-3">
                                <button className='btn btn-danger w-100' style={{color: 'white'}} onClick={handleSubmit}>Click Me</button>
                            </div>
                        </div>
                        
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
</main>
  )
}

export default Contact