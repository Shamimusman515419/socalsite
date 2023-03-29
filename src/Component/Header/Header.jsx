import React from 'react';

const Header = ({children}) => {
     return (
          <div className=' text-center'>
            <button className="p-2  my-3 rounded  text-3xl bg-primary  text-white">{children}</button>    
          </div>
     );
};

export default Header;