import React from 'react';
import WithLoading from './WithLoading'
function Button({isActive,ButtonName,onClick}){
	return(
				<button onClick={onClick} >
					{ButtonName}
				</button>
		);
}
// export default WithLoading(Button);
export default Button;