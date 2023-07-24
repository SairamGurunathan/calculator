import React from 'react';
import Button from 'react-bootstrap/Button';



function Calculator() {
  return (
    <>
    <div className='container text-center'>
        <div className="border border-3 rounded-2">
    <div className=" border border-1">
                <h1>Calculator</h1>
            </div>
    <h3 className='screen'>
        <input type="text" />
    </h3>
    <div className="Button">
       
                <Button className='p-3 m-3' name="(" onClick={e => this.props.onClick(e.target.name)}>(</Button>
                <Button className='p-3 m-3' name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</Button>
                <Button className='p-3 m-3' name=")" onClick={e => this.props.onClick(e.target.name)}>)</Button>
                <Button className='p-3 m-3' name="C" onClick={e => this.props.onClick(e.target.name)}>C</Button><br/>
                

                <Button className='p-3 m-3' name="1" onClick={e => this.props.onClick(e.target.name)}>1</Button>
                <Button className='p-3 m-3' name="2" onClick={e => this.props.onClick(e.target.name)}>2</Button>
                <Button className='p-3 m-3' name="3" onClick={e => this.props.onClick(e.target.name)}>3</Button>
                <Button className='p-3 m-3' name="+" onClick={e => this.props.onClick(e.target.name)}>+</Button><br/>


                <Button className='p-3 m-3' name="4" onClick={e => this.props.onClick(e.target.name)}>4</Button>
                <Button className='p-3 m-3' name="5" onClick={e => this.props.onClick(e.target.name)}>5</Button>
                <Button className='p-3 m-3' name="6" onClick={e => this.props.onClick(e.target.name)}>6</Button>
                <Button className='p-3 m-3' name="-" onClick={e => this.props.onClick(e.target.name)}>-</Button><br/>

                <Button className='p-3 m-3' name="7" onClick={e => this.props.onClick(e.target.name)}>7</Button>
                <Button className='p-3 m-3' name="8" onClick={e => this.props.onClick(e.target.name)}>8</Button>
                <Button className='p-3 m-3' name="9" onClick={e => this.props.onClick(e.target.name)}>9</Button>
                <Button className='p-3 m-3' name="*" onClick={e => this.props.onClick(e.target.name)}>x</Button><br/>


                <Button className='p-3 m-3' name="." onClick={e => this.props.onClick(e.target.name)}>.</Button>
                <Button className='p-3 m-3' name="0" onClick={e => this.props.onClick(e.target.name)}>0</Button>
                <Button className='p-3 m-3' name="=" onClick={e => this.props.onClick(e.target.name)}>=</Button>
                <Button className='p-3 m-3' name="/" onClick={e => this.props.onClick(e.target.name)}>÷</Button><br/>
            </div>
            </div>
    </div>
    </>
  )
}

export default Calculator
