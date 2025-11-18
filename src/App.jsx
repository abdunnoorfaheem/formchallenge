import { useState } from 'react';
import './App.css';
import Container from './components/Container';

function App() {

  let [form , setForm] = useState([{ name: "", gender: "" }])
  let [submittedData, setSubmittedData] = useState([]);

  let handleForm =(event,index)=>{
    let data =[...form];
    data[index][event.target.name] = event.target.value;
    setForm(data);
  }

  let validation =(form)=>{
    let data = [...form];
    let isValid = true;

    for(let i=0; i < data.length; i++){

    
      if(data[i].name === ""){
        data[i].namealert = "Enter Your Name";
        isValid = false;
      } else {
        data[i].namealert = "";
      }

      
      if(data[i].gender === ""){
        data[i].genderalert = "Select Your Gender";
        isValid = false;
      } else {
        data[i].genderalert = "";
      }
    }

    setForm(data);
    return isValid;
  }

  let submit =(e)=>{
    e.preventDefault();

    if(validation(form)){
      setSubmittedData(form);  
    }
  }
       
  let addField = ()=>{
    let items = {
      name :"",
      gender : ""
    }
    setForm([...form, items]);
  }

  let removeRow = (index)=>{
    let data = [...form];
    data.splice(index, 1);
    setForm(data);
  }

  return (
    <>
      <section>
        <Container>
          <div className="py-10 text-center bg-amber-100 rounded-2xl my-[50px] ">
            <form onSubmit={submit}>
            {form.map((item,index)=>(
              <div key={index}>
                
                <input 
                  type="text" 
                  name='name' 
                  placeholder='Name' 
                  className='border px-5 py-2 rounded-3xl mr-5 outline-0' 
                  onChange={event => handleForm(event,index)} 
                  value={item.name}
                />

                <select 
                  className='mb-8' 
                  name="gender" 
                  value={item.gender} 
                  onChange={event => handleForm(event,index)}
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                  
                {
                  index === 0 ? "" : 
                  <button type="button" onClick={()=>removeRow(index)} className='text-2xl font-bold ml-5 mb-12'>
                    X
                  </button> 
                }

                <h3 className="text-red-600">{item.namealert}</h3>
                <h3 className="text-red-600">{item.genderalert}</h3>
              </div>
            ))}

            </form>

            <button onClick={addField} className='border px-8 py-2 rounded-3xl text-2xl font-bold'>
               Add +
            </button> 
            <br /><br />
            <button onClick={submit} className='border px-8 py-2 rounded-3xl text-2xl font-bold'>
              Submit
            </button>

           
            

          </div>
          {submittedData.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4 text-center underline">Add Data</h2>

                <table className="w-full border-collapse border">
                  <thead>
                    <tr className="bg-amber-300">
                      <th className="border p-2">No.</th>
                      <th className="border p-2">Name</th>
                      <th className="border p-2">Gender</th>
                    </tr>
                  </thead>

                  <tbody>
                    {submittedData.map((item, index) => (
                      <tr key={index}>
                        <td className="border p-2">{index + 1}</td>
                        <td className="border p-2">{item.name}</td>
                        <td className="border p-2">{item.gender}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
        </Container>
      </section>
    </>
  )
}

export default App;
