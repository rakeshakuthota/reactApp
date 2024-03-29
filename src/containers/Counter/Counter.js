import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 20" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubCounter}  />
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.stateResults.map(strResult=>{
                       return <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.val}</li>
                    })}
                    
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        ctr: state.ctr.counter,
        stateResults: state.res.results
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter :()=> dispatch({type:actionTypes.increment}),
        onDecrementCounter : () => dispatch({type:actionTypes.decrement}),
        onAddCounter:()=>dispatch({type:actionTypes.add,val:20}),
        onSubCounter:()=>dispatch({type:actionTypes.sub,val:10}),
        onStoreResult:(result)=>dispatch({type:actionTypes.storeResult,result:result}),
        onDeleteResult:(id)=>dispatch({type:actionTypes.deleteResult,strID:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);