import React, { useState } from "react";
import UserService from "../services/UserService";

class BillComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            bills:[]
        }

        // const [bills, setBills] = useState({});
        // this.state = {month:[]};
        // this.bil = {};
    }
    componentDidMount(){
        UserService.getBills().then((response) => {
            this.setState({bills: response.data})
            //  console.log('oya', this.bil)
        });
        // UserService.getMonthBill().then((response)=> {
        //     this.setState({month:response.data})
        //     // console.log(month);
        //     // console.log(response.data)
        // })
    }
    
    render(){
        return(
            <div>
            <h1 className="text-center">bills</h1>
            {this.state.bills && this.state.bills.map(bill => {
                return (
                <div key={bill.id}>
               <h4> Month No: {bill.monthId}</h4> 
                <p> Net Salary: {bill.netSalary} </p>
                {bill.bills.map(data =>{
                    return(
                        <div>
                        {data.name}
                        {data.value}
                        </div>
                    )

                })}
                <br></br><p>Balance:{bill.balance}</p>
                

                </div> 
                )
            })}


           

            </div>
        )
    }
}
export default BillComponent;



