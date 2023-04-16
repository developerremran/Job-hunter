import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getData } from '../LocalStroge/LocalStrogeDb';
import SInglePerItem from './SInglePerItem';

const SingleActiveJob = () => {
 const mainData = useLoaderData()
 const localData = getData() 
 let saveData = [];
 for(const id in localData){
    const foundData = mainData.find(jobItem => jobItem.id === id)
    if(foundData){
        saveData.push(foundData)
    }
 } 

//  console.log(saveData)

    return (
        <div>
            {saveData.map(perItem =><SInglePerItem perItem={perItem} key={perItem.id}></SInglePerItem>)}
        </div>
    );
};

export default SingleActiveJob;