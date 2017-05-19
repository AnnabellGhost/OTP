import React from 'react';
import withLoadingSpinner from '../../components/withLoadingSpinner';
import ButtonGhost from '../../components/ButtonGhost';
/*actually there are lots of props but In Rendering ButtonMore all we need
is these three ,and you see the withLoadingSpinner needs isloading param,
and it filters it.*/















function ButtonMore({ onClick, nextHref, isHidden }) {
  return (
    <div className="button-more">
      {
        !nextHref || isHidden ?
        null :
        <ButtonGhost onClick={onClick}>More</ButtonGhost>
      }
    </div>
  );
}

export default withLoadingSpinner(ButtonMore);