import React from 'react';

const Model = (props) => {


     const { image_link, tool_name, description, features } = props.singleData;


     
     return (
          <div>
               <input type="checkbox" id="my-modal-5" className="modal-toggle" />
               <div className="modal p-2">
                    <div className="modal-box w-11/12 max-w-5xl">
                         <h3 className=" text-2xl font-bold  my-5"> {tool_name}</h3>
                         <figure className=" p-3">
                              <img
                                   className="w-full h-96"
                                   src={image_link && image_link[0]}
                                   alt="Album"
                              />
                         </figure>
                         <p className="py-4 text-lg font-bold">{description}</p>

                         {Object.values(features || {}).map((value ,index) => (
                              <p className=' text-xl font-semibold  my-4'> {index +1}.
                                   {value.feature_name ? value.feature_name : "Not Found"}
                              </p>
                         ))}

                         <div className="modal-action">
                              <label htmlFor="my-modal-5" className="btn">Close</label>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Model;