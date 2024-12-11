'use client'

import { setStoreId } from "@/redux/slices/StoreIdSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Page(){


  const cur_store_id = useSelector((store) => store.StoreId.store_id);

  console.log(cur_store_id)

  return (
    <h1>
      hello
    </h1>
    );
};

