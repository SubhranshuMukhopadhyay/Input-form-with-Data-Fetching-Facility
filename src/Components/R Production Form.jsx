import React, {useState} from 'react'
import '../Data/R Production Form.css'
import { FaHouse, FaRegMoon, FaSun} from "react-icons/fa6";
import {Workflows, Batch, Roles, Objecttypes, Status} from './R Form Items'

function RProductionForm() {

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
    objectid: "",
    objecttype: "",
    noofobjects: "",
    frames: "",
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
                      Object ID : ${inputs.objectid} \n
                      Object Type : ${inputs.objecttype} \n
                      # of Objects : ${inputs.noofobjects} \n
                      Frames : ${inputs.frames} \n
                      Status : ${inputs.stat} \n
                      Remarks : ${inputs.remarks}`;
    setSubmitted(formdata)
    }

  return (
    <div id={currentmode=='light'?'r-body-lightmode':'r-body-darkmode'}>
      <h1 id='r-h1'>R Production Form</h1>
      <div className={currentmode=='light'?'r-form-container-lightmode':'r-form-container-darkmode'}>
        <div className='r-lebel-divs'><label className={currentmode=='light'?'r-label-lightmode':'r-label-darkmode'}>Project Workflow</label></div>
        <div className='r-select-divs' >
          <select className={currentmode=='light'?'r-select-inputs-lightmode':'r-select-inputs-darkmode'} name='workflow' value={inputs.workflow} onChange={handleChange} required>
            {Workflows.map((workflow)=>{return <option key={workflow.Workflowid}>{workflow.Workflowoption}</option>})}
          </select>
        </div>
        <div className='r-lebel-divs'><label className={currentmode=='light'?'r-label-lightmode':'r-label-darkmode'}>Batch Type</label></div>
        <div className='r-select-divs'>
          <select className={currentmode=='light'?'r-select-inputs-lightmode':'r-select-inputs-darkmode'} name='batch' value={inputs.batch} onChange={handleChange} required>
            {Batch.map((batch)=>{return <option key={batch.Batchid}>{batch.Batchoptions}</option>})}
          </select>
        </div>
        <div className='r-lebel-divs'><label className={currentmode=='light'?'r-label-lightmode':'r-label-darkmode'}>Role</label></div>
        <div className='r-select-divs' >
          <select className={currentmode=='light'?'r-select-inputs-lightmode':'r-select-inputs-darkmode'} name='role' value={inputs.role} onChange={handleChange} required>
            {Roles.map((role)=>{return <option key={role.Roleid}>{role.Roleoptions}</option>})}
          </select>
        </div>
        <div className='r-lebel-divs'><label className={currentmode=='light'?'r-label-lightmode':'r-label-darkmode'}>Task Link</label></div>
        <div className='r-input-divs'><input className={currentmode=='light'?'r-inputs-lightmode':'r-inputs-darkmode'} type='text' name='tasklink' placeholder='Enter the Task Link (It should be a link)' value={inputs.tasklink} onChange={handleChange} required/></div>
        <div className='r-lebel-divs'><label className={currentmode=='light'?'r-label-lightmode':'r-label-darkmode'}>Batch Name</label></div>
        <div className='r-input-divs'><input className={currentmode=='light'?'r-inputs-lightmode':'r-inputs-darkmode'} type='text' name='batchname' placeholder='Enter the Batch Name (It should be text)' value={inputs.batchname} onChange={handleChange} required/></div>
        <div className='r-lebel-divs'><label className={currentmode=='light'?'r-label-lightmode':'r-label-darkmode'}>Object ID</label></div>
        <div className='r-input-divs'><input className={currentmode=='light'?'r-inputs-lightmode':'r-inputs-darkmode'} type='text' name='objectid' placeholder='Enter the Object ID (It should be a text)' value={inputs.objectid} onChange={handleChange} required/></div>
        <div className='r-lebel-divs'><label className={currentmode=='light'?'r-label-lightmode':'r-label-darkmode'}>Object Type</label></div>
        <div className='r-select-divs' >
          <select className={currentmode=='light'?'r-select-inputs-lightmode':'r-select-inputs-darkmode'} name='objecttype' value={inputs.objecttype} onChange={handleChange} required>
            {Objecttypes.map((objecttype)=>{return <option key={objecttype.Typeid}>{objecttype.Typeoptions}</option>})}
          </select>
        </div>
        <div className='r-lebel-divs'><label className={currentmode=='light'?'r-label-lightmode':'r-label-darkmode'}># of Objects</label></div>
        <div className='r-input-divs'><input className={currentmode=='light'?'r-inputs-lightmode':'r-inputs-darkmode'} type='number' name='noofobjects' placeholder='Enter the No. of objcts (It should be a number)' value={inputs.noofobjects} onChange={handleChange} required/></div>
        <div className='r-lebel-divs'><label className={currentmode=='light'?'r-label-lightmode':'r-label-darkmode'}>Frames</label></div>
        <div className='r-input-divs'><input className={currentmode=='light'?'r-inputs-lightmode':'r-inputs-darkmode'} type='number' name='frames' placeholder='Enter the No. of Frames (It should be a number)' value={inputs.frames} onChange={handleChange} required/></div>
        <div className='r-lebel-divs' ><label className={currentmode=='light'?'r-label-lightmode':'r-label-darkmode'}>Status</label></div>
        <div className='r-select-divs'>
          <select className={currentmode=='light'?'r-select-inputs-lightmode':'r-select-inputs-darkmode'} name='stat' value={inputs.stat} onChange={handleChange} required>
            {Status.map((stat)=>{return <option key={stat.Statusid}>{stat.Statusoptions}</option>})}
          </select>
        </div>
        <div className='r-lebel-divs'><label className={currentmode=='light'?'r-label-lightmode':'r-label-darkmode'}>Remarks</label></div>
        <div className='r-input-divs'><input className={currentmode=='light'?'r-inputs-lightmode':'r-inputs-darkmode'} type='text' name='remarks' placeholder='Enter Remarks (It should be text)' value={inputs.remarks} onChange={handleChange} required/></div>
        <div className='r-button-div'><button className='r-button-submit' onClick={submitaction}>Submit</button></div>
      </div>
      <div className={currentmode=='light'? 'r-output-container-lightmode':'r-output-container-darkmode'}>
        <div className='r-button-div'>
          <span className='r-modebuttonspan'><button className='r-modebutton' onClick={mode}>{currentmode == 'light'? <FaRegMoon/>:<FaSun/>}</button></span>
          <span className='r-homebuttonspan'><button className='r-homebutton' onClick={()=>location.href='/'}><FaHouse /></button></span>
        </div>
        <div id='r-submittedsection-div'><textarea id={currentmode=='light'? 'r-resultarea-lightmode':'r-resultarea-darkmode'} value={submitted} readOnly/></div>
      </div>
    </div>
  )
}

export default RProductionForm
