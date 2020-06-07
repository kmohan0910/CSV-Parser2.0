import React from 'react'
import {useState} from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import './Bodal.css'
import Basic from './Dragdrop'
import Table from 'react-bootstrap/Table'
import {useEffect} from 'react'
import Compo from './compo'


const Bodal=()=>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inputfield,setinput]=useState([0,1,2,3])
  const tablecoloums=[0,1,2]
  const [columndata,handladd]=useState(["FirstName","Last Name","Email"])
  const [value,setvalue]=useState("")
  let firstname=[]
  const array1={
    0:[],
    1:[],
    2:[],
    3:[]
  }
  let lastname=[]
  let email=[]
  const [noofcol,setcol]=useState([0,1,2])

const setinput1=(myvalue,index,index1)=>{
array1[index].splice(index1,1,myvalue)
 console.log(array1)

}

  const handleemail=(myvalue,index)=>{
  email.splice(index,1,myvalue)
  console.log(email,"here")
    
}

  const handlefirstname=(myvalue,index)=>{
        firstname.splice(index,1,myvalue)
        console.log(firstname)
      }
  const handleadd=(e)=>{
    handladd([...columndata,value])
    setcol([...noofcol,noofcol.length+1])
    //columndata.push(value)
        }
  const setlastname=(index,e)=>{
   firstname.splice(e,1,index)
   console.log(lastname)
      }
      useEffect(() => {
        
      })

 return (
        <div>
          
           <Button variant="primary" onClick={handleShow}>   Upload CSV     </Button>
            {show?<Compo columndata1={columndata}/>:''}
            {/* <Modal  dialogClassName="modal-90w" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
             <Modal.Title>Add Records</Modal.Title>
            </Modal.Header>
            <Modal.Body> 
            <Basic/>




           <h2>....or Manually update data</h2>
           
           <Table striped bordered hover>
          <thead>
            <tr>
            <th>SNo</th>
                 {columndata.map((attr,index)=>{
                   return(<th>{columndata[index]}</th>)
                
                 })}
                </tr>
           </thead>
          <tbody>
            {inputfield.map((inputi,index)=>{

            return( 
                // <tr>
                //  <td>{index+1}</td>
                //  <td><input type="text" onChange={(e)=>handlefirstname(e.target.value,index)}></input></td>
                //  <td><input type="text"onChange={(e)=>setlastname(e.target.value,index)}></input></td>
                //   <td><input type="text"onChange={(e)=>handleemail(e.target.value,index)}></input></td>
                //  </tr>
                <tr>
                  <td>{index+1}</td>
                  {
                    noofcol.map((attr,index1)=>{
                      return <td><input onChange={(e)=>setinput1(e.target.value,index,index1)}></input></td>
                    })
                  }
                </tr>
        
                  )
                  })
              }
           </tbody>

            </Table>
            <input className="add-input" onChange={(e)=>setvalue(e.target.value)}></input>
            <button  class="hello" onClick={handleadd}>Add Column</button>
              </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal> */}
            </div>
        )
    }

export default Bodal;