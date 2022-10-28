import { use } from "marked";
import React, { useState } from "react";
import UserService from "../services/UserService";

export default function TaxManager(){

    const [grossSalo, setGrossSalo] = useState(" ");
    const handleChange = event => {
        setGrossSalo(event.target.value);
    
        console.log('gross salo is:', grossSalo);
      };

 let gross = {
            grossSalary: grossSalo,
            nssf: true,
            nhif: true,
            isPension: false,
            pensionAmount: 0,
            isMortgageInterest: false,
            mortgageInterestAmount: 0,
            isInsurance: false,
            insuranceAmount: 0
    }
    // console.log("na hapa",grossSalo)
    function calculateNet(){
        // console.log('oya -> ', grossSalo) 
        UserService.calculateNetSalary(gross).then((response)=> {
            console.log("hii response=>",response.data);
        })
    }


    return(
        <div>
        <h1>tax calculator</h1>
        <form onSubmit={calculateNet() }>
  <label>
    GROSS SALARY :
    <input type="number" name="name" value={grossSalo} onChange={handleChange} placeholder="GROSS SALARY" />
  </label>
  <input type="submit" value="Submit" />
</form>
<div>
    <p>NSSf: <span>Ksh</span></p>
    <p>Net Pay: <span>Ksh</span></p>
    <p>Taxable Income: <span>Ksh</span></p>
    <p>Tax Before Relief: <span>Ksh</span></p>
    <p>Personal Relief: <span>Ksh</span></p>
    <p>Insurance: <span>Ksh</span></p>
    <p>PAYE: <span>Ksh</span></p>
    <p>NHIF: <span>Ksh</span></p>

</div>
</div>
        
    )
}