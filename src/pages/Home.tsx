import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import Item from "../components/Item";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { AddData } from "../redux/store";

export interface MovieData {
  title: string;
  originallink: string;
  link: string;
  description: string;
  pubDate: string;
}

export const options: AxiosRequestConfig = {
  headers: {
    "X-Naver-Client-Id": process.env.REACT_APP_Client_ID,
    "X-Naver-Client-Secret": process.env.REACT_APP_Client_Secret,
  },
};

export default function Home() {
  const [data, setData] = useState<MovieData[]>([]);
  const dispatch = useDispatch();
  const selectData = useSelector((state: RootState) => state.data);
  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(
        "/v1/search/news.json?query=운세",
        options
      );
      setData(data.items);
    }
    getData();
  }, []);

  useEffect(() => {
    dispatch(AddData(data));
  }, [data]);

  return (
    <div>
      {selectData.data.map((elem: MovieData, idx: number) => {
        return <Item data={elem} key={idx} />;
      })}
    </div>
  );
}
