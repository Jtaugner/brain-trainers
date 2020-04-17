import React from 'react'
import useAmount from '../hooks/setAmount'

function amount(OriginalComponent) {

  return (props) =>{
    const {amount, increase, decrease} = useAmount(0);

    return <OriginalComponent
        {...props}
        amount={amount}
        increase={increase}
        decrease={decrease}
      />
  }

}
export default amount