import React from 'react';
/*function withLoading(Component) {
  return function composedComponent({ isFetchingAllPlans, ...props }) {
    if (!isFetchingAllPlans) {
      return <Component { ...props } />;
    }

    return <Loading />;
  };
}*/

function withLoading(WrappedComponenet){
  return ({isFetchingAllPlans,...props})=>
    isFetchingAllPlans===false ?<i>Loading</i>:<WrappedComponenet { ...props }/>
}
export default withLoading;
