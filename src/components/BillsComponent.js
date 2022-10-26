import React from "react";
import UserService from "../services/UserService";

class BillComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            bills:[]
        }
    }
    componentDidMount(){
        UserService.getBills().then((response) => {
            this.setState({bills: response.data})
            console.log('oya')
        });
    }
    
    render(){
        // console.log('oya');
        return(
            <div>
            <h1 className="text-center"> Monthly Bills</h1>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <td>Month</td>
                        <td>Net salary</td>
                        <td>Balance</td>
                    </tr>
                    <tr>bills</tr>
                </thead>
                <tbody>
                    {
                        this.state.bills.map(
                            bill => 
                            <tr key= {bill.id}>
                                <td>{bill.monthId}</td>
                                <td>{bill.netSalary}</td>
                                <td>{bill.balance}</td>
                                <tr key= {bill.id}>
                                    <td> {bill.bills.name}</td>
                                    <td> {bill.bills.amount}</td>
                                </tr>
                                
                        {/* { console.log(bill.bills)}; */}

                            </tr>
                        )
                    }
                </tbody>
            </table>

            </div>
        )
    }


}
export default BillComponent;