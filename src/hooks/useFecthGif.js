import { useEffect, useState } from "react";
import { GetGif } from "../helpers/GetGif";

export const useFecthGif = (data) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
useEffect(()=>{
  GetGif(data).then((imgs) => {
    setState({
      data: imgs,
      loading: false,
    });
  });

},[data])
  


  return state;
};
