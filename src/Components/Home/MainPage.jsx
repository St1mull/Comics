import axios from 'axios';
import React from 'react';
import { API } from '../../helpers/consts';

const MainPage = () => {

  let res = axios(`${API}api/v1/comics`).then(function(data) {
    let info = data.data;
  })

  return (
    <div>
      
    </div>
  );
};

export default MainPage;