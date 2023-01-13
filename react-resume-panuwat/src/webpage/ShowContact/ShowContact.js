import React from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import './ShowContact.css';



function ShowContact() {
    
const [contactS, setContact] = useState([]);

  
const GetEmployeeData = () => {
   
    const url = ('http://localhost:5000/contact/show')
    axios.get(url)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                    console.log(data);
                }
                else {
                    setContact(data)
                    console.log(data)
                    
                }
        })
        .catch(err => {
            console.log(err)
        })
        
}

      useEffect(() => {
        GetEmployeeData();
    }, [])
  return (
    <div className='headContianerShowContact'>
      <div className='con-showcontactsize'>
        <h1 className='h1class-showcontact'>ตารางแสดงการกรอกConTact</h1>
        <Table striped bordered hover size="sm" >
          <thead>
            <tr>
              <th className='textcolor'>Name</th>
              <th className='textcolor'>Email</th>
              <th className='textcolor'>Message</th>
              </tr>
          </thead>
          <tbody >
            {contactS.map((contact) =>
            <tr key={contact._id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.message}</td>
                                </tr>
                            )}
            </tbody>
        </Table>
      </div>   
    </div>
  )
}

export default ShowContact