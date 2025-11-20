import React, { useState } from 'react'
import '../Data/S Production Form.css'
import { IoMdRefresh } from "react-icons/io";
import { FaHouse, FaRegMoon, FaSun} from "react-icons/fa6";
import {Workflows, Batch, Roles, Status} from './S Form Items'

function SProductionForm () {

  let [currentmode, setcurrentmode] = useState('light')
    const mode = () => {  
      if (currentmode == 'light') {
        setcurrentmode('dark')
    }
    else if (currentmode == 'dark') {
      setcurrentmode('light')
    }
    }

const [inputs, setInputs] = useState({
      workflow: "",
      batch: "",
      role: "",
      tasklink: "",
      batchname: "",
      taskno: "",
      noofobjects: "",
      nooferrors: "",
      stat: "",
      remarks: ""
    });
  
const handleChange = (event) => {
      setInputs({
        ...inputs,
        [event.target.name]: event.target.value
      });
    }; 
    
const [submitted, setSubmitted] = useState("");
    const submitaction = () => { 
      const formdata = `Project Workflow: ${inputs.workflow} \n
                        Batch : ${inputs.batch} \n
                        Role : ${inputs.role} \n
                        Task Link : ${inputs.tasklink} \n
                        Batch Name : ${inputs.batchname} \n
                        Task No. : ${inputs.taskno} \n
                        No. of Objects : ${inputs.noofobjects} \n
                        No. of Errors : ${inputs.nooferrors} \n
                        Status : ${inputs.stat} \n
                        Remarks : ${inputs.remarks}`;
      setSubmitted(formdata)
      }  

  return (
    <div id={currentmode=='light'?'s-body-lightmode':'s-body-darkmode'}>
      <h1 id='s-h1'>S Production Form</h1>
            <div className={currentmode=='light'?'s-form-container-lightmode':'s-form-container-darkmode'}>
              <div className='s-lebel-divs'><label className={currentmode=='light'?'s-label-lightmode':'s-label-darkmode'}>Project Workflow</label></div>
              <div className='s-select-divs'>
                <select className={currentmode=='light'?'s-select-inputs-lightmode':'s-select-inputs-darkmode'} name='workflow' value={inputs.workflow} onChange={handleChange} required>
                  {Workflows.map((workflow)=>{return <option key={workflow.Workflowid}>{workflow.Workflowoption}</option>})}
                </select>
              </div>
              <div className='s-lebel-divs'><label className={currentmode=='light'?'s-label-lightmode':'s-label-darkmode'}>Batch Type</label></div>
              <div className='s-select-divs'>
                <select className={currentmode=='light'?'s-select-inputs-lightmode':'s-select-inputs-darkmode'} name='batch' value={inputs.batch} onChange={handleChange} required>
                  {Batch.map((batch)=>{return <option key={batch.Batchid}>{batch.Batchoptions}</option>})}
                </select>
              </div>
              <div className='s-lebel-divs'><label className={currentmode=='light'?'s-label-lightmode':'s-label-darkmode'}>Role</label></div>
              <div className='s-select-divs'>
                <select className={currentmode=='light'?'s-select-inputs-lightmode':'s-select-inputs-darkmode'} name='role' value={inputs.role} onChange={handleChange} required>
                  {Roles.map((role)=>{return <option key={role.Roleid}>{role.Roleoptions}</option>})}
                </select>
              </div>
              <div className='s-lebel-divs'><label className={currentmode=='light'?'s-label-lightmode':'s-label-darkmode'}>Task Link</label></div>
              <div className='s-input-divs'><input className={currentmode=='light'?'s-inputs-lightmode':'s-inputs-darkmode'} type='text' name='tasklink' placeholder='Enter the Task Link (It should be a link)' value={inputs.tasklink} onChange={handleChange} required/></div>
              <div className='s-lebel-divs'><label className={currentmode=='light'?'s-label-lightmode':'s-label-darkmode'}>Batch Name</label></div>
              <div className='s-input-divs'><input className={currentmode=='light'?'s-inputs-lightmode':'s-inputs-darkmode'} type='text' name='batchname' placeholder='Enter the Batch Name (It should be text)' value={inputs.batchname} onChange={handleChange} required/></div>
              <div className='s-lebel-divs'><label className={currentmode=='light'?'s-label-lightmode':'s-label-darkmode'}>Task Number</label></div>
              <div className='s-input-divs'><input className={currentmode=='light'?'s-inputs-lightmode':'s-inputs-darkmode'} type='number' name='taskno' placeholder='Enter the Task Number (It should be a number)' value={inputs.taskno} onChange={handleChange} required/></div>
              <div className='s-lebel-divs'><label className={currentmode=='light'?'s-label-lightmode':'s-label-darkmode'}># of Objects</label></div>
              <div className='s-input-divs'><input className={currentmode=='light'?'s-inputs-lightmode':'s-inputs-darkmode'} type='number' name='noofobjects' placeholder='Enter the No. of objcts (It should be a number)' value={inputs.noofobjects} onChange={handleChange} required/></div>
              <div className='s-lebel-divs'><label className={currentmode=='light'?'s-label-lightmode':'s-label-darkmode'}># of Error Fixed</label></div>
              <div className='s-input-divs'><input className={currentmode=='light'?'s-inputs-lightmode':'s-inputs-darkmode'} type='number' name='nooferrors' placeholder='Enter the No. of Errors (It should be a number)' value={inputs.nooferrors} onChange={handleChange} required/></div>
              <div className='s-lebel-divs'><label className={currentmode=='light'?'s-label-lightmode':'s-label-darkmode'}>Status</label></div>
              <div className='s-select-divs'>
                <select className={currentmode=='light'?'s-select-inputs-lightmode':'s-select-inputs-darkmode'} name='stat' value={inputs.stat} onChange={handleChange} required>
                  {Status.map((stat)=>{return <option key={stat.Statusid}>{stat.Statusoptions}</option>})}
                </select>
              </div>
              <div className='s-lebel-divs'><label className={currentmode=='light'?'s-label-lightmode':'s-label-darkmode'}>Remarks</label></div>
              <div className='s-input-divs'><input className={currentmode=='light'?'s-inputs-lightmode':'s-inputs-darkmode'} type='text' name='remarks' placeholder='Enter Remarks (It should be text)' value={inputs.remarks} onChange={handleChange} required/></div>
              <div className='s-button-div'><button className='s-button-submit' onClick={submitaction}>Submit</button></div>
            </div>
            <div className={currentmode=='light'? 's-output-container-lightmode':'s-output-container-darkmode'}>
                    <div className='s-button-div'>
                      <span className='s-refreshbuttonspan'><button className='s-refreshbutton' onClick={()=>location.href='/sproductionform'}><IoMdRefresh /></button></span>
                      <span className='s-modebuttonspan'><button className='s-modebutton' onClick={mode}>{currentmode == 'light'? <FaRegMoon/>:<FaSun/>}</button></span>
                      <span className='s-homebuttonspan'><button className='s-homebutton' onClick={()=>location.href='/'}><FaHouse /></button></span>
                    </div>
                    <div id='s-submittedsection-div'><textarea id={currentmode=='light'? 's-resultarea-lightmode':'s-resultarea-darkmode'} value={submitted} readOnly/></div>
            </div>
    </div>
  )
}

export default SProductionForm 
